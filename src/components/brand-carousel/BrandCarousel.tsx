import Image from "next/image";

import "./BrandCarousel.css";

type BrandLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
  scale?: "base" | "compact";
  tone?: "dark" | "white" | "color";
};

const brandLogos: BrandLogo[] = [
  {
    name: "Hyperduality",
    src: "/assets/brand/hyperduality-logo.svg",
    width: 232,
    height: 40,
    scale: "compact",
    tone: "dark",
  },
  {
    name: "Knowlecy",
    src: "/assets/brand/knowlecy-logo-white.svg",
    width: 274,
    height: 70,
  },
  {
    name: "Leadvisor",
    src: "/assets/brand/leadvisor-logo.svg",
    width: 752,
    height: 227,
    scale: "compact",
    tone: "color",
  },
  {
    name: "NIO",
    src: "/assets/brand/nio-logo-white.svg",
    width: 90,
    height: 24,
    scale: "compact",
  },
  {
    name: "Shopee",
    src: "/assets/brand/shopee-logo.svg",
    width: 192,
    height: 65,
  },
];

const carouselItems = [...brandLogos, ...brandLogos];

export default function BrandCarousel() {
  return (
    <section className="brand-carousel" aria-labelledby="brand-carousel-title">
      <div className="brand-carousel__label" id="brand-carousel-title">
        Selected Work
      </div>
      <div className="brand-carousel__viewport">
        <ul className="brand-carousel__track" aria-label="Brand logos">
          {carouselItems.map((logo, index) => (
            <li
              aria-hidden={index >= brandLogos.length}
              className="brand-carousel__item"
              key={`${logo.name}-${index}`}
            >
              <Image
                alt={index >= brandLogos.length ? "" : logo.name}
                className={`brand-carousel__logo brand-carousel__logo--${logo.tone ?? "color"} brand-carousel__logo--${logo.scale ?? "base"}`}
                src={logo.src}
                width={logo.width}
                height={logo.height}
                unoptimized
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
