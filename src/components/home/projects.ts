export type Project = {
  number: string;
  category: string;
  name: string;
  images: [string, string, string];
  arrangement: StackCardArrangement;
};

export type StackCardArrangement = "split" | "feature-left" | "mosaic";

export const projects: Project[] = [
  {
    number: "01",
    category: "Mobility",
    name: "NIO Launch System",
    images: [
      "/assets/brand/nio-et5t-mobile.jpg",
      "/assets/home-background-dark.png",
      "/assets/brand/nio-et5t-desktop.jpg",
    ],
    arrangement: "split",
  },
  {
    number: "02",
    category: "Commerce",
    name: "Shopee Growth Lab",
    images: [
      "/assets/home-background-light.png",
      "/assets/brand/nio-et5t-mobile.jpg",
      "/assets/brand/nio-et5t-desktop.jpg",
    ],
    arrangement: "feature-left",
  },
  {
    number: "03",
    category: "Product",
    name: "Leadvisor Workspace",
    images: [
      "/assets/brand/nio-et5t-desktop.jpg",
      "/assets/home-background-dark.png",
      "/assets/home-background-light.png",
    ],
    arrangement: "mosaic",
  },
];
