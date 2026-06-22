import PortraitCard from "./PortraitCard";

import "./PortraitGallery.css";

const portraits = [
  {
    identity: "Entrepreneur",
    caption: "From hunch to launch",
    src: "/assets/portrait/entrepreneur.png",
  },
  {
    identity: "Designer",
    caption: "Turns feeling into form",
    src: "/assets/portrait/designer.png",
  },
  {
    identity: "Engineer",
    caption: "Makes the thing hold",
    src: "/assets/portrait/engineer.png",
  },
  {
    identity: "Dreamer",
    caption: "Keeps the impossible useful",
    src: "/assets/portrait/dreamer.png",
  },
] as const;

export default function PortraitGallery() {
  return (
    <section className="portrait-gallery" aria-label="Identity portraits">
      <ul className="portrait-gallery__grid">
        {portraits.map((portrait) => (
          <li className="portrait-gallery__item" key={portrait.identity}>
            <PortraitCard {...portrait} />
          </li>
        ))}
      </ul>
    </section>
  );
}
