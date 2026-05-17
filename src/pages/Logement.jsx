import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel.jsx";
import Collapse from "../components/Collapse.jsx";
import Rating from "../components/Rating.jsx";

export default function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);

    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Logement introuvable");
        }
        return res.json();
      })
      .then((data) => {
        setLogement(data);
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return null;
  if (notFound || !logement) return <Navigate to="/404" replace />;

  return (
    <section className="logement">
      <Carousel pictures={logement.pictures} />

      <div className="logement__header">
        <div className="logement__infos">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>

          <div className="logement__tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="logement__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="logement__host-rating">
          <div className="logement__host">
            <p className="logement__host-name">
              {logement.host.name.split(" ")[0]} <br />
              {logement.host.name.split(" ")[1]}
            </p>
            <img
              className="logement__host-picture"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>

          <Rating value={logement.rating} />
        </div>
      </div>

      <div className="logement__collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul className="logement__equipments">
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </section>
  );
}