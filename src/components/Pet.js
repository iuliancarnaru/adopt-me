import React from "react";
import { Link } from "@reach/router";

const Pet = ({ id, name, animal, breed, media, location }) => {
  let hero = `http://placecorgi.com/300/300`;

  // api bug returning media undefined
  if (media && media.length) {
    hero = media[0].small;
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
