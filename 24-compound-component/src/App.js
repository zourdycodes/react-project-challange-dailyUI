import "./App.scss";
import { Card } from "./components/Card";
import movies from "./data";

export const App = () => {
  return (
    <main>
      {movies.map((movie) => (
        <Card classes="mr" key={`${movie.id}`}>
          <Card.Image src={movie.image} alt={movie.title} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.desc}</Card.Text>
            <Card.Button>{movie.ctaText}</Card.Button>
          </Card.Body>
        </Card>
      ))}
    </main>
  );
};
