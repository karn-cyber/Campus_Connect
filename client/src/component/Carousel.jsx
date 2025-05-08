import React, { useRef } from "react";
import "./Carousel.css";

const cards = [
  
  {
    title: "You can do more with AI.",
    description: "AR/VR Workshop",
    image: "src/assets/image.png",
  },
  {
    title: "Satellite Building Workshop",
    description: "Lesson on POC and Prototyping : SAST",
    image: "src/assets/satellite.jpg",
  },
  {
    title: "Apple India Tour",
    description: "Educational Tour",
    image: "src/assets/mac.png",
  },
  {
    title: "Launching the Apple Vision Pro.",
    description: "Product Hackathon",
    image: "src/assets/vr.png",
  },
];

export default function AppleCardsCarouselDemo() {
  const scrollRef = useRef(null);

  const scrollByAmount = window.innerWidth;

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollByAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollByAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container" ref={scrollRef}>
        <div className="carousel-track">
          {cards.map((card, index) => (
            <div className="carousel-card" key={index}>
              <img src={card.image} alt={card.title} className="card-image" />
              <div className="card-text">
                <p className="card-description">{card.description}</p>
                <h2 className="card-title">{card.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-arrow left-arrow" onClick={scrollLeft}>
        &#8592;
      </button>
      <button className="carousel-arrow right-arrow" onClick={scrollRight}>
        &#8594;
      </button>
    </div>
  );
}
