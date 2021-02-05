import React from "react";
import axios from "axios";
import Movie from "./movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMoives = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies); data 확인
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMoives();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading.."
          : movies.map((movie) => {
              console.log(movie);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                ></Movie>
              );
            })}
      </div>
    );
  }
}

export default App;
