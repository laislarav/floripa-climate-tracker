// Dev-only annotation toolbar (Agentation). Loaded by index.html on localhost.
// Requires the MCP server for the agent to read notes: npx agentation-mcp server
import { createElement } from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client?deps=react@18.3.1";
import { Agentation } from "https://esm.sh/agentation@3.1.2?deps=react@18.3.1,react-dom@18.3.1&target=es2022";

const host = document.createElement("div");
host.id = "agentation-root";
document.body.append(host);

createRoot(host).render(
  createElement(Agentation, {
    endpoint: "http://localhost:4747",
    appName: "Florianópolis Climate Tracker",
    identifyingAttributes: ["data-question", "data-i18n-tooltip", "data-nav", "data-i18n-html", "id"],
  }),
);
