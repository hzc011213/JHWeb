export type AboutMeDTO = {
  number: string;
  category: string;
  name: string;
  images: string[];
  arrangement: StackCardArrangement;
};

export type StackCardArrangement = "split" | "feature-left" | "mosaic";

export const aboutMe: AboutMeDTO[] = [
  {
    number: "01",
    category: "CRAFT",
    name: "WHAT I BUILD",
    images: [
      "/assets/product/zero-stock.png",
      "/assets/product/aipl.png",
      "/assets/product/yard-all.png",
    ],
    arrangement: "split",
  },
  {
    number: "02",
    category: "PHILOSOPHY",
    name: "HOW I THINK",
    images: [
      "/assets/home-background-dark.png",
      "/assets/portrait/engineer.png",
      "/assets/designs/avp-pod.png",
    ],
    arrangement: "feature-left",
  },
  {
    number: "03",
    category: "CURIOSITY",
    name: "WHAT DRIVES ME",
    images: [
      "/assets/life/travel8.jpg",
      "/assets/life/travel2.jpeg",
      "/assets/life/cat3.jpg",
      "/assets/life/travel6.jpg",
    ],
    arrangement: "mosaic",
  },
];
