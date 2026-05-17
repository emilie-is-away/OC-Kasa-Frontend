import { useState } from "react";

export default function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0);

  if (!pictures || pictures.length === 0) return null;

  const next = () => {
    setCurrent((prev) => (prev + 1) % pictures.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="carousel">
      {/* Image */}
      <img
        src={pictures[current]}
        alt={`slide ${current + 1}`}
        className="carousel__image"
      />

      {/* Flèches + compteur uniquement si plusieurs images */}
      {pictures.length > 1 && (
        <>
          {/* Flèche gauche */}
          <button
            className="carousel__arrow carousel__arrow--left"
            onClick={prev}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          {/* Flèche droite */}
          <button
            className="carousel__arrow carousel__arrow--right"
            onClick={next}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          {/* Compteur */}
          <div className="carousel__counter">
            {current + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
}