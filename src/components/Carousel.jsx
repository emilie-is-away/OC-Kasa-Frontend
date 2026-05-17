import { useState } from "react";

function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  const prev = () => setCurrent(current === 0 ? pictures.length - 1 : current - 1);

  return (
    <div>
      <img src={pictures[current]} alt="carousel" />
      {pictures.length > 1 && (
        <>
          <button onClick={prev}>←</button>
          <button onClick={next}>→</button>
        </>
      )}
    </div>
  );
}

export default Carousel;
