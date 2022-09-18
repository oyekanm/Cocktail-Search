import React, { useEffect, useRef } from "react";

function Search({ search, setSearch }) {
  const refContainer = useRef();
  useEffect(() => {
    refContainer.current.focus();
  }, []);
  return (
    <form className="Form " onSubmit={(e) => e.preventDefault()}>
      <p className="Form__title">search your favourite cocktail</p>
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="Form__input"
        ref={refContainer}
      />
    </form>
  );
}

export default Search;
