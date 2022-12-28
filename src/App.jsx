import "./App.css"; //importamos estilos
// import moviesList from "./data/movies.json";
import MovieList from "./components/MovieList";

const App = () => {
  //código de javascript

  return (
    <div>
      <div>
        <h1>WebFlix🎬</h1>
      </div>
      {/* lista de películas  */}
      <MovieList cant={20} />
    </div>
  );
};

export default App;
