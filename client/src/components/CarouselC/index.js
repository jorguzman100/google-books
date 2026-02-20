import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselC.css";

const slides = [
  {
    image: `${process.env.PUBLIC_URL}/images/carousel1.jpg`,
    badge: "Explore",
    title: "Find books that match your vibe",
    subtitle: "Search millions of titles and surface new favorites in seconds."
  },
  {
    image: `${process.env.PUBLIC_URL}/images/carousel2.jpg`,
    badge: "Curate",
    title: "Build a beautiful personal reading shelf",
    subtitle: "Save what matters now and return to it whenever inspiration hits."
  },
  {
    image: `${process.env.PUBLIC_URL}/images/carousel3.jpg`,
    badge: "Flow",
    title: "Move from discovery to deep reading",
    subtitle: "Jump straight to official previews and keep momentum in your reading journey."
  }
];

const CarouselC = () => {
  return (
    <section className="hero-block" aria-label="Featured book discovery">
      <Carousel className="hero-carousel" indicators controls fade interval={6500}>
        {slides.map((slide) => (
          <Carousel.Item key={slide.title}>
            <div className="hero-image-shell">
              <img className="hero-image" src={slide.image} alt={slide.title} />
              <div className="hero-overlay" />
            </div>
            <Carousel.Caption className="hero-caption">
              <p className="hero-eyebrow">{slide.badge}</p>
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default CarouselC;
