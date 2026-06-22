export type AboutMeDTO = {
  number: string;
  category: string;
  name: string;
  description?: string;
  images: string[];
  arrangement: StackCardArrangement;
};

export type StackCardArrangement =
  | "split"
  | "feature-left"
  | "mosaic"
  | "with-description";

export const aboutMe: AboutMeDTO[] = [
  {
    number: "01",
    category: "CRAFT",
    name: "WHAT I BUILD",
    images: [
      "/assets/product/aipl.png",
      "/assets/product/salary.png",
      "/assets/product/yard-all.png",
    ],
    arrangement: "split",
  },
  {
    number: "02",
    category: "PHILOSOPHY",
    name: "HOW I THINK",
    images: [
      "/assets/designs/avp-pod.png",
    ],
    description:
      "I think in systems first: what the person needs, what the product should make obvious, and where the smallest technical choice can make the whole experience feel calmer.",
    arrangement: "with-description",
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
