import logements from "../data/logements.json";
import Card from "../components/Card";

function Home() {
  return (
    <div>
      {logements.map((logement) => (
        <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.pictures[0]} />
      ))}
    </div>
  );
}

export default Home;
