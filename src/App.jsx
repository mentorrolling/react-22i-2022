import "./App.css"; //importamos estilos
// import moviesList from "./data/movies.json";
import MovieList from "./components/MovieList";
import CounterApp from "./components/CounterApp";
import Gallery from "./components/Gallery";

const App = () => {
  //código de javascript

  return (
    <Gallery />
    // <>
    //   <CounterApp initialState={10} />
    //   <CounterApp initialState={0} />
    // </>

    // <div>
    //   <div>
    //     <h1>WebFlix🎬</h1>
    //   </div>
    //   {/* lista de películas  */}
    //   <MovieList cant={20} />
    // </div>
  );
};

export default App;
