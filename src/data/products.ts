import type { ProductCardProduct } from "@/components/product/ProductCard";

export const products: ProductCardProduct[] = [
  {
    name: "Yard Mobile App",
    company: "Hyperduality",
    date: "November 2025 - Present",
    image: "/assets/project/yard-all.svg",
    imageAlt: "Yard mobile marketplace screens",
    images: [
      {
        src: "/assets/project/yard1.svg",
        alt: "Yard mobile app marketplace screen",
      },
      {
        src: "/assets/project/yard2.svg",
        alt: "Yard mobile app profile screen",
      },
      {
        src: "/assets/project/yard3.svg",
        alt: "Yard mobile app post detail screen",
      },
      {
        src: "/assets/project/yard4.svg",
        alt: "Yard mobile app publish screen",
      },
    ],
    imageSwapLayout: "phone",
    alignment: "image-left",
    description: [
      "Built a cross-platform iOS and Android mobile marketplace, enabling a 30-second listing flow and location-based discovery.",
      "Developed scalable backend schemas for listings, real-time chat, and transactions, supporting high-frequency usage.",
      "Implemented embedding-based semantic search and AI tagging to improve search relevance and content discoverability. Integrated type-safe APIs with OpenAPI and Zod, then optimized state management with Zustand for performance and reliability.",
    ],
  },
  {
    name: "Zero-stock Catering Platform",
    company: "Hyperduality",
    date: "October 2025 - Present",
    image: "/assets/project/zero-stock.png",
    imageAlt: "Zero-stock Catering Platform dashboard",
    alignment: "image-right",
    description: [
      "Built a data-driven web application that automatically generates procurement lists, processing requirement lists, standardized dish recipes, and region-based meal demand summaries based on pre-defined databases.",
      "Developed scalable and robust backend and frontend.",
    ],
  },
  {
    name: "Task Orchestration",
    company: "Nio",
    date: "June 2025 - August 2025",
    image: "/assets/project/task-orch.png",
    imageAlt: "Task Orchestration scheduling diagram",
    alignment: "image-left",
    description: [
      "Task Orchestration is a new module of Nio's autonomous driving development platform, designed to enable on-schedule delivery of large-scale training tasks.",
      "Designed and developed the frontend of this module, including cluster management, task management, cost reporting, project team management, and computing resource monitoring.",
    ],
  },
  {
    name: "AI Production Line",
    company: "Nio",
    date: "December 2024 - March 2025",
    image: "/assets/project/aipl.png",
    imageAlt: "AI Production Line model lifecycle diagram",
    alignment: "image-right",
    description: [
      "Developed the frontend of this module from scratch to manage the full lifecycle of model development, from processing data, training, fine-tuning, and testing to delivering interactive model services to internal users.",
      "Leveraged OpenAI's Node.js SDK to facilitate communication with server-side model services.",
      "Contributed to database schema design and implemented cross-origin logic through a backend for frontend service.",
      "Delivered a robust and scalable solution, enabling smooth integration of model management into the workflow.",
    ],
  },
];
