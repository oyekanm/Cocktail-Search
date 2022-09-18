import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function SingleCocktail() {
  const { id } = useParams();
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCocktail = async () => {
    setLoading(true);
    const res = await fetch(`${url}${id}`);
    const data = await res.json();
    const { drinks } = data;

    if (drinks) {
      const cocktails = drinks.map((drink) => {
        const {
          idDrink,
          strAlcoholic,
          strDrink,
          strDrinkThumb,
          strGlass,
          strCategory,
          strInstructions,
        } = drink;
        return {
          drinkId: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          glass: strGlass,
          info: strAlcoholic,
          category: strCategory,
          instruction: strInstructions,
          ingredients: [
            drink.strIngredient1,
            drink.strIngredient2,
            drink.strIngredient3,
            drink.strIngredient4,
            drink.strIngredient5,
          ],
        };
      });

      setCocktails(cocktails);
    } else {
      setCocktails(null);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchCocktail();
  }, []);

  if (!cocktails) {
    return <p className="no-show text-center">No cocktail available</p>;
  }

  return (
    <>
      <div className="btn-home">
        <Link to="/" className="bttn ">
          Back Home
        </Link>
      </div>

      <p className="title text-center">Cocktail Info</p>

      <div className="cocktail">
        <div className="row">
          {cocktails.map((item) => {
            const {
              drinkId,
              name,
              image,
              category,
              ingredients,
              glass,
              info,
              instruction,
            } = item;
            return (
              <>
                <div className="col-md-4" key={drinkId}>
                  <img src={image} alt={name} className="cocktail__image" />
                </div>
                <div className="col-md-7 cocktail__info">
                  <p>
                    {" "}
                    <span className="cocktail__btn">name :</span>
                    {name}{" "}
                  </p>
                  <p>
                    <span className="cocktail__btn">category :</span>
                    {category}
                  </p>
                  <p>
                    {" "}
                    <span className="cocktail__btn">info :</span>
                    {info}
                  </p>
                  <p>
                    {" "}
                    <span className="cocktail__btn">glass :</span>
                    {glass}
                  </p>
                  <p>
                    <span className="cocktail__btn">instruction :</span>
                    {instruction}
                  </p>
                  <p>
                    <span className="cocktail__btn">ingredients :</span>
                    {ingredients.map((ingredient, index) => {
                      return ingredient ? (
                        <span key={index}> {ingredient} </span>
                      ) : null;
                    })}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="order__flex">
        <span className="order__btn">Order</span>
      </div>
    </>
  );
}

export default SingleCocktail;

// const {
//   drinkId: idDrink,
//   name: strDrink,
//   image: strDrinkThumb,
//   glass: strGlass,
//   info: strAlcoholic,
//   category: strCategory,
//   instruction: strInstructions,
//   ingredients: [
//     strIngredient1,
//     strIngredient2,
//     strIngredient3,
//     strIngredient4,
//     strIngredient5,
//   ],
// } = drinks[0];
// const cocktails = {
//   name,
//   image,
//   category,
//   ingredients,
//   glass,
//   info,
//   instruction,
// };
