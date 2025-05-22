import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set page title
document.title = "Dorcas Ajayi | Product Manager & Creator";

// Add meta description for SEO
const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content = "Dorcas Ajayi's professional portfolio showcasing product management, creativity, and innovative project experience.";
document.head.appendChild(metaDescription);

// Add Open Graph tags for better social media sharing
const ogTitle = document.createElement("meta");
ogTitle.setAttribute("property", "og:title");
ogTitle.content = "Dorcas Ajayi | Product Manager & Creator";
document.head.appendChild(ogTitle);

const ogDescription = document.createElement("meta");
ogDescription.setAttribute("property", "og:description");
ogDescription.content = "Dorcas Ajayi's professional portfolio showcasing product management, creativity, and innovative project experience.";
document.head.appendChild(ogDescription);

const ogType = document.createElement("meta");
ogType.setAttribute("property", "og:type");
ogType.content = "website";
document.head.appendChild(ogType);

createRoot(document.getElementById("root")!).render(<App />);
