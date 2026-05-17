import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) return <h2>Introuvable</h2>;

  return (
    <div>
      <Carousel pictures={logement.pictures} />
      <h2>{logement.title}</h2>
      <Rating rating={parseInt(logement.rating)} />
      <Collapse title="Description" content={logement.description} />
    </div>
  );
}

export default Logement;
