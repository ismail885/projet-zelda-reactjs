import React, { useState } from "react";
import ApiFetch from "../../api/ApiFetch";
import "../../pages/home.scss";
import { Comment } from "../Comments/Comments"; 

export default function FetchCharacters() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleClick = (character) => {
    setSelectedCharacter(selectedCharacter === character ? null : character);
  };

  return (
    <div className="fetch-container">
      <ApiFetch url="https://zelda.fanapis.com/api/characters">
        {(data) => (
          <div className="fetch-list">
            {data
              .filter((character) => character.name)
              .map((character) => (
                <div key={character.id} className="fetch-item">
                  <div className="fetch-item-content">
                    <p className="zelda" onClick={() => handleClick(character)}>
                      {character.name}
                    </p>
                    {selectedCharacter === character && (
                      <>
                        <p>{character.description}</p>
                        <p>Gender: {character.gender}</p>
                        <p>Race: {character.race}</p>
                        <Comment/>
                      </>
                    )}
                  </div>
                  
                </div>
              ))}

          </div>
        )}
      </ApiFetch>
    </div>
  );
}
