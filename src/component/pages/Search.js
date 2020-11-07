import React, { useContext, useRef, useEffect } from "react";

import MovieContext from "../../context/movies/movieContext";

const Search = () => {
  const movieContext = useContext(MovieContext);
  const text = useRef("");

  const { filtered, filterContacts, clearFilter } = movieContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
    // eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  // console.log(filtered);
  return (
    <div className="search">
      <input
        ref={text}
        type="text"
        className="form-control"
        placeholder="Search movies"
        // value={text}
        onChange={onChange}
        autoFocus
      />
    </div>
  );
};

export default Search;
