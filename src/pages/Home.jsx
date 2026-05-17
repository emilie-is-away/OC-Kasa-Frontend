import { useEffect, useState } from "react";
import Card from "../components/Card";
import bannerImage from "../images/banner.png";

export default function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => setLogements(data));
  }, []);

  return (
    <main>
      <div className="banner">
        <img className="home-banner" src={bannerImage} alt="Paysage Kasa" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>

      <div className="gallery-wrapper">
        <div className="gallery">
          {logements.map((logement) => (
            <Card key={logement.id} logement={logement} />
          ))}
        </div>
      </div>
    </main>
  );
}