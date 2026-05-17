import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`}>
      <div>
        <img src={cover} alt={title} />
        <h3>{title}</h3>
        <div className="card"></div>
      </div>
    </Link>
  );
}

export default Card;
