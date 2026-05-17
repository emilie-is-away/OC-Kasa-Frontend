import { Link } from "react-router-dom";

export default function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="card">
      <img src={logement.cover} alt={logement.title} />
      <h2>{logement.title}</h2>
    </Link>
  );
}