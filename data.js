window.CLIMATE_DATA = {
  "metadata": {
    "city": "Florianópolis",
    "state": "Santa Catarina",
    "country": "Brasil",
    "population": 537211,
    "population_year": 2022,
    "population_estimate_2026": 598370,
    "area_km2": 674.844,
    "reference_year": 2026,
    "last_updated": "2026-11-03",
    "currency": "BRL",
    "data_status": "mixed_sources_citizen",
    "methodology": "Citizen-facing indicators combine official municipal, state and federal estimates with linked research and clearly labeled modeling. The flood map is built from the city GeoPortal flood-prone polygons and 2022 neighborhood population estimates; neighborhood exposure is an areal estimate, not a door-to-door count.",
    "sources": [
      {
        "label": "IBGE Cidades — Florianópolis",
        "publisher": "Instituto Brasileiro de Geografia e Estatística",
        "url": "https://www.ibge.gov.br/cidades-e-estados/sc/florianopolis.html"
      },
      {
        "label": "SEEG 13.0 — municipal emissions",
        "publisher": "Observatório do Clima",
        "url": "https://seeg.eco.br/dados/"
      },
      {
        "label": "Inventário de Emissões de GEE 2022",
        "publisher": "Prefeitura de Florianópolis / BID / Egis",
        "url": "https://strapi.redeplanejamento.pmf.sc.gov.br/uploads/P2_R1_Inventario_Cenarios_e_Metas_2024_v05_20241004_ae6887db3b.pdf"
      },
      {
        "label": "Estratégia de Descarbonização 2024",
        "publisher": "Prefeitura de Florianópolis / BID / Egis",
        "url": "https://strapi.redeplanejamento.pmf.sc.gov.br/uploads/P3_Estrategia_de_Descarbonizacao_V02_20241018_a19a622991.pdf"
      },
      {
        "label": "Plano Municipal de Redução de Riscos",
        "publisher": "Prefeitura de Florianópolis",
        "url": "https://redeplanejamento.pmf.sc.gov.br/pt-BR/planos/plano-municipal-de-reducao-de-riscos"
      },
      {
        "label": "Portal da Transparência",
        "publisher": "Prefeitura de Florianópolis",
        "url": "https://www.pmf.sc.gov.br/transparencia/"
      },
      {
        "label": "+Pedal cycling programme",
        "publisher": "Prefeitura de Florianópolis",
        "url": "https://redeplanejamento.pmf.sc.gov.br/pt-BR/programas/mais-pedal"
      },
      {
        "label": "National Urban Mobility Study — Florianópolis",
        "publisher": "BNDES",
        "url": "https://www.bndes.gov.br/arquivos/fep-mobilidade-urbana/relatorios-diagnostico/relatorio-Florianopolis-vol-1.pdf"
      },
      {
        "label": "Cyclist collision survey",
        "publisher": "Observatório da Bicicleta / Amobici",
        "url": "https://observatoriodabicicleta.org.br/atropelamentos-de-ciclistas-disparam-mais-de-400-em-florianopolis-em-apenas-um-ano/"
      },
      {
        "label": "Florianópolis traffic record, 2024",
        "publisher": "ND Mais / Detran-SC",
        "url": "https://ndmais.com.br/transito/florianopolis-tem-recorde-em-acidentes-e-registra-uma-ocorrencia-de-transito-a-cada-25-minutos/"
      },
      {
        "label": "Cycling infrastructure in Florianópolis",
        "publisher": "NSC Total",
        "url": "https://www.nsctotal.com.br/cotidiano/viloes-ou-aliados-bicicletas-e-patinetes-eletricos-impactam-a-mobilidade-em-florianopolis"
      },
      {
        "label": "SINISA — sanitation and drainage",
        "publisher": "Instituto Água e Saneamento",
        "url": "https://www.aguaesaneamento.org.br/municipios-e-saneamento/sc/florianopolis"
      },
      {
        "label": "GeoPortal — flood-prone areas",
        "publisher": "Prefeitura de Florianópolis",
        "url": "https://geoportal.pmf.sc.gov.br/map"
      },
      {
        "label": "GeoPortal — PMRR risk sectors",
        "publisher": "Prefeitura de Florianópolis",
        "url": "https://florianopolis-geoportal.geowise.com.br/downloads"
      }
    ]
  },
  "signal_summary": {
    "signals_total": 5,
    "off_track": 4,
    "at_risk": 0,
    "on_track": 1,
    "off_track_pct": 80,
    "label": "Falling behind",
    "methodology": "Counts the status assigned to each of the five indicators. Status compares the latest available value with the stated target or benchmark; it is not a composite score."
  },
  "indicators": [
    {
      "id": "city_emissions",
      "name_pt": "Emissões municipais de gases de efeito estufa",
      "name_en": "Municipal greenhouse-gas emissions",
      "category": "mitigation",
      "unit": "tCO2e_year",
      "current_value": 839121.2,
      "current_year": 2024,
      "baseline_value": 689481.0,
      "baseline_year": 2010,
      "target_value": 0,
      "target_year": 2050,
      "status": "off_track",
      "data_type": "official_estimate",
      "description": "Gross municipal greenhouse-gas emissions excluding land-use change (energy, waste, agriculture and industrial processes), estimated annually by SEEG.",
      "provenance": {
        "type": "Official estimate",
        "sources": [
          {
            "label": "SEEG 13.0 — municipal emissions",
            "publisher": "Observatório do Clima",
            "url": "https://seeg.eco.br/dados/",
            "note": "Annual municipal series 2010–2024; the chart uses gross emissions excluding land-use change = energy + waste + agriculture + industrial processes. SEEG also publishes a full gross series including land-use change."
          },
          {
            "label": "Inventário de Emissões de GEE 2022",
            "publisher": "Prefeitura de Florianópolis / BID / Egis",
            "url": "https://strapi.redeplanejamento.pmf.sc.gov.br/uploads/P2_R1_Inventario_Cenarios_e_Metas_2024_v05_20241004_ae6887db3b.pdf",
            "note": "GPC inventory for 2022, used as a cross-check with different boundaries."
          },
          {
            "label": "Estratégia de Descarbonização 2024",
            "publisher": "Prefeitura de Florianópolis / BID / Egis",
            "url": "https://strapi.redeplanejamento.pmf.sc.gov.br/uploads/P3_Estrategia_de_Descarbonizacao_V02_20241018_a19a622991.pdf",
            "note": "City commitment to net zero by 2050."
          }
        ],
        "methodology": "The trend line uses gross emissions excluding land-use change: energy, waste, agriculture and industrial processes. It excludes all land-use change, not only removals. Net emissions include land-use emissions and removals.",
        "caveats": "The 839,121 tCO₂e figure is gross emissions excluding land-use change (energy, waste, agriculture and industrial processes). SEEG's full gross including land-use change is 840,651 tCO₂e in 2024 (896,141 tCO₂e in 2010, −6.2%). Net emissions are 804,299 tCO₂e and include both land-use emissions and removals: net AFOLU is −34,822 tCO₂e, while gross removals are −36,353 tCO₂e. The city GPC inventory uses a different scope and should not be mixed with the SEEG series."
      },
      "details": {
        "gross_tco2e_2024": 839121.2,
        "gross_including_luc_tco2e_2024": 840651.0,
        "gross_including_luc_tco2e_2010": 896141.0,
        "change_2010_2024_including_luc_pct": -6.2,
        "gross_removals_tco2e_2024": -36353.0,
        "net_tco2e_2024": 804299.2,
        "change_2010_2024_pct": 21.7,
        "change_2020_2024_pct": 37.0,
        "consecutive_increases_since_2020": 4,
        "transport_tco2e_2024": 571863.3,
        "transport_share_pct": 68.1,
        "waste_tco2e_2024": 206102.1,
        "waste_share_pct": 24.6,
        "stationary_energy_tco2e_2024": 42511.8,
        "stationary_energy_share_pct": 5.1,
        "agriculture_tco2e_2024": 18644.1,
        "agriculture_share_pct": 2.2,
        "afolu_net_tco2e_2024": -34822.0,
        "per_capita_tco2e_2024": 1.56
      },
      "history": [
        {
          "year": 2010,
          "gross_tco2e": 689481.0,
          "net_tco2e": 873674.8,
          "transport_tco2e": 518014.7,
          "waste_tco2e": 123673.6,
          "afolu_tco2e": 184193.9
        },
        {
          "year": 2011,
          "gross_tco2e": 733519.3,
          "net_tco2e": 752399.1,
          "transport_tco2e": 553917.8,
          "waste_tco2e": 128805.1,
          "afolu_tco2e": 18879.8
        },
        {
          "year": 2012,
          "gross_tco2e": 791543.3,
          "net_tco2e": 816383.6,
          "transport_tco2e": 608277.8,
          "waste_tco2e": 133755.1,
          "afolu_tco2e": 24840.3
        },
        {
          "year": 2013,
          "gross_tco2e": 806482.4,
          "net_tco2e": 847043.2,
          "transport_tco2e": 616728.4,
          "waste_tco2e": 141273.5,
          "afolu_tco2e": 40560.8
        },
        {
          "year": 2014,
          "gross_tco2e": 818377.8,
          "net_tco2e": 876577.9,
          "transport_tco2e": 629510.9,
          "waste_tco2e": 146216.8,
          "afolu_tco2e": 58200.0
        },
        {
          "year": 2015,
          "gross_tco2e": 819033.2,
          "net_tco2e": 849273.7,
          "transport_tco2e": 623671.0,
          "waste_tco2e": 151773.3,
          "afolu_tco2e": 30240.5
        },
        {
          "year": 2016,
          "gross_tco2e": 822286.8,
          "net_tco2e": 854323.1,
          "transport_tco2e": 620075.4,
          "waste_tco2e": 156030.2,
          "afolu_tco2e": 32036.3
        },
        {
          "year": 2017,
          "gross_tco2e": 813144.8,
          "net_tco2e": 827633.4,
          "transport_tco2e": 607662.1,
          "waste_tco2e": 160910.7,
          "afolu_tco2e": 14488.5
        },
        {
          "year": 2018,
          "gross_tco2e": 786217.1,
          "net_tco2e": 787139.1,
          "transport_tco2e": 577354.8,
          "waste_tco2e": 165397.8,
          "afolu_tco2e": 922.0
        },
        {
          "year": 2019,
          "gross_tco2e": 794915.1,
          "net_tco2e": 826338.7,
          "transport_tco2e": 585380.6,
          "waste_tco2e": 169548.9,
          "afolu_tco2e": 31423.6
        },
        {
          "year": 2020,
          "gross_tco2e": 612305.4,
          "net_tco2e": 605199.3,
          "transport_tco2e": 396380.6,
          "waste_tco2e": 174698.1,
          "afolu_tco2e": -7106.1
        },
        {
          "year": 2021,
          "gross_tco2e": 681151.1,
          "net_tco2e": 671433.8,
          "transport_tco2e": 456722.4,
          "waste_tco2e": 179506.2,
          "afolu_tco2e": -9717.3
        },
        {
          "year": 2022,
          "gross_tco2e": 759944.3,
          "net_tco2e": 735801.6,
          "transport_tco2e": 529239.7,
          "waste_tco2e": 184056.1,
          "afolu_tco2e": -24142.7
        },
        {
          "year": 2023,
          "gross_tco2e": 796221.1,
          "net_tco2e": 774957.8,
          "transport_tco2e": 558147.8,
          "waste_tco2e": 188800.2,
          "afolu_tco2e": -21263.4
        },
        {
          "year": 2024,
          "gross_tco2e": 839121.2,
          "net_tco2e": 804299.2,
          "transport_tco2e": 571863.3,
          "waste_tco2e": 206102.1,
          "afolu_tco2e": -34822.0
        }
      ]
    },
    {
      "id": "waste_lixo_zero",
      "name_pt": "Recuperação de resíduos orgânicos e metas Lixo Zero",
      "name_en": "Organic waste recovery and Zero Waste targets",
      "category": "waste",
      "unit": "percent_organics_diverted",
      "current_value": 14,
      "current_year": 2025,
      "target_year": 2030,
      "target_dry_recyclables_pct": 60,
      "target_organics_pct": 90,
      "status": "off_track",
      "data_type": "official",
      "description": "Share of the organic waste fraction diverted from landfill: 14% in 2025, against a 90% goal for 2030.",
      "provenance": {
        "type": "Official",
        "sources": [
          {
            "label": "Revisão do PMGIRS 2025",
            "publisher": "Prefeitura de Florianópolis",
            "url": "https://strapi.redeplanejamento.pmf.sc.gov.br/uploads/26_08_2025_Oficina_prestadores_de_servico_e_comercios_9d9d9a3cfd.pdf",
            "note": "Published 2024 valorisation rates and the PMGIRS targets (85% organics in 2025, 90% in 2030)."
          },
          {
            "label": "TCE/SC — valorização 2023",
            "publisher": "Tribunal de Contas de Santa Catarina / Prefeitura de Florianópolis",
            "url": "https://www.tcesc.tc.br/sites/default/files/Palestra_Cidade_Lixo_Zero_caso_Florian%C3%B3polis.pdf",
            "note": "2023 valorisation slide: organics 13.03%, dry recyclables 10.33%. The summary table in the same deck swaps these two labels."
          },
          {
            "label": "PMF — resíduos sólidos 2025",
            "publisher": "Prefeitura de Florianópolis / Imagem da Ilha",
            "url": "https://www.imagemdailha.com.br/noticias/cidade/floripa-entra-no-seleto-grupo-lixo-zero.html",
            "note": "2025: 14% of organics diverted from landfill."
          },
          {
            "label": "Comcap — indicadores",
            "publisher": "Autarquia Comcap",
            "url": "https://www.pmf.sc.gov.br/sistemas/comcap/indicadores.php",
            "note": "Household collection covers 100% of the city."
          },
          {
            "label": "SEEG 13.0",
            "publisher": "Observatório do Clima",
            "url": "https://seeg.eco.br/dados/",
            "note": "Waste-sector emissions series in history, 2010–2024."
          }
        ],
        "methodology": "Only published percentage rates are used. 2023 organics (13.03%) and dry recyclables (10.33%) come from the 2023 valorisation slide in the TCE/SC deck; 2024 organics (12.93%) and dry recyclables (10.76%) come from the 2024 valorisation slide in the PMGIRS revision. 2025 organics (14%) comes from the PMF. No rates were derived from tonnages.",
        "caveats": "The 2023 summary table in the same presentation swaps the dry-recyclables and organics labels; the 2023 valorisation slide is used because it matches the 2024 series. No official 2025 dry-recyclables rate has been published. The 2022 GPC inventory uses a different scope (8.5% of all collected waste) and is not used."
      },
      "details": {
        "organics_rate_pct": 12.93,
        "organics_rate_year": 2024,
        "organics_diverted_pct_2025": 14,
        "organics_target_pct_2025": 85,
        "organics_target_pct_2030": 90,
        "dry_recyclables_rate_pct": 10.76,
        "dry_recyclables_rate_year": 2024,
        "dry_recyclables_target_pct_2030": 60,
        "collection_coverage_pct": 100,
        "waste_emissions_tco2e_2022": 184056,
        "waste_emissions_tco2e_2024": 206102,
        "waste_emissions_change_2010_2024_pct": 66.7,
        "landfill_gas_capture_pct": 46.2,
        "seasonal_increase_pct": 21,
        "organics_rate_series_pct": [
          { "year": 2023, "value": 13.03 },
          { "year": 2024, "value": 12.93 },
          { "year": 2025, "value": 14.0 }
        ],
        "dry_recyclables_rate_series_pct": [
          { "year": 2023, "value": 10.33 },
          { "year": 2024, "value": 10.76 }
        ]
      },
      "history": [
        {
          "year": 2010,
          "waste_emissions_tco2e": 123673.6
        },
        {
          "year": 2011,
          "waste_emissions_tco2e": 128805.1
        },
        {
          "year": 2012,
          "waste_emissions_tco2e": 133755.1
        },
        {
          "year": 2013,
          "waste_emissions_tco2e": 141273.5
        },
        {
          "year": 2014,
          "waste_emissions_tco2e": 146216.8
        },
        {
          "year": 2015,
          "waste_emissions_tco2e": 151773.3
        },
        {
          "year": 2016,
          "waste_emissions_tco2e": 156030.2
        },
        {
          "year": 2017,
          "waste_emissions_tco2e": 160910.7
        },
        {
          "year": 2018,
          "waste_emissions_tco2e": 165397.8
        },
        {
          "year": 2019,
          "waste_emissions_tco2e": 169548.9
        },
        {
          "year": 2020,
          "waste_emissions_tco2e": 174698.1
        },
        {
          "year": 2021,
          "waste_emissions_tco2e": 179506.2
        },
        {
          "year": 2022,
          "waste_emissions_tco2e": 184056.1
        },
        {
          "year": 2023,
          "waste_emissions_tco2e": 188800.2
        },
        {
          "year": 2024,
          "waste_emissions_tco2e": 206102.1
        }
      ]
    },
    {
      "id": "flood_risk",
      "name_pt": "População em áreas de risco de inundação e deslizamento",
      "name_en": "Flood-prone neighborhoods and municipal risk",
      "category": "adaptation",
      "unit": "households_flood_prone",
      "current_value": 66208,
      "current_year": 2024,
      "status": "off_track",
      "data_type": "research_derived",
      "description": "Households in flood-prone areas, mapped flood zones and PMRR risk sectors.",
      "provenance": {
        "type": "Official + research + derived",
        "sources": [
          {
            "label": "Plano Municipal de Redução de Riscos",
            "publisher": "Prefeitura de Florianópolis",
            "url": "https://redeplanejamento.pmf.sc.gov.br/pt-BR/planos/plano-municipal-de-reducao-de-riscos",
            "note": "PMRR created in 2006, revised in 2014; the new revision began in 2024 (Decree 26.762/2024)."
          },
          {
            "label": "Cadastros territoriais e risco em Florianópolis",
            "publisher": "Linheira & Oliveira / VII SEDRES (Doity)",
            "url": "https://doity.com.br/anais/viisedres/trabalho/348700",
            "note": "Risk-area population rose from 55,003 in 2014 to 69,088 in 2022 (+14,084 people), with 26.6% more buildings. The dashboard reports the difference between rounded totals as 14,085."
          },
          {
            "label": "Sea-level rise and coastal flooding in Florianópolis",
            "publisher": "Theseus / Metropolia",
            "url": "http://theseus.fi/handle/10024/812440",
            "note": "6.8 km² of built environment exposed to sea-level rise and high tides; 0.25–0.30 m rise by 2050."
          },
          {
            "label": "UFSC coastal flooding research",
            "publisher": "Raízes da Cooperação",
            "url": "https://raizesdacooperacao.org.br/pesquisa-cientifica-identifica-areas-criticas-aos-efeitos-de-inundacoes-costeiras-na-grande-florianopolis/",
            "note": "Moderate coastal floods projected to become more than 10 times more frequent by 2050."
          },
          {
            "label": "SINISA — sanitation and drainage",
            "publisher": "Instituto Água e Saneamento",
            "url": "https://www.aguaesaneamento.org.br/municipios-e-saneamento/sc/florianopolis",
            "note": "22.1% of households (66,208) in flood-prone areas; no hydrological alert system and no drainage master plan."
          },
          {
            "label": "GeoPortal — flood-prone areas",
            "publisher": "Prefeitura de Florianópolis",
            "url": "https://geoportal.pmf.sc.gov.br/map",
            "note": "Municipal flood-prone polygons (389 features)."
          },
          {
            "label": "GeoPortal — PMRR risk sectors",
            "publisher": "Prefeitura de Florianópolis",
            "url": "https://florianopolis-geoportal.geowise.com.br/downloads",
            "note": "153 PMRR risk sectors, including 65 high or very high risk."
          }
        ],
        "methodology": "Flood-prone area and neighborhood exposure are derived from the city GeoPortal WFS layers (ma_inundacao, gvw_bairros) and 2022 population estimates. Neighborhood residents in flood zones are estimated by area share, assuming uniform density within each neighborhood.",
        "caveats": "Neighborhood exposure is an areal estimate, not a household survey. Flood polygons show susceptibility, not a specific return period. The 6.8 km² coastal built-area figure comes from a separate sea-level-rise study and should not be added to the 85.4 km² municipal flood layer."
      },
      "details": {
        "risk_population_2014": 55003,
        "risk_population_2022": 69088,
        "increase_people": 14085,
        "increase_pct": 25.6,
        "buildings_increase_pct": 26.6,
        "coastal_built_area_exposed_km2": 6.8,
        "coastal_built_area_exposed_pct": 6.75,
        "vacant_land_exposed_km2": 16.9,
        "slr_m_2050_low": 0.25,
        "slr_m_2050_high": 0.3,
        "moderate_flood_frequency_multiplier_2050": 10,
        "federal_risk_population_2010": 23105,
        "critical_roads": [
          "SC-401",
          "SC-402",
          "SC-406",
          "Avenida Aderbal Ramos da Silva"
        ],
        "households_flood_prone_pct": 22.1,
        "households_flood_prone": 66208,
        "mapped_flood_area_km2": 85.4,
        "pmrr_risk_sectors": 153,
        "pmrr_high_or_very_high_sectors": 65,
        "pmrr_risk_area_km2": 12.7,
        "pmrr_high_risk_area_km2": 1.15,
        "flood_events_last_5_years": 6,
        "has_hydrological_alert_system": false,
        "has_drainage_master_plan": false,
        "pmrr_revision_started_year": 2024,
        "pmrr_base_year": 2014,
        "pmrr_created_year": 2006,
        "pmrr_last_revised_year": 2014,
        "pmrr_revision_decree": "26.762/2024",
        "neighborhood_exposure": [
          {
            "name": "Tapera da Base",
            "region": "Região Sul da Ilha",
            "population_2022": 13631,
            "flood_prone_km2": 2.3117,
            "flood_prone_pct": 64.82,
            "estimated_residents_in_flood_zone": 8836,
            "pmrr_risk_pct": 1.16,
            "high_risk_pct": 0.29
          },
          {
            "name": "Campeche",
            "region": "Região Sul da Ilha",
            "population_2022": 30934,
            "flood_prone_km2": 4.1331,
            "flood_prone_pct": 26.85,
            "estimated_residents_in_flood_zone": 8307,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Canasvieiras",
            "region": "Região Norte da Ilha",
            "population_2022": 15979,
            "flood_prone_km2": 7.2975,
            "flood_prone_pct": 50.57,
            "estimated_residents_in_flood_zone": 8080,
            "pmrr_risk_pct": 2.09,
            "high_risk_pct": 0.42
          },
          {
            "name": "Ingleses",
            "region": "Região Norte da Ilha",
            "population_2022": 46320,
            "flood_prone_km2": 2.4816,
            "flood_prone_pct": 14.86,
            "estimated_residents_in_flood_zone": 6883,
            "pmrr_risk_pct": 2.6,
            "high_risk_pct": 1.92
          },
          {
            "name": "Carianos",
            "region": "Região Sul da Ilha",
            "population_2022": 9577,
            "flood_prone_km2": 12.1048,
            "flood_prone_pct": 56.68,
            "estimated_residents_in_flood_zone": 5428,
            "pmrr_risk_pct": 0.07,
            "high_risk_pct": 0.01
          },
          {
            "name": "Jurerê",
            "region": "Região Norte da Ilha",
            "population_2022": 8134,
            "flood_prone_km2": 8.4435,
            "flood_prone_pct": 65.59,
            "estimated_residents_in_flood_zone": 5335,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Rio Vermelho",
            "region": "Região Leste da Ilha",
            "population_2022": 30751,
            "flood_prone_km2": 2.6673,
            "flood_prone_pct": 14.79,
            "estimated_residents_in_flood_zone": 4549,
            "pmrr_risk_pct": 9.23,
            "high_risk_pct": 0.0
          },
          {
            "name": "Itacorubi",
            "region": "Região Central",
            "population_2022": 23600,
            "flood_prone_km2": 2.2767,
            "flood_prone_pct": 17.78,
            "estimated_residents_in_flood_zone": 4196,
            "pmrr_risk_pct": 2.62,
            "high_risk_pct": 0.05
          },
          {
            "name": "Cachoeira do Bom Jesus",
            "region": "Região Norte da Ilha",
            "population_2022": 6616,
            "flood_prone_km2": 4.6218,
            "flood_prone_pct": 50.85,
            "estimated_residents_in_flood_zone": 3364,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Rio Tavares",
            "region": "Região Sul da Ilha",
            "population_2022": 14936,
            "flood_prone_km2": 3.7973,
            "flood_prone_pct": 21.41,
            "estimated_residents_in_flood_zone": 3197,
            "pmrr_risk_pct": 7.04,
            "high_risk_pct": 0.3
          },
          {
            "name": "Trindade",
            "region": "Região Central",
            "population_2022": 17865,
            "flood_prone_km2": 0.4179,
            "flood_prone_pct": 12.59,
            "estimated_residents_in_flood_zone": 2248,
            "pmrr_risk_pct": 4.78,
            "high_risk_pct": 0.39
          },
          {
            "name": "Agronômica",
            "region": "Região Central",
            "population_2022": 18675,
            "flood_prone_km2": 0.1702,
            "flood_prone_pct": 8.62,
            "estimated_residents_in_flood_zone": 1609,
            "pmrr_risk_pct": 22.25,
            "high_risk_pct": 0.88
          },
          {
            "name": "Lagoa da Conceição",
            "region": "Região Leste da Ilha",
            "population_2022": 12468,
            "flood_prone_km2": 2.4406,
            "flood_prone_pct": 12.41,
            "estimated_residents_in_flood_zone": 1548,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Santo Antônio de Lisboa",
            "region": "Região Norte da Ilha",
            "population_2022": 2857,
            "flood_prone_km2": 6.9755,
            "flood_prone_pct": 48.71,
            "estimated_residents_in_flood_zone": 1392,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Santa Mônica",
            "region": "Região Central",
            "population_2022": 1372,
            "flood_prone_km2": 0.587,
            "flood_prone_pct": 99.49,
            "estimated_residents_in_flood_zone": 1365,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "João Paulo",
            "region": "Região Central",
            "population_2022": 6034,
            "flood_prone_km2": 0.6015,
            "flood_prone_pct": 20.97,
            "estimated_residents_in_flood_zone": 1265,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Vargem do Bom Jesus",
            "region": "Região Norte da Ilha",
            "population_2022": 7900,
            "flood_prone_km2": 0.778,
            "flood_prone_pct": 15.19,
            "estimated_residents_in_flood_zone": 1200,
            "pmrr_risk_pct": 5.3,
            "high_risk_pct": 0.29
          },
          {
            "name": "Saco Grande",
            "region": "Região Central",
            "population_2022": 9331,
            "flood_prone_km2": 1.4064,
            "flood_prone_pct": 12.74,
            "estimated_residents_in_flood_zone": 1189,
            "pmrr_risk_pct": 9.33,
            "high_risk_pct": 1.47
          },
          {
            "name": "Costeira do Pirajubaé",
            "region": "Região Central",
            "population_2022": 8535,
            "flood_prone_km2": 0.5037,
            "flood_prone_pct": 12.01,
            "estimated_residents_in_flood_zone": 1025,
            "pmrr_risk_pct": 25.42,
            "high_risk_pct": 1.57
          },
          {
            "name": "Ponta das Canas",
            "region": "Região Norte da Ilha",
            "population_2022": 5506,
            "flood_prone_km2": 0.5448,
            "flood_prone_pct": 17.53,
            "estimated_residents_in_flood_zone": 965,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Córrego Grande",
            "region": "Região Central",
            "population_2022": 12812,
            "flood_prone_km2": 0.4915,
            "flood_prone_pct": 7.44,
            "estimated_residents_in_flood_zone": 954,
            "pmrr_risk_pct": 0.59,
            "high_risk_pct": 0.0
          },
          {
            "name": "Ratones",
            "region": "Região Norte da Ilha",
            "population_2022": 3925,
            "flood_prone_km2": 6.3021,
            "flood_prone_pct": 23.75,
            "estimated_residents_in_flood_zone": 932,
            "pmrr_risk_pct": 0.23,
            "high_risk_pct": 0.04
          },
          {
            "name": "Daniela",
            "region": "Região Norte da Ilha",
            "population_2022": 1088,
            "flood_prone_km2": 1.2069,
            "flood_prone_pct": 76.25,
            "estimated_residents_in_flood_zone": 830,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Armação",
            "region": "Região Sul da Ilha",
            "population_2022": 5133,
            "flood_prone_km2": 1.1439,
            "flood_prone_pct": 14.37,
            "estimated_residents_in_flood_zone": 738,
            "pmrr_risk_pct": 5.97,
            "high_risk_pct": 1.41
          },
          {
            "name": "Vargem Pequena",
            "region": "Região Norte da Ilha",
            "population_2022": 1898,
            "flood_prone_km2": 2.2598,
            "flood_prone_pct": 38.59,
            "estimated_residents_in_flood_zone": 732,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Sambaqui",
            "region": "Região Norte da Ilha",
            "population_2022": 3700,
            "flood_prone_km2": 0.9755,
            "flood_prone_pct": 18.27,
            "estimated_residents_in_flood_zone": 676,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Barra da Lagoa",
            "region": "Região Leste da Ilha",
            "population_2022": 6537,
            "flood_prone_km2": 0.8282,
            "flood_prone_pct": 10.21,
            "estimated_residents_in_flood_zone": 668,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Pântano do Sul",
            "region": "Região Sul da Ilha",
            "population_2022": 4432,
            "flood_prone_km2": 3.7092,
            "flood_prone_pct": 10.71,
            "estimated_residents_in_flood_zone": 475,
            "pmrr_risk_pct": 2.53,
            "high_risk_pct": 0.25
          },
          {
            "name": "Vargem Grande",
            "region": "Região Norte da Ilha",
            "population_2022": 7412,
            "flood_prone_km2": 0.3194,
            "flood_prone_pct": 3.11,
            "estimated_residents_in_flood_zone": 231,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Santinho",
            "region": "Região Norte da Ilha",
            "population_2022": 4993,
            "flood_prone_km2": 0.1296,
            "flood_prone_pct": 4.34,
            "estimated_residents_in_flood_zone": 217,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Ribeirão da Ilha",
            "region": "Região Sul da Ilha",
            "population_2022": 4434,
            "flood_prone_km2": 0.9919,
            "flood_prone_pct": 4.44,
            "estimated_residents_in_flood_zone": 197,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Alto Ribeirão",
            "region": "Região Sul da Ilha",
            "population_2022": 7395,
            "flood_prone_km2": 0.206,
            "flood_prone_pct": 2.63,
            "estimated_residents_in_flood_zone": 195,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Monte Verde",
            "region": "Região Central",
            "population_2022": 7525,
            "flood_prone_km2": 0.0795,
            "flood_prone_pct": 1.57,
            "estimated_residents_in_flood_zone": 118,
            "pmrr_risk_pct": 15.58,
            "high_risk_pct": 0.05
          },
          {
            "name": "Cacupé",
            "region": "Região Norte da Ilha",
            "population_2022": 1494,
            "flood_prone_km2": 0.0668,
            "flood_prone_pct": 3.54,
            "estimated_residents_in_flood_zone": 53,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Praia Brava",
            "region": "Região Norte da Ilha",
            "population_2022": 349,
            "flood_prone_km2": 0.052,
            "flood_prone_pct": 2.01,
            "estimated_residents_in_flood_zone": 7,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Morro das Pedras",
            "region": "Região Sul da Ilha",
            "population_2022": 3222,
            "flood_prone_km2": 0.0029,
            "flood_prone_pct": 0.19,
            "estimated_residents_in_flood_zone": 6,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Costa da Lagoa",
            "region": "Região Leste da Ilha",
            "population_2022": 954,
            "flood_prone_km2": 0.0567,
            "flood_prone_pct": 0.52,
            "estimated_residents_in_flood_zone": 5,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Praia do Forte",
            "region": "Região Norte da Ilha",
            "population_2022": 170,
            "flood_prone_km2": 0.009,
            "flood_prone_pct": 2.03,
            "estimated_residents_in_flood_zone": 3,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Moçambique",
            "region": "Região Leste da Ilha",
            "population_2022": 0,
            "flood_prone_km2": 1.8574,
            "flood_prone_pct": 13.74,
            "estimated_residents_in_flood_zone": 0,
            "pmrr_risk_pct": 0.17,
            "high_risk_pct": 0.0
          },
          {
            "name": "Abraão",
            "region": "Região Continental",
            "population_2022": 7717,
            "flood_prone_km2": 0.0,
            "flood_prone_pct": 0.0,
            "estimated_residents_in_flood_zone": 0,
            "pmrr_risk_pct": 1.16,
            "high_risk_pct": 0.02
          },
          {
            "name": "Balneário",
            "region": "Região Continental",
            "population_2022": 5674,
            "flood_prone_km2": 0.0,
            "flood_prone_pct": 0.0,
            "estimated_residents_in_flood_zone": 0,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Bom Abrigo",
            "region": "Região Continental",
            "population_2022": 1339,
            "flood_prone_km2": 0.0,
            "flood_prone_pct": 0.0,
            "estimated_residents_in_flood_zone": 0,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Canto",
            "region": "Região Continental",
            "population_2022": 6509,
            "flood_prone_km2": 0.0,
            "flood_prone_pct": 0.0,
            "estimated_residents_in_flood_zone": 0,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Capoeiras",
            "region": "Região Continental",
            "population_2022": 17278,
            "flood_prone_km2": 0.0,
            "flood_prone_pct": 0.0,
            "estimated_residents_in_flood_zone": 0,
            "pmrr_risk_pct": 7.86,
            "high_risk_pct": 0.1
          },
          {
            "name": "Carvoeira",
            "region": "Região Central",
            "population_2022": 10740,
            "flood_prone_km2": 0.0,
            "flood_prone_pct": 0.0,
            "estimated_residents_in_flood_zone": 0,
            "pmrr_risk_pct": 21.74,
            "high_risk_pct": 1.03
          },
          {
            "name": "Centro",
            "region": "Região Central",
            "population_2022": 42308,
            "flood_prone_km2": 0.0,
            "flood_prone_pct": 0.0,
            "estimated_residents_in_flood_zone": 0,
            "pmrr_risk_pct": 14.8,
            "high_risk_pct": 1.96
          },
          {
            "name": "Coloninha",
            "region": "Região Continental",
            "population_2022": 4517,
            "flood_prone_km2": 0.0,
            "flood_prone_pct": 0.0,
            "estimated_residents_in_flood_zone": 0,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Coqueiros",
            "region": "Região Continental",
            "population_2022": 13396,
            "flood_prone_km2": 0.0,
            "flood_prone_pct": 0.0,
            "estimated_residents_in_flood_zone": 0,
            "pmrr_risk_pct": 14.42,
            "high_risk_pct": 1.77
          },
          {
            "name": "Estreito",
            "region": "Região Continental",
            "population_2022": 9290,
            "flood_prone_km2": 0.0,
            "flood_prone_pct": 0.0,
            "estimated_residents_in_flood_zone": 0,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Itaguaçu",
            "region": "Região Continental",
            "population_2022": 1761,
            "flood_prone_km2": 0.0,
            "flood_prone_pct": 0.0,
            "estimated_residents_in_flood_zone": 0,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          },
          {
            "name": "Jardim Atlântico",
            "region": "Região Continental",
            "population_2022": 12773,
            "flood_prone_km2": 0.0,
            "flood_prone_pct": 0.0,
            "estimated_residents_in_flood_zone": 0,
            "pmrr_risk_pct": 0.68,
            "high_risk_pct": 0.24
          },
          {
            "name": "José Mendes",
            "region": "Região Central",
            "population_2022": 3492,
            "flood_prone_km2": 0.0,
            "flood_prone_pct": 0.0,
            "estimated_residents_in_flood_zone": 0,
            "pmrr_risk_pct": 28.91,
            "high_risk_pct": 0.56
          },
          {
            "name": "Monte Cristo",
            "region": "Região Continental",
            "population_2022": 11219,
            "flood_prone_km2": 0.0,
            "flood_prone_pct": 0.0,
            "estimated_residents_in_flood_zone": 0,
            "pmrr_risk_pct": 4.17,
            "high_risk_pct": 0.0
          },
          {
            "name": "Pantanal",
            "region": "Região Central",
            "population_2022": 7690,
            "flood_prone_km2": 0.0,
            "flood_prone_pct": 0.0,
            "estimated_residents_in_flood_zone": 0,
            "pmrr_risk_pct": 30.42,
            "high_risk_pct": 0.0
          },
          {
            "name": "Saco dos Limões",
            "region": "Região Central",
            "population_2022": 11469,
            "flood_prone_km2": 0.0,
            "flood_prone_pct": 0.0,
            "estimated_residents_in_flood_zone": 0,
            "pmrr_risk_pct": 32.42,
            "high_risk_pct": 0.69
          },
          {
            "name": "Jardim Capoeiras",
            "region": "Região Continental",
            "population_2022": 1545,
            "flood_prone_km2": 0.0,
            "flood_prone_pct": 0.0,
            "estimated_residents_in_flood_zone": 0,
            "pmrr_risk_pct": 0.0,
            "high_risk_pct": 0.0
          }
        ],
        "pmrr_people_exposed_2014": 55003,
        "pmrr_people_exposed_2022": 69088
      },
      "history": [
        {
          "year": 2014,
          "pmrr_people_exposed": 55003
        },
        {
          "year": 2022,
          "pmrr_people_exposed": 69088
        }
      ],
      "status_basis": "High household exposure, no hydrological alert system, and a 2014 risk plan under revision.",
      "history_note": "PMRR risk-area population; the current headline value is households in flood-prone areas from SINISA 2024."
    },
    {
      "id": "mobility_emissions",
      "name_pt": "Emissões de carbono do transporte",
      "name_en": "Transport emissions, cycling and road safety",
      "category": "mitigation",
      "unit": "tCO2e_year",
      "current_value": 571863,
      "current_year": 2024,
      "baseline_value": 518015,
      "baseline_year": 2010,
      "target_value": 0,
      "target_year": 2050,
      "status": "off_track",
      "data_type": "official_estimate",
      "description": "Transport emissions plus the cycling network, mobility spending and road-safety record citizens experience.",
      "provenance": {
        "type": "Official estimate",
        "sources": [
          {
            "label": "SEEG 13.0 — municipal emissions",
            "publisher": "Observatório do Clima",
            "url": "https://seeg.eco.br/dados/",
            "note": "Transport emissions series 2010–2024; 2024 value 571,863 tCO2e."
          },
          {
            "label": "Inventário de Emissões de GEE 2022",
            "publisher": "Prefeitura de Florianópolis / BID / Egis",
            "url": "https://strapi.redeplanejamento.pmf.sc.gov.br/uploads/P2_R1_Inventario_Cenarios_e_Metas_2024_v05_20241004_ae6887db3b.pdf",
            "note": "GPC inventory reports 749,589 tCO2e for transport in 2022 using a different scope and boundary."
          },
          {
            "label": "Estratégia de Descarbonização 2024",
            "publisher": "Prefeitura de Florianópolis / BID / Egis",
            "url": "https://strapi.redeplanejamento.pmf.sc.gov.br/uploads/P3_Estrategia_de_Descarbonizacao_V02_20241018_a19a622991.pdf",
            "note": "Florianópolis signed the Global Covenant of Mayors in 2017 and committed to net zero by 2050."
          },
          {
            "label": "+Pedal cycling programme",
            "publisher": "Prefeitura de Florianópolis",
            "url": "https://redeplanejamento.pmf.sc.gov.br/pt-BR/programas/mais-pedal",
            "note": "276.55 km of cycling infrastructure in June 2026 (table edited 3 July 2026), up from 75.2 km before 2016."
          },
          {
            "label": "Cyclist collision survey",
            "publisher": "Observatório da Bicicleta / Amobici",
            "url": "https://observatoriodabicicleta.org.br/atropelamentos-de-ciclistas-disparam-mais-de-400-em-florianopolis-em-apenas-um-ano/",
            "note": "27 cyclist collisions in 2024 versus 5 in 2023; SC-401 is the top corridor since 2008."
          },
          {
            "label": "National Urban Mobility Study — Florianópolis",
            "publisher": "BNDES",
            "url": "https://www.bndes.gov.br/arquivos/fep-mobilidade-urbana/relatorios-diagnostico/relatorio-Florianopolis-vol-1.pdf",
            "note": "Mobility spending was 1.41% of municipal spending in 2023, versus 2.34% in 2015."
          },
          {
            "label": "Florianópolis traffic record, 2024",
            "publisher": "ND Mais / Detran-SC",
            "url": "https://ndmais.com.br/transito/florianopolis-tem-recorde-em-acidentes-e-registra-uma-ocorrencia-de-transito-a-cada-25-minutos/",
            "note": "20,815 traffic accidents and 48 deaths in 2024."
          }
        ],
        "methodology": "Annual transport-sector emissions from SEEG 13.0. The 2050 target is the city's net-zero commitment; the chart uses a straight-line pathway from 2024 to zero as an illustrative benchmark.",
        "caveats": "Cyclist collision counts are preliminary and underreported. SEEG transport emissions and the municipal GPC inventory use different scopes; this section uses the SEEG series for trends."
      },
      "details": {
        "transport_emissions_2024": 571863,
        "transport_emissions_2010": 518015,
        "change_2010_2024_pct": 10.4,
        "gross_city_emissions_2024": 839121,
        "share_of_gross_emissions_pct": 68.1,
        "road_tco2e": 477680,
        "aviation_tco2e": 94183,
        "water_tco2e": 0,
        "road_share_pct": 83.5,
        "aviation_share_pct": 16.5,
        "per_capita_tco2e": 1.06,
        "net_zero_year": 2050,
        "gcOM_signed_year": 2017,
        "cycling_network_total_km_2026": 276.55,
        "cycling_network_2016_km": 75.2,
        "cycling_network_growth_pct": 267.8,
        "cycling_network_breakdown_km_2026": {
          "ciclovias": 77.52,
          "ciclofaixas": 97.14,
          "ciclorrotas": 91.68,
          "shared_spaces": 10.21
        },
        "painted_and_segregated_km_2023": 131.86,
        "cycling_km_per_100k_2023": 22.96,
        "painted_and_segregated_km_2024": 142.32,
        "cycling_km_per_100k_2024": 26.49,
        "repair_stations_2025": 34,
        "cyclist_collisions_2024": 27,
        "cyclist_collisions_2023": 5,
        "cyclist_collisions_change_pct": 440,
        "cyclist_deaths_2024": 1,
        "traffic_accidents_2024": 20815,
        "traffic_deaths_2024": 48,
        "top_crash_corridor": "SC-401",
        "top_crash_corridor_records_since_2008": 22,
        "mobility_spending_pct_2023": 1.41,
        "mobility_spending_pct_2015": 2.34,
        "mobility_spending_brl_million_2023": 50.2,
        "mobility_spending_year": 2023
      },
      "history": [
        {
          "year": 2010,
          "emissions_tco2e": 518014.7
        },
        {
          "year": 2011,
          "emissions_tco2e": 553917.8
        },
        {
          "year": 2012,
          "emissions_tco2e": 608277.8
        },
        {
          "year": 2013,
          "emissions_tco2e": 616728.4
        },
        {
          "year": 2014,
          "emissions_tco2e": 629510.9
        },
        {
          "year": 2015,
          "emissions_tco2e": 623671.0
        },
        {
          "year": 2016,
          "emissions_tco2e": 620075.4
        },
        {
          "year": 2017,
          "emissions_tco2e": 607662.1
        },
        {
          "year": 2018,
          "emissions_tco2e": 577354.8
        },
        {
          "year": 2019,
          "emissions_tco2e": 585380.6
        },
        {
          "year": 2020,
          "emissions_tco2e": 396380.6
        },
        {
          "year": 2021,
          "emissions_tco2e": 456722.4
        },
        {
          "year": 2022,
          "emissions_tco2e": 529239.7
        },
        {
          "year": 2023,
          "emissions_tco2e": 558147.8
        },
        {
          "year": 2024,
          "emissions_tco2e": 571863.3
        }
      ]
    },
    {
      "id": "adaptation_budget",
      "name_pt": "Orçamento municipal estimado para adaptação climática",
      "name_en": "Estimated municipal adaptation budget",
      "category": "finance",
      "unit": "BRL_million",
      "current_value": 92.4,
      "current_year": 2026,
      "benchmark_pct": 2.0,
      "status": "on_track",
      "data_type": "modeled",
      "description": "Dashboard estimate of municipal spending on adaptation, set against total municipal expenditure.",
      "provenance": {
        "type": "Modeled estimate",
        "sources": [
          {
            "label": "IBGE Cidades — Florianópolis finances",
            "publisher": "IBGE / Siconfi",
            "url": "https://www.ibge.gov.br/cidades-e-estados/sc/florianopolis.html",
            "note": "Total municipal expenses of R$ 4.14 billion in 2025."
          },
          {
            "label": "Portal da Transparência",
            "publisher": "Prefeitura de Florianópolis",
            "url": "https://www.pmf.sc.gov.br/transparencia/",
            "note": "Municipal budget execution and contracts."
          },
          {
            "label": "Estratégia de Descarbonização 2024",
            "publisher": "Prefeitura de Florianópolis / BID / Egis",
            "url": "https://strapi.redeplanejamento.pmf.sc.gov.br/uploads/P3_Estrategia_de_Descarbonizacao_V02_20241018_a19a622991.pdf",
            "note": "Adaptation priorities and project pipeline."
          }
        ],
        "methodology": "The R$ 92.4 million envelope is modeled as 2.23% of 2025 municipal expenditure. Area allocation and funding sources are modeled from plan priorities, not extracted from an adaptation-tagged budget line.",
        "caveats": "Florianópolis does not publish an adaptation-tagged budget. Treat the total, allocation and funding mix as an estimate. The 2.0% benchmark is a dashboard construct, not an official target."
      },
      "details": {
        "total_municipal_expenses_2025_brl_billion": 4.14,
        "adaptation_budget_brl_million": 92.4,
        "share_of_municipal_spending_pct": 2.23,
        "per_capita_brl": 154,
        "allocation_by_area_brl_million": {
          "drainage_and_stormwater": 36.2,
          "slope_and_landslide_risk": 16.8,
          "coastal_protection": 12.1,
          "green_infrastructure": 11.4,
          "early_warning_systems": 6.9,
          "institutional_capacity": 5.4,
          "vulnerable_communities": 3.6
        },
        "allocation_by_area_pct": {
          "drainage_and_stormwater": 39.2,
          "slope_and_landslide_risk": 18.2,
          "coastal_protection": 13.1,
          "green_infrastructure": 12.3,
          "early_warning_systems": 7.5,
          "institutional_capacity": 5.8,
          "vulnerable_communities": 3.9
        },
        "funding_sources_pct": {
          "municipal": 58,
          "state": 19,
          "federal": 14,
          "climate_funds_and_international": 9
        }
      },
      "history": []
    }
  ],
  "citizen_questions": [
    {
      "id": "emissions",
      "question": "Is Florianópolis actually reducing its emissions year over year?",
      "short_answer": "No.",
      "answer": "Emissions excluding land-use change rose for four straight years after the 2020 dip. In 2024 the city emitted 839,121 tCO₂e (gross excluding land-use change) — 21.7% more than in 2010. Net emissions, including land-use emissions and removals, were 804,299 tCO₂e and 8% below 2010, but still rose four years in a row. Transport is 68.1% of the excluding-land-use-change total.",
      "status": "off_track",
      "indicator_id": "city_emissions",
      "headline": "839,121 tCO₂e (excl. land-use change)",
      "context": "2024 · +22% vs 2010",
      "source_ids": [
        "SEEG 13.0 — municipal emissions",
        "Inventário de Emissões de GEE 2022"
      ]
    },
    {
      "id": "mobility",
      "question": "Is cycling and walking around the city getting safer and greener?",
      "short_answer": "Greener, not safer.",
      "answer": "The cycling network grew to 276.55 km by June 2026, from 75.2 km before 2016. But cyclist collisions rose from 5 in 2023 to 27 in 2024, mobility spending fell to 1.41% of the city budget in 2023, and transport emissions are 10.4% above 2010.",
      "status": "at_risk",
      "indicator_id": "mobility_emissions",
      "headline": "27 cyclist collisions",
      "context": "2024 · vs 5 in 2023",
      "source_ids": [
        "+Pedal cycling programme",
        "Cyclist collision survey",
        "National Urban Mobility Study — Florianópolis"
      ]
    },
    {
      "id": "flood",
      "question": "Will my neighborhood flood — and what is the city doing about it?",
      "short_answer": "22.1% of households are exposed.",
      "answer": "22.1% of households (66,208) are in flood-prone areas. The city has mapped 85.4 km² of flood-prone land, has no hydrological alert system and is revising a risk plan last completed in 2014.",
      "status": "off_track",
      "indicator_id": "flood_risk",
      "headline": "22.1% of households",
      "context": "66,208 households in flood-prone areas",
      "source_ids": [
        "SINISA — sanitation and drainage",
        "GeoPortal — flood-prone areas",
        "Plano Municipal de Redução de Riscos"
      ]
    }
  ]
};
