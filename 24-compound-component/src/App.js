import "./App.scss";
import { Card } from "./components/Card";
import movies from "./data";

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     console.log(arr[i], arr[j]);
//   }
// }

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
