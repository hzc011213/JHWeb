export type AboutMeDTO = {
  number: string;
  category: string;
  name: string;
  images: [string, string, string];
  arrangement: StackCardArrangement;
};

export type StackCardArrangement = "split" | "feature-left" | "mosaic";

export const aboutMe: AboutMeDTO[] = [
  {
    number: "01",
    category: "CRAFT",
    name: "WHAT I BUILD",
    images: [
      "/assets/brand/nio-et5t-mobile.jpg",
      "/assets/home-background-dark.png",
      "/assets/product/yard-all.png",
    ],
    arrangement: "split",
  },
  {
    number: "02",
    category: "PHILOSOPHY",
    name: "HOW I THINK",
    images: [
      "/assets/brand/nio-et5t-mobile.jpg",
      "/assets/home-background-dark.png",
      "/assets/brand/nio-et5t-desktop.jpg",
    ],
    arrangement: "feature-left",
  },
  {
    number: "03",
    category: "CURIOSITY",
    name: "WHAT DRIVES ME",
    images: [
      "/assets/brand/nio-et5t-desktop.jpg",
      "/assets/home-background-dark.png",
      "/assets/home-background-light.png",
    ],
    arrangement: "mosaic",
  },
];
