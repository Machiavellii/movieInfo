import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import star from "../../img/star.png";

import MovieContext from "../../context/movies/movieContext";
import Spinner from "../layout/Spinner";

const Movie = ({ match }) => {
  const movieContext = useContext(MovieContext);

  const { loading, movie, getMovie } = movieContext;

  useEffect(() => {
    getMovie(match.params.id);
    //eslint-disable-next-line
  }, [match]);

  if (loading) return <Spinner />;

  return (
    <>
      <Link to="/" className="btn">
        Back
      </Link>
      <section className="card-details">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.poster_path}
          className="details-img"
        />

        <div className="description">
          <span>
            <h1 className="mb-1">{movie.title}</h1>
            <p className="mb-5">
              {movie.genres === undefined ? "No Genres" : movie.genres[0].name}
            </p>
            <span className="review">
              <img src={star} alt="start.png" />
              <span className="tag tag-purple ml-5">{movie.vote_average}</span>
            </span>
          </span>

          <span className="overview">{movie.overview}</span>

          <span className="status-info">
            <small className="mb-5">
              <strong>Status: </strong>
              {movie.status}{" "}
            </small>
            <small>
              <strong>Released Date: </strong>
              {movie.release_date}
            </small>
          </span>
        </div>
      </section>
    </>
  );
};

export default Movie;
