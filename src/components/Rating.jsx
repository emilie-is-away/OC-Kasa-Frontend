export default function Rating({ value }) {
  const maxStars = 5;

  return (
    <div className="rating">
      {[...Array(maxStars)].map((_, index) => (
        <i
          key={index}
          className={`fa-solid fa-star ${
            index < value ? "active" : "inactive"
          }`}
        ></i>
      ))}
    </div>
  );
}