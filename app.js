(() => {
  const DATA = window.CLIMATE_DATA;
  const MAP = window.FLOOD_MAP;
  if (!DATA) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const charts = [];
  const I18N = window.I18N;
  const supportedLangs = ["en", "pt", "es"];
  const urlLang = new URLSearchParams(location.search).get("lang");
  let storedLang = null;
  try {
    storedLang = localStorage.getItem("floripa-lang");
  } catch (error) {
    storedLang = null;
  }
  let currentLang = supportedLangs.includes(urlLang) ? urlLang : (supportedLangs.includes(storedLang) ? storedLang : "en");
  let t = I18N[currentLang];
  let locale = currentLang === "pt" ? "pt-BR" : currentLang === "es" ? "es-AR" : "en-US";
  const textOriginals = new Map();
  const richOriginals = new Map();
  let mapController = null;

  const COLORS = {
    ink: "#1D2A23",
    inkSoft: "#435047",
    muted: "#5F675E",
    line: "rgba(29, 42, 35, 0.08)",
    surface: "#FBF8F1",
    forest: "#315C4B",
    terracotta: "#B65C3F",
    danger: "#B25037",
    ochre: "#D9A441",
    lagoon: "#4B8B8A",
    iris: "#6E5E8E",
    sage: "#8A9B72",
    sand: "#C9B7A0",
    amber: "#A9791F",
  };

  const byId = (id) => DATA.indicators.find((indicator) => indicator.id === id);
  const formatNumber = (value, digits = 0) =>
    Number(value).toLocaleString(locale, {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    });
  const years = (start, end) => Array.from({ length: end - start + 1 }, (_, index) => start + index);

  const padSeries = (values, length) => {
    const result = new Array(length).fill(null);
    values.forEach((value, index) => {
      if (index < length) result[index] = value;
    });
    return result;
  };

  const pathway = (length, startIndex, endIndex, startValue, endValue) => {
    const result = new Array(length).fill(null);
    const span = endIndex - startIndex || 1;
    for (let index = startIndex; index <= endIndex; index += 1) {
      result[index] = startValue + ((endValue - startValue) * (index - startIndex)) / span;
    }
    return result;
  };

  const hexToRgba = (hex, alpha) => {
    const clean = hex.replace("#", "");
    const value = clean.length === 3
      ? clean.split("").map((char) => char + char).join("")
      : clean;
    const red = parseInt(value.slice(0, 2), 16);
    const green = parseInt(value.slice(2, 4), 16);
    const blue = parseInt(value.slice(4, 6), 16);
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  };

  const collectOriginals = () => {
    const skip = "script, style, select, [data-i18n-html], #nb-name, #nb-region, #nb-context, #nb-pct, #nb-pop, #nb-area, #nb-pmrr, #nb-high, #nb-rank, #nb-ranking, #map-tooltip";
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (parent.closest(skip)) return NodeFilter.FILTER_REJECT;
        if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    while (walker.nextNode()) {
      const node = walker.currentNode;
      textOriginals.set(node, node.textContent);
    }
    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      richOriginals.set(element, element.innerHTML);
    });
  };

  const applyRich = () => {
    richOriginals.forEach((original, element) => {
      const key = element.dataset.i18nHtml;
      const html = currentLang === "en" ? original : (t.rich[key] || original);
      if (element.innerHTML !== html) element.innerHTML = html;
    });
  };

  const applyText = () => {
    textOriginals.forEach((original, node) => {
      const trimmed = original.trim();
      const translated = currentLang === "en" ? null : t.text[trimmed];
      const next = translated ? original.replace(trimmed, () => translated) : original;
      if (node.textContent !== next) node.textContent = next;
    });
  };

  const applyAria = () => {
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const key = element.dataset.i18nAria;
      if (t.aria[key]) element.setAttribute("aria-label", t.aria[key]);
    });
  };

  const applyTooltips = () => {
    document.querySelectorAll("[data-i18n-tooltip]").forEach((element) => {
      const key = element.dataset.i18nTooltip;
      const value = t.tooltips ? t.tooltips[key] : null;
      if (!value) return;
      element.dataset.tooltip = value;
      if (element.classList.contains("stack-seg")) {
        element.setAttribute("title", value);
      } else {
        element.setAttribute("aria-description", value);
      }
      if (element.classList.contains("term-help") || element.classList.contains("stack-seg")) {
        element.setAttribute("aria-label", value);
      }
    });
  };

  const languageTag = () => currentLang === "pt" ? "pt-BR" : currentLang === "es" ? "es-AR" : "en-US";

  const applyLanguage = (lang, refresh = true) => {
    currentLang = lang;
    t = I18N[lang];
    locale = lang === "pt" ? "pt-BR" : lang === "es" ? "es-AR" : "en-US";
    document.documentElement.lang = languageTag();
    document.title = t.meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", t.meta.description);
    const select = document.getElementById("language-select");
    if (select) select.value = lang;
    applyRich();
    applyText();
    applyAria();
    applyTooltips();
    if (refresh) {
      if (window.Chart) {
        charts.forEach((chart) => chart.destroy());
        charts.length = 0;
        createCharts();
      }
      initBikeSplit();
      if (mapController) mapController.refresh();
      const tooltip = document.getElementById("map-tooltip");
      if (tooltip) tooltip.hidden = true;
    }
  };

  if (window.Chart) {
    Chart.defaults.font.family = "'Instrument Sans', 'Helvetica Neue', sans-serif";
    Chart.defaults.font.size = 12;
    Chart.defaults.color = COLORS.muted;
    Chart.defaults.borderColor = COLORS.line;
    Chart.defaults.plugins.legend.display = false;
    Chart.defaults.plugins.tooltip.backgroundColor = COLORS.ink;
    Chart.defaults.plugins.tooltip.titleColor = "#F7F1E6";
    Chart.defaults.plugins.tooltip.bodyColor = "rgba(247, 241, 230, 0.88)";
    Chart.defaults.plugins.tooltip.borderColor = "rgba(255, 255, 255, 0.12)";
    Chart.defaults.plugins.tooltip.borderWidth = 1;
    Chart.defaults.plugins.tooltip.padding = 12;
    Chart.defaults.plugins.tooltip.cornerRadius = 10;
    Chart.defaults.plugins.tooltip.displayColors = true;
    Chart.defaults.plugins.tooltip.boxWidth = 8;
    Chart.defaults.plugins.tooltip.boxHeight = 8;
    Chart.defaults.plugins.tooltip.usePointStyle = true;
    Chart.defaults.plugins.tooltip.titleFont = {
      family: "'Bricolage Grotesque', sans-serif",
      size: 13,
      weight: "600",
    };
    Chart.defaults.plugins.tooltip.bodyFont = {
      family: "'Instrument Sans', sans-serif",
      size: 12,
    };
    Chart.defaults.animation.duration = reduceMotion ? 0 : 850;
    Chart.defaults.animation.easing = "easeOutQuart";

    Chart.register({
      id: "valueLabels",
      afterDatasetsDraw(chart, args, options) {
        if (!options || !options.enabled) return;
        const { ctx } = chart;
        ctx.save();
        ctx.font = "500 12px 'DM Mono', monospace";
        chart.data.datasets.forEach((dataset, datasetIndex) => {
          if (options.onlyDataset != null && datasetIndex !== options.onlyDataset) return;
          const meta = chart.getDatasetMeta(datasetIndex);
          if (!meta || !meta.data) return;
          const color = typeof options.color === "function" ? options.color(datasetIndex) : options.color;
          meta.data.forEach((element, index) => {
            if (options.onlyIndex != null && index !== options.onlyIndex) return;
            const value = dataset.data[index];
            if (value == null) return;
            const text = options.formatter ? options.formatter(value, index, datasetIndex) : String(value);
            ctx.fillStyle = color || COLORS.inkSoft;
            if (chart.options.indexAxis === "y") {
              ctx.textAlign = "left";
              ctx.textBaseline = "middle";
              ctx.fillText(text, element.x + 8, element.y);
            } else {
              ctx.textAlign = "center";
              ctx.textBaseline = "bottom";
              ctx.fillText(text, element.x, element.y - 8);
            }
          });
        });
        ctx.restore();
      },
    });

    Chart.register({
      id: "criticalChip",
      afterDatasetsDraw(chart, args, options) {
        if (!options || !options.enabled) return;
        const meta = chart.getDatasetMeta(0);
        const bar = meta && meta.data ? meta.data[options.index] : null;
        if (!bar) return;
        const { ctx, chartArea } = chart;
        const label = options.label || "";
        ctx.save();
        ctx.font = "500 12px 'DM Mono', monospace";
        const chipWidth = ctx.measureText(label).width + 28;
        const chipHeight = 24;
        const barLeft = bar.x - (bar.width || 0) / 2;
        let x = Math.max(chartArea.left + 4, barLeft - chipWidth - 14);
        let y = Math.max(chartArea.top + 4, bar.y - chipHeight - 12);

        ctx.beginPath();
        ctx.moveTo(x + chipWidth, y + chipHeight / 2);
        ctx.lineTo(barLeft - 4, bar.y + 12);
        ctx.strokeStyle = "rgba(29, 42, 35, 0.32)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(x, y, chipWidth, chipHeight, 999);
        else ctx.rect(x, y, chipWidth, chipHeight);
        ctx.fillStyle = COLORS.surface;
        ctx.fill();
        ctx.strokeStyle = "rgba(29, 42, 35, 0.14)";
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x + 10, y + chipHeight / 2, 3, 0, Math.PI * 2);
        ctx.fillStyle = COLORS.danger;
        ctx.fill();

        ctx.fillStyle = COLORS.inkSoft;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(label, x + 18, y + chipHeight / 2 + 0.5);
        ctx.restore();
      },
    });

    Chart.register({
      id: "goalBubble",
      afterDatasetsDraw(chart, args, options) {
        if (!options || !options.enabled) return;
        const active = chart.tooltip && chart.tooltip.getActiveElements ? chart.tooltip.getActiveElements() : [];
        if (options.hideOnIndex != null && active.some((item) => item.index === options.hideOnIndex)) return;
        const meta = chart.getDatasetMeta(options.datasetIndex ?? 1);
        const point = meta && meta.data ? meta.data[options.index] : null;
        if (!point) return;
        const { ctx, chartArea } = chart;
        const label = options.label || "";
        ctx.save();
        ctx.font = "500 12px 'Instrument Sans', sans-serif";
        const maxTextWidth = Math.min(230, chartArea.width - 40);
        const words = label.split(" ");
        const lines = [];
        let line = "";
        words.forEach((word) => {
          const test = line ? `${line} ${word}` : word;
          if (ctx.measureText(test).width > maxTextWidth && line) {
            lines.push(line);
            line = word;
          } else {
            line = test;
          }
        });
        if (line) lines.push(line);
        const textWidth = Math.max(...lines.map((text) => ctx.measureText(text).width));
        const bubbleWidth = textWidth + 24;
        const bubbleHeight = lines.length * 16 + 18;
        const placement = options.placement || "point";
        let x;
        let y;
        if (placement === "top-right" && chartArea.width >= 520) {
          x = chartArea.right - bubbleWidth - 4;
          y = chartArea.top + 4;
        } else {
          x = Math.max(chartArea.left + 4, Math.min(point.x - bubbleWidth + 18, chartArea.right - bubbleWidth - 4));
          y = Math.max(chartArea.top + 4, point.y - bubbleHeight - 22);
          const tailX = Math.max(x + 16, Math.min(point.x, x + bubbleWidth - 16));
          ctx.beginPath();
          ctx.moveTo(tailX - 6, y + bubbleHeight);
          ctx.lineTo(point.x, point.y - 1);
          ctx.lineTo(tailX + 6, y + bubbleHeight);
          ctx.closePath();
          ctx.fillStyle = COLORS.ink;
          ctx.fill();
        }

        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(x, y, bubbleWidth, bubbleHeight, 12);
        else ctx.rect(x, y, bubbleWidth, bubbleHeight);
        ctx.fillStyle = COLORS.ink;
        ctx.fill();

        ctx.fillStyle = COLORS.surface;
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        lines.forEach((text, index) => ctx.fillText(text, x + 12, y + 9 + index * 16));
        ctx.restore();
      },
    });

    Chart.register({
      id: "emissionsPulse",
      afterRender(chart, args, options) {
        if (!options || !options.enabled) return;
        const element = document.getElementById(options.id);
        const meta = chart.getDatasetMeta(options.datasetIndex ?? 0);
        const point = meta && meta.data ? meta.data[options.index] : null;
        if (!element || !point) return;
        element.style.left = `${point.x}px`;
        element.style.top = `${point.y}px`;
        element.style.opacity = "1";
      },
    });

    Chart.register({
      id: "calloutBubble",
      afterDatasetsDraw(chart, args, options) {
        if (!options || !options.enabled) return;
        const meta = chart.getDatasetMeta(options.datasetIndex ?? 0);
        const point = meta && meta.data ? meta.data[options.index] : null;
        if (!point) return;
        const { ctx, chartArea } = chart;
        const label = options.label || "";
        const fontSize = options.fontSize || 17;
        const fontWeight = options.fontWeight || 700;
        const lineHeight = options.lineHeight || 22;
        const padX = 14;
        const padY = 10;
        ctx.save();
        ctx.font = `${fontWeight} ${fontSize}px 'Instrument Sans', sans-serif`;
        const maxTextWidth = Math.min(options.maxWidth || 330, chartArea.width - 32);
        const words = label.split(" ");
        const lines = [];
        let line = "";
        words.forEach((word) => {
          const test = line ? `${line} ${word}` : word;
          if (ctx.measureText(test).width > maxTextWidth && line) {
            lines.push(line);
            line = word;
          } else {
            line = test;
          }
        });
        if (line) lines.push(line);
        const textWidth = Math.max(...lines.map((text) => ctx.measureText(text).width));
        const bubbleWidth = textWidth + padX * 2;
        const bubbleHeight = lines.length * lineHeight + padY * 2;
        let x = point.x - bubbleWidth / 2;
        let y = point.y - bubbleHeight - 20;
        x = Math.max(chartArea.left + 4, Math.min(x, chartArea.right - bubbleWidth - 4));
        y = Math.max(chartArea.top + 4, y);
        const tailX = Math.max(x + 16, Math.min(point.x, x + bubbleWidth - 16));

        ctx.beginPath();
        ctx.moveTo(tailX - 7, y + bubbleHeight);
        ctx.lineTo(point.x, point.y - 1);
        ctx.lineTo(tailX + 7, y + bubbleHeight);
        ctx.closePath();
        ctx.fillStyle = COLORS.ink;
        ctx.fill();

        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(x, y, bubbleWidth, bubbleHeight, 14);
        else ctx.rect(x, y, bubbleWidth, bubbleHeight);
        ctx.fillStyle = COLORS.ink;
        ctx.fill();

        ctx.fillStyle = COLORS.surface;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        lines.forEach((text, index) => ctx.fillText(text, x + padX, y + padY + lineHeight / 2 + index * lineHeight));
        ctx.restore();
      },
    });
  }

  const gradientFill = (color) => (context) => {
    const { chart } = context;
    const { ctx, chartArea } = chart;
    if (!chartArea) return hexToRgba(color, 0.12);
    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
    gradient.addColorStop(0, hexToRgba(color, 0.3));
    gradient.addColorStop(1, hexToRgba(color, 0));
    return gradient;
  };

  const chartBase = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    plugins: { legend: { display: false }, valueLabels: { enabled: false } },
    layout: { padding: { top: 8, right: 10, bottom: 0, left: 0 } },
  };

  const createLineChart = (id, config) => {
    const canvas = document.getElementById(id);
    if (!canvas) return;
    const lastTargetIndex = config.target.reduce((last, value, index) => (value != null ? index : last), -1);
    charts.push(new Chart(canvas, {
      type: "line",
      data: {
        labels: config.labels,
        datasets: [
          {
            label: t.charts.actual,
            data: config.actual,
            borderColor: config.color,
            backgroundColor: gradientFill(config.color),
            borderWidth: 2.4,
            fill: true,
            tension: 0.3,
            pointRadius: 3,
            pointHoverRadius: 5,
            pointBackgroundColor: COLORS.surface,
            pointBorderColor: config.color,
            pointBorderWidth: 2,
            spanGaps: false,
          },
          {
            label: t.charts.netZero,
            data: config.target,
            borderColor: "#5F675E",
            borderWidth: 1.8,
            borderDash: [5, 5],
            fill: false,
            tension: 0.15,
            pointRadius: (context) => (context.dataIndex === lastTargetIndex ? 4 : 0),
            pointHoverRadius: 0,
            pointBackgroundColor: "#5F675E",
            pointBorderColor: COLORS.surface,
            pointBorderWidth: 2,
            spanGaps: false,
          },
        ],
      },
      options: {
        ...chartBase,
        plugins: {
          ...chartBase.plugins,
          goalBubble: config.goalBubble || { enabled: false },
          calloutBubble: config.calloutBubble || { enabled: false },
          emissionsPulse: config.pulse || { enabled: false },
          tooltip: {
            filter: (item) => !(config.growthIndex != null && item.datasetIndex === 1 && item.dataIndex === config.growthIndex),
            footerFont: { family: "'Instrument Sans', sans-serif", size: 14, weight: "400" },
            footerColor: "#F7F1E6",
            footerAlign: "left",
            footerMarginTop: 6,
            callbacks: {
              label: (context) => {
                if (context.parsed.y == null) return "";
                return `${context.dataset.label}: ${config.format(context.parsed.y)}`;
              },
              footer: (items) => {
                if (config.growthIndex == null || !items.some((item) => item.dataIndex === config.growthIndex)) return [];
                return config.growthNote || [];
              },
            },
          },
        },
        scales: {
          x: {
            grid: { display: false },
            border: { display: false },
            ticks: {
              color: COLORS.muted,
              font: { family: "'Instrument Sans', sans-serif", size: 12 },
              maxRotation: 0,
              autoSkip: false,
              callback: function (value, index) {
                const label = config.labels[index];
                if (config.xTicks && !config.xTicks.includes(label)) return "";
                if (config.xTicksDense && this.chart.width < 460 && !config.xTicksDense.includes(label)) return "";
                return label;
              },
            },
          },
          y: {
            min: config.min,
            max: config.max,
            grid: { color: COLORS.line, drawTicks: false },
            border: { display: false },
            ticks: {
              color: COLORS.muted,
              font: { family: "'Instrument Sans', sans-serif", size: 12 },
              padding: 8,
              maxTicksLimit: 6,
              stepSize: config.yStep,
              callback: config.tick,
            },
          },
        },
      },
    }));
  };

  const donutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "72%",
    radius: "94%",
    layout: { padding: 4 },
    plugins: { legend: { display: false }, valueLabels: { enabled: false } },
    elements: {
      arc: {
        borderColor: COLORS.surface,
        borderWidth: 2.5,
        borderRadius: 4,
        spacing: 1,
      },
    },
  };

  const createDonut = (id, labels, values, colors, tooltipLabel) => {
    const canvas = document.getElementById(id);
    if (!canvas) return;
    charts.push(new Chart(canvas, {
      type: "doughnut",
      data: {
        labels,
        datasets: [{ data: values, backgroundColor: colors, hoverBackgroundColor: colors, hoverOffset: 5 }],
      },
      options: {
        ...donutOptions,
        plugins: {
          ...donutOptions.plugins,
          tooltip: { callbacks: { label: (context) => ` ${tooltipLabel(context.label, context.raw)}` } },
        },
      },
    }));
  };

  const createVerticalBar = (id, labels, values, colors, config) => {
    const canvas = document.getElementById(id);
    if (!canvas) return;
    charts.push(new Chart(canvas, {
      type: "bar",
      data: {
        labels,
        datasets: [{
          data: values,
          backgroundColor: colors,
          hoverBackgroundColor: colors,
          borderRadius: 8,
          borderSkipped: false,
          barPercentage: 0.55,
          categoryPercentage: 0.75,
        }],
      },
      options: {
        ...chartBase,
        plugins: {
          ...chartBase.plugins,
          tooltip: { callbacks: { label: (context) => ` ${config.tooltip(context.raw, context.dataIndex)}` } },
          valueLabels: {
            enabled: true,
            formatter: config.valueLabel,
            color: COLORS.inkSoft,
          },
          criticalChip: config.criticalChip || { enabled: false },
        },
        scales: {
          x: {
            grid: { display: false },
            border: { display: false },
            ticks: {
              color: COLORS.inkSoft,
              font: { family: "'Instrument Sans', sans-serif", size: 12 },
            },
          },
          y: {
            beginAtZero: true,
            max: config.max,
            grid: { color: COLORS.line, drawTicks: false },
            border: { display: false },
            ticks: {
              color: COLORS.muted,
              font: { family: "'Instrument Sans', sans-serif", size: 12 },
              padding: 8,
              maxTicksLimit: 5,
              stepSize: config.step,
              callback: config.tick,
            },
          },
        },
        layout: { padding: { top: 24, right: 8, bottom: 0, left: 0 } },
      },
    }));
  };

  const createCharts = () => {
    if (!window.Chart) return;

    const emissions = byId("city_emissions");
    const emissionLabels = years(2010, 2050);
    const index2024 = emissionLabels.indexOf(2024);
    const index2050 = emissionLabels.indexOf(2050);
    const setChartAria = (id, key) => {
      const canvas = document.getElementById(id);
      if (canvas) canvas.setAttribute("aria-label", t.charts.aria[key]);
    };
    setChartAria("emissionsTrend", "emissionsTrend");
    createLineChart("emissionsTrend", {
      labels: emissionLabels,
      actual: padSeries(emissions.history.map((entry) => entry.gross_tco2e), emissionLabels.length),
      target: pathway(emissionLabels.length, index2024, index2050, 839121, 0),
      color: COLORS.terracotta,
      xTicks: [2010, 2015, 2020, 2024, 2035, 2050],
      xTicksDense: [2010, 2020, 2035, 2050],
      min: 0,
      max: 1000000,
      yStep: 200000,
      tick: (value) => `${formatNumber(Math.round(value / 1000))}k`,
      format: (value) => `${formatNumber(value)} tCO₂e`,
      goalBubble: { enabled: true, datasetIndex: 1, index: index2050, label: t.charts.emissionsGoal, hideOnIndex: index2024, placement: "point" },
      growthIndex: index2024,
      growthNote: t.charts.emissionsGrowth,
      pulse: { enabled: true, datasetIndex: 0, index: index2024, id: "emissions-pulse" },
    });

    setChartAria("emissionsMix", "emissionsMix");
    createDonut(
      "emissionsMix",
      t.charts.mixLabels,
      [
        emissions.details.transport_tco2e_2024,
        emissions.details.waste_tco2e_2024,
        emissions.details.stationary_energy_tco2e_2024,
        emissions.details.agriculture_tco2e_2024,
      ],
      [COLORS.terracotta, "#C97B52", "#DFAE7C", "#E6CE9F"],
      (label, value) => `${label}: ${formatNumber(value)} tCO₂e (${formatNumber((value / emissions.current_value) * 100, 1)}%)`
    );

    const mobility = byId("mobility_emissions");
    setChartAria("collisionsChart", "collisions");
    createVerticalBar(
      "collisionsChart",
      ["2023", "2024"],
      [mobility.details.cyclist_collisions_2023, mobility.details.cyclist_collisions_2024],
      ["#E6CE9F", COLORS.terracotta],
      {
        max: 30,
        step: 10,
        tick: (value) => `${value}`,
        valueLabel: (value) => `${formatNumber(value)}`,
        tooltip: (value) => t.charts.tooltipCollisions.replace("{value}", formatNumber(value)),
        criticalChip: { enabled: true, index: 1, label: t.charts.sc401Chip },
      }
    );

    setChartAria("mobilitySpendChart", "spending");
    createVerticalBar(
      "mobilitySpendChart",
      ["2015", "2023"],
      [mobility.details.mobility_spending_pct_2015, mobility.details.mobility_spending_pct_2023],
      ["#E6CE9F", COLORS.terracotta],
      {
        max: 3,
        step: 1,
        tick: (value) => `${value}%`,
        valueLabel: (value) => `${formatNumber(value, 2)}%`,
        tooltip: (value, index) => {
          const template = index === 1 ? t.charts.tooltipSpendTotal : t.charts.tooltipSpendNoTotal;
          return template
            .replace("{value}", formatNumber(value, 2))
            .replace("{total}", formatNumber(50.2, 1));
        },
      }
    );
  };

  const initBikeSplit = () => {
    const mobility = byId("mobility_emissions");
    if (!mobility) return;
    const bike = mobility.details.cycling_network_breakdown_km_2026;
    const safe = bike.ciclovias + bike.ciclofaixas;
    const shared = bike.ciclorrotas + bike.shared_spaces;
    const total = safe + shared;
    const target = 350;
    const gap = Math.max(target - total, 0);
    const safePct = target ? (safe / target) * 100 : 0;
    const sharedPct = target ? (shared / target) * 100 : 0;
    const gapPct = target ? (gap / target) * 100 : 0;
    const setText = (id, value) => {
      const element = document.getElementById(id);
      if (element) element.textContent = value;
    };
    setText("bike-total", `${formatNumber(total, 2)} km`);
    setText("bike-safe-label", `${formatNumber(safe, 1)} km`);
    setText("bike-shared-label", `${formatNumber(shared, 1)} km`);
    setText("bike-gap-label", `${formatNumber(gap, 2)} km`);
    const safeBar = document.getElementById("bike-safe-bar");
    const sharedBar = document.getElementById("bike-shared-bar");
    const gapBar = document.getElementById("bike-gap-bar");
    if (safeBar) safeBar.style.width = `${safePct}%`;
    if (sharedBar) sharedBar.style.width = `${sharedPct}%`;
    if (gapBar) gapBar.style.width = `${gapPct}%`;
    const legend = document.getElementById("bike-split-legend");
    if (legend) legend.style.gridTemplateColumns = `${safePct}% ${sharedPct}% ${gapPct}%`;
    const bar = document.getElementById("bike-split-bar");
    if (bar && t.charts.aria.bikeSplit) {
      bar.setAttribute(
        "aria-label",
        t.charts.aria.bikeSplit
          .replace("{safe}", formatNumber(safe, 1))
          .replace("{shared}", formatNumber(shared, 1))
          .replace("{gap}", formatNumber(gap, 2))
      );
    }
  };

  const regionLabel = (region) => t.map.regions[region] || region;

  const floodColor = (pct) => {
    if (pct == null) return "#DDD3C4";
    if (pct >= 30) return "#A94832";
    if (pct >= 15) return "#C97B52";
    if (pct >= 5) return "#DFAE7C";
    if (pct >= 2) return "#E6CE9F";
    return "#E9E0CD";
  };

  const initMap = () => {
    if (!MAP) return;
    const svg = document.getElementById("flood-map");
    const frame = document.getElementById("map-frame");
    const tooltip = document.getElementById("map-tooltip");
    const select = document.getElementById("neighborhood-select");
    const panel = document.querySelector(".nb-panel");
    const ranking = document.getElementById("nb-ranking");
    if (!svg || !select || !panel) return;

    svg.setAttribute("viewBox", `0 0 ${MAP.width} ${MAP.height}`);
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const paths = new Map();

    MAP.bairros.forEach((bairro) => {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", bairro.path);
      path.setAttribute("fill", floodColor(bairro.floodPct));
      path.setAttribute("class", "nb-path");
      path.setAttribute("tabindex", "0");
      path.setAttribute("role", "button");
      path.setAttribute("aria-label", t.map.neighborhoodAria.replace("{name}", bairro.name).replace("{pct}", formatNumber(bairro.floodPct, 1)));
      path.dataset.name = bairro.name;
      group.appendChild(path);
      paths.set(bairro.name, path);

      path.addEventListener("click", () => {
        selectNeighborhood(bairro.name);
      });
      path.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectNeighborhood(bairro.name);
        }
      });
      path.addEventListener("mouseenter", (event) => {
        showTooltip(bairro, event);
      });
      path.addEventListener("mousemove", (event) => {
        showTooltip(bairro, event);
      });
      path.addEventListener("mouseleave", () => {
        tooltip.hidden = true;
      });
    });

    svg.appendChild(group);

    const sortedNames = MAP.bairros
      .map((bairro) => bairro.name)
      .sort((a, b) => a.localeCompare(b, "pt-BR"));
    sortedNames.forEach((name) => {
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      select.appendChild(option);
    });

    let selectedPath = null;
    let currentNeighborhood = null;

    const showTooltip = (bairro, event) => {
      if (!frame) return;
      const rect = frame.getBoundingClientRect();
      tooltip.hidden = false;
      tooltip.innerHTML = t.map.tooltip.replace("{name}", bairro.name).replace("{pct}", formatNumber(bairro.floodPct, 1)).replace("{pop}", formatNumber(bairro.floodPop));
      const box = tooltip.getBoundingClientRect();
      const nextLeft = Math.min(
        Math.max(event.clientX - rect.left + 14, 8),
        Math.max(8, rect.width - box.width - 8)
      );
      const nextTop = Math.min(
        Math.max(event.clientY - rect.top + 14, 8),
        Math.max(8, rect.height - box.height - 8)
      );
      tooltip.style.left = `${nextLeft}px`;
      tooltip.style.top = `${nextTop}px`;
    };

    const selectNeighborhood = (name, scrollPanel = false) => {
      const bairro = MAP.bairros.find((item) => item.name === name);
      if (!bairro) return;

      if (selectedPath) selectedPath.classList.remove("is-selected");
      selectedPath = paths.get(name) || null;
      if (selectedPath) {
        selectedPath.classList.add("is-selected");
        selectedPath.parentNode.appendChild(selectedPath);
      }

      currentNeighborhood = name;
      select.value = name;
      document.getElementById("nb-name").textContent = bairro.name;
      document.getElementById("nb-region").textContent = regionLabel(bairro.region);
      document.getElementById("nb-pct").textContent = `${formatNumber(bairro.floodPct, 1)}%`;
      document.getElementById("nb-pop").textContent = `≈${formatNumber(bairro.floodPop)}`;
      document.getElementById("nb-area").textContent = `${formatNumber(bairro.floodKm2, 2)} km²`;
      document.getElementById("nb-pmrr").textContent = `${formatNumber(bairro.pmrrPct, 1)}%`;
      document.getElementById("nb-high").textContent = `${formatNumber(bairro.highRiskPct, 1)}%`;
      const rank = [...MAP.bairros].sort((a, b) => (b.floodPop || 0) - (a.floodPop || 0)).findIndex((item) => item.name === name) + 1;
      document.getElementById("nb-rank").textContent = `#${rank}`;

      const pct = Number(bairro.floodPct);
      const people = formatNumber(bairro.floodPop);
      const template = pct < 1 ? t.map.contextLow : t.map.contextHigh;
      const context = template
        .replace("{name}", bairro.name)
        .replace("{pct}", formatNumber(pct, 1))
        .replace("{pop}", people);
      document.getElementById("nb-context").textContent = context;

      if (scrollPanel && window.innerWidth < 980) {
        panel.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
      }
    };

    select.addEventListener("change", (event) => selectNeighborhood(event.target.value));

    const top = MAP.topByPop.slice(0, 8);
    const scaleMax = 10000;
    ranking.innerHTML = top.map((bairro) => `
      <div class="rank-item" data-name="${bairro.name}">
        <span class="rank-name">${bairro.name}</span>
        <span class="rank-track" aria-hidden="true"><i style="width:${Math.min((bairro.floodPop / scaleMax) * 100, 100)}%"></i></span>
        <span class="rank-value">≈${formatNumber(bairro.floodPop)}</span>
      </div>
    `).join("");

    const axis = document.getElementById("nb-ranking-axis");
    if (axis) {
      axis.innerHTML = [0, 2000, 4000, 6000, 8000, 10000]
        .map((value) => `<span>${value === 0 ? "0" : `${formatNumber(value / 1000)}k`}</span>`)
        .join("");
    }

    const initial = MAP.topByPop[0] ? MAP.topByPop[0].name : MAP.bairros[0].name;
    selectNeighborhood(initial);
    return {
      refresh() {
        MAP.bairros.forEach((bairro) => {
          const path = paths.get(bairro.name);
          if (path) {
            path.setAttribute("aria-label", t.map.neighborhoodAria.replace("{name}", bairro.name).replace("{pct}", formatNumber(bairro.floodPct, 1)));
          }
        });
        ranking.querySelectorAll(".rank-item").forEach((row) => {
          const bairro = MAP.bairros.find((item) => item.name === row.dataset.name);
          const value = row.querySelector(".rank-value");
          if (bairro && value) value.textContent = `≈${formatNumber(bairro.floodPop)}`;
        });
        selectNeighborhood(currentNeighborhood || initial);
      },
    };
  };

  const spySections = ["emissions", "mobility", "flood", "action", "methodology"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const navLinks = new Map(
    Array.from(document.querySelectorAll(".top-nav a[data-nav]")).map((link) => [link.dataset.nav, link])
  );

  let scrollTicking = false;

  const header = document.querySelector(".site-header");
  const backToTop = document.querySelector(".back-to-top");

  const updateActiveNav = () => {
    const threshold = (header ? header.offsetHeight : 78) + 40;
    let currentId = "emissions";
    spySections.forEach((section) => {
      if (section.getBoundingClientRect().top <= threshold) currentId = section.id;
    });
    navLinks.forEach((link, id) => {
      const active = id === currentId;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  const updateScrollChrome = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle("is-stuck", y > 8);
    if (backToTop) backToTop.classList.toggle("is-visible", y > window.innerHeight * 0.9);
  };

  const initNav = () => {
    window.addEventListener("scroll", () => {
      if (scrollTicking) return;
      scrollTicking = true;
      window.requestAnimationFrame(() => {
        updateActiveNav();
        updateScrollChrome();
        scrollTicking = false;
      });
    }, { passive: true });
    window.addEventListener("resize", updateScrollChrome, { passive: true });
    updateActiveNav();
    updateScrollChrome();
  };

  const initWasteTabs = () => {
    const tabs = Array.from(document.querySelectorAll("[data-waste-tab]"));
    if (!tabs.length) return;
    const panels = tabs.map((tab) => document.getElementById(tab.getAttribute("aria-controls")));

    const activate = (activeIndex) => {
      tabs.forEach((tab, index) => {
        const active = index === activeIndex;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
        const panel = panels[index];
        if (!panel) return;
        panel.classList.toggle("is-active", active);
        panel.hidden = !active;
      });
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activate(index));
      tab.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
        event.preventDefault();
        const offset = event.key === "ArrowRight" ? 1 : -1;
        const nextIndex = (index + offset + tabs.length) % tabs.length;
        activate(nextIndex);
        tabs[nextIndex].focus();
      });
    });
  };

  const budgetPercent = () => new Intl.NumberFormat(languageTag(), {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const layoutBudgetTiles = (map) => {
    const tiles = [...map.querySelectorAll(".budget-tile")];
    if (!tiles.length) return;
    const width = map.clientWidth;
    const height = map.clientHeight;
    if (!width || !height) return;

    const values = tiles.map((tile) => Number(tile.dataset.value) || 0);
    const mapTotal = values.reduce((sum, value) => sum + value, 0) || 1;
    const grandTotal = Number(map.dataset.total) || mapTotal;
    const percent = budgetPercent();
    const columns = [];
    tiles.forEach((tile) => {
      const key = tile.dataset.col || "a";
      let column = columns.find((entry) => entry.key === key);
      if (!column) {
        column = { key, tiles: [] };
        columns.push(column);
      }
      column.tiles.push(tile);
    });

    const inset = 2;
    let x = 0;
    columns.forEach((column) => {
      const columnTotal = column.tiles.reduce((sum, tile) => sum + (Number(tile.dataset.value) || 0), 0);
      const columnWidth = (columnTotal / mapTotal) * width;
      let y = 0;
      column.tiles.forEach((tile) => {
        const value = Number(tile.dataset.value) || 0;
        const tileHeight = (value / columnTotal) * height;
        tile.style.left = `${x + inset}px`;
        tile.style.top = `${y + inset}px`;
        tile.style.width = `${Math.max(0, columnWidth - inset * 2)}px`;
        tile.style.height = `${Math.max(0, tileHeight - inset * 2)}px`;
        const valueElement = tile.querySelector(".budget-tile-value");
        if (valueElement) valueElement.textContent = `${percent.format((value / grandTotal) * 100)}%`;
        y += tileHeight;
      });
      x += columnWidth;
    });
  };

  const layoutBudgetChips = () => {
    const tail = document.querySelector("[data-budget-tail]");
    if (!tail) return;
    const chips = [...tail.querySelectorAll(".budget-chip")];
    if (!chips.length) return;
    const map = document.querySelector("[data-budget-map]");
    const grandTotal = map ? Number(map.dataset.total) || 0 : 0;
    if (!grandTotal) return;

    const percent = budgetPercent();
    const values = chips.map((chip) => Number(chip.dataset.value) || 0);
    const stacked = tail.clientWidth < 520;
    tail.classList.toggle("is-stacked", stacked);

    if (stacked) {
      chips.forEach((chip) => {
        chip.style.width = "";
      });
    } else {
      const gap = 4;
      const available = tail.clientWidth - gap * (chips.length - 1);
      const scaled = values.map((value) => Math.pow(value, 0.4));
      const scaleSum = scaled.reduce((total, value) => total + value, 0) || 1;
      let widths = scaled.map((value) => (value / scaleSum) * available);
      const floor = 84;
      for (let pass = 0; pass < 4; pass += 1) {
        const deficit = widths.reduce((total, width) => total + Math.max(0, floor - width), 0);
        if (deficit <= 0) break;
        const slack = widths.map((width) => Math.max(0, width - floor));
        const slackSum = slack.reduce((total, width) => total + width, 0);
        if (!slackSum) break;
        widths = widths.map((width, index) => Math.max(floor, width - deficit * (slack[index] / slackSum)));
      }
      chips.forEach((chip, index) => {
        chip.style.width = `${widths[index]}px`;
      });
    }

    chips.forEach((chip, index) => {
      const element = chip.querySelector(".budget-chip-value");
      if (element) element.textContent = `${percent.format((values[index] / grandTotal) * 100)}%`;
    });
  };

  const layoutBudgetMap = () => {
    const map = document.querySelector("[data-budget-map]");
    if (map) layoutBudgetTiles(map);
    layoutBudgetChips();
  };

  const initBudgetMap = () => {
    layoutBudgetMap();
    let timer = 0;
    window.addEventListener("resize", () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(layoutBudgetMap, 120);
    });

    const card = document.querySelector(".more-card-budget");
    if (!card) return;
    const tip = card.querySelector(".budget-tip");
    if (!tip) return;

    let hideTimer = 0;

    const hideTip = () => {
      tip.classList.remove("is-visible");
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => {
        if (!tip.classList.contains("is-visible")) tip.hidden = true;
      }, 180);
    };

    const showTip = (tile) => {
      const text = tile.dataset.tooltip;
      if (!text) return;
      window.clearTimeout(hideTimer);
      tip.textContent = text;
      tip.hidden = false;
      tip.classList.remove("is-visible");
      const cardRect = card.getBoundingClientRect();
      const tileRect = tile.getBoundingClientRect();
      const tipRect = tip.getBoundingClientRect();
      const maxLeft = cardRect.width - tipRect.width - 8;
      let left = tileRect.left - cardRect.left + tileRect.width / 2 - tipRect.width / 2;
      left = Math.max(8, Math.min(left, Math.max(8, maxLeft)));
      let top = tileRect.top - cardRect.top - tipRect.height - 6;
      if (top < 4) top = tileRect.bottom - cardRect.top + 6;
      tip.style.left = `${left}px`;
      tip.style.top = `${top}px`;
      requestAnimationFrame(() => tip.classList.add("is-visible"));
    };

    card.querySelectorAll(".budget-tile").forEach((tile) => {
      tile.addEventListener("mouseenter", () => showTip(tile));
      tile.addEventListener("mouseleave", hideTip);
      tile.addEventListener("focus", () => showTip(tile));
      tile.addEventListener("blur", hideTip);
    });
    window.addEventListener("scroll", hideTip, { passive: true });
  };

  const initReveal = () => {
    const elements = document.querySelectorAll(".reveal");
    if (reduceMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -12px 0px", threshold: 0.02 });
    elements.forEach((element) => observer.observe(element));
  };

  collectOriginals();
  applyLanguage(currentLang, false);
  if (currentLang !== "en" && !urlLang) {
    try {
      const initialUrl = new URL(location.href);
      initialUrl.searchParams.set("lang", currentLang);
      history.replaceState(null, "", initialUrl);
    } catch (error) {}
  }
  createCharts();
  initBudgetMap();
  initBikeSplit();
  initWasteTabs();
  mapController = initMap();
  initReveal();
  initNav();

  document.getElementById("language-select").addEventListener("change", (event) => {
    const lang = event.target.value;
    if (!supportedLangs.includes(lang)) return;
    try {
      localStorage.setItem("floripa-lang", lang);
    } catch (error) {}
    try {
      const url = new URL(location.href);
      if (lang === "en") url.searchParams.delete("lang");
      else url.searchParams.set("lang", lang);
      history.replaceState(null, "", url);
    } catch (error) {}
    applyLanguage(lang, true);
    layoutBudgetMap();
  });
})();
