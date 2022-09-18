import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="container">
      <p className="Drink__title text-center">Error!!!</p>
      <p className="no-show text-center">Page not Found</p>

      <div className="btn-home">
        <Link to="/" className="bttn ">
          Back Home
        </Link>
      </div>
    </div>
  );
}

export default Error;
