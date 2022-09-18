import React from "react";
import { Link } from "react-router-dom";

function CockTails({ cocktails }) {
  if (!cocktails) {
    return (
      <p className="no-show text-center">No cocktail matched Your Search</p>
    );
  }
  return (
    <>
      <p className="Drink__title text-center">Cocktails</p>
      <div className=" row">
        {cocktails.map((drink) => {
          const { id, name, image, glass, info } = drink;
          return (
            <>
              <div className="Drink col-md-3" key={id}>
                <img src={image} alt={name} className="Drink__image" />
                <div className="Drink__info">
                  <p className="Drink__name">{name}</p>
                  <p className="Drink__glass">{glass}</p>
                  <p className="Drink__alcohol">{info}</p>
                  <Link to={`/${id}`} className="bttn">
                    details
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default CockTails;
