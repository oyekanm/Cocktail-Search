import React, { useEffect, useState } from "react";
import CockTails from "../Components/CockTails";
import Search from "../Components/Search";

function Home() {
  const [search, setSearch] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktail = async () => {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    );
    const data = await res.json();
    const { drinks } = data;

    if (drinks) {
      const cocktails = drinks.map((drink) => {
        const { idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass } =
          drink;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          glass: strGlass,
          info: strAlcoholic,
        };
      });
      setCocktails(cocktails);
    } else {
      setCocktails(null);
    }
  };
  useEffect(() => {
    fetchCocktail();
  }, [search]);

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <CockTails cocktails={cocktails} />
    </>
  );
}

export default Home;
