import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import star from "../../img/star.png";

import MovieContext from "../../context/movies/movieContext";
import Spinner from "../layout/Spinner";

import Pagination from "../layout/Pagination";
import Search from "./Search";

const Movies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviePerPage] = useState(8);

  const movieContext = useContext(MovieContext);

  const { loading, movies, getMovies, filtered } = movieContext;

  useEffect(() => {
    getMovies();
    //eslint-disable-next-line
  }, []);

  // Get current movie
  const indexOfLastPost = currentPage * moviePerPage;
  const indexOfFirstPost = indexOfLastPost - moviePerPage;
  const currentMovie =
    movies.length === 0
      ? ""
      : movies.results.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {loading || movies.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <Search />
          <div className="moviesContainer">
            <section className="cards">
              {filtered !== null
                ? filtered.map((movie) => (
                    <div className="card" key={movie.id}>
                      <Link to={`/${movie.id}`}>
                        <div className="card-header">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.poster_path}
                          />
                        </div>
                        <div className="card-body">
                          <span className="review">
                            <img src={star} alt="start.png" />
                            <span className="tag tag-purple">
                              {movie.vote_average}
                            </span>
                          </span>
                          <h4>{movie.title}</h4>

                          <div className="movie">
                            <img
                              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                              alt="movie 1"
                              className="movie-img"
                            />
                            <div className="movie-info">
                              <h5>Release Date</h5>
                              <small>{movie.release_date}</small>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                : currentMovie.map((movie) => (
                    <div className="card" key={movie.id}>
                      <Link to={`/${movie.id}`}>
                        <div className="card-header">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.poster_path}
                          />
                        </div>
                        <div className="card-body">
                          <span className="review">
                            <img src={star} alt="start.png" />
                            <span className="tag tag-purple">
                              {movie.vote_average}
                            </span>
                          </span>
                          <h4>{movie.title}</h4>

                          <div className="movie">
                            <img
                              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                              alt="movie 1"
                              className="movie-img"
                            />
                            <div className="movie-info">
                              <h5>Release Date</h5>
                              <small>{movie.release_date}</small>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
            </section>
          </div>
          <Pagination
            moviePerPage={moviePerPage}
            totalMovies={movies.results.length}
            paginate={paginate}
          />
        </>
      )}
    </>
  );
};

export default Movies;
