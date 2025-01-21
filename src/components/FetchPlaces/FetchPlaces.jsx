import React, { useState } from "react";
import ApiFetch from "../../api/ApiFetch";
import "../../pages/home.scss";
import { Comment } from "../Comments/Comments"; 

export default function FetchPlaces() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleClick = (place) => {
    setSelectedPlace(selectedPlace === place ? null : place);
  };

  return (
    <div className="fetch-container">
      <ApiFetch url="https://zelda.fanapis.com/api/places">
        {(data) => {
          const newPlace = {
            id: "new-place-id",
            name: "Advance Shop",
            description: "Advance Shop is a place in the game.",
            inhabitants: []
          };
          const updatedData = [...data, newPlace];

          return (
            <div className="fetch-list">
              {updatedData
                .filter((place) => place.name)
                .map((place) => (
                  <div key={place.id} className="fetch-item">
                    <div className="fetch-item-content">
                      <p className="zelda" onClick={() => handleClick(place)}>
                        {place.name}
                      </p>
                      {selectedPlace === place && (
                        <>
                          <p>{place.description}</p>
                          <p>Inhabitants: {place.inhabitants.join(", ")}</p>
                          <Comment/>
                        </>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          );
        }}
      </ApiFetch>
    </div>
  );
}
