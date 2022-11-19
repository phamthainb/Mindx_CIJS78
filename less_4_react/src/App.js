import "./App.css";
import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
/*
- call api:
  - call = fetch
    - rule: component render xong (mounted) -> bắt đầu call api
  - store data: useState(): https://reactjs.org/docs/hooks-reference.html#usestate
- render list item
*/
function App() {
  // store data
  const [movies, setMovies] = useState([]);

  // hook - didMount = useEffect(() => {}, []);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=85ac6156be17ea981b54c406910fdc7a&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data::", data.results);
        setMovies(data.results);
      })
      .catch((err) => {
        console.log("Error::", err);
      });
  }, []);

  console.log("movies::", movies);

  return (
    <div className="App">
      {movies.length}
      
      {/* <MovieItem {...movies[0]} />
      <MovieItem {...movies[1]} />
      <MovieItem {...movies[2]} />
      <MovieItem {...movies[3]} />
      <MovieItem {...movies[4]} /> */}

      {/* // map for render list element */}
      {movies.map((value, index) => {
        console.log(`item at::`, index, value);
        return <MovieItem {...value} />;
      })}
    </div>
  );
}

export default App;
