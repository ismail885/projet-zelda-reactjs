import React, { useState } from "react";
import ApiFetch from "../../api/ApiFetch";
import "../../pages/home.scss";
import { Comment } from "../Comments/Comments"; 

export default function FetchGames() {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleClick = (game) => {
    setSelectedGame(selectedGame === game ? null : game);
  };

  return (
    <div className="fetch-container">
      <ApiFetch url="https://zelda.fanapis.com/api/games">
        {(data) => (
          <div className="fetch-list">
            {data
              .filter((game) => game.name)
              .map((game) => (
                <div key={game.id} className="fetch-item">
                  <div className="fetch-item-content">
                    <p className="zelda" onClick={() => handleClick(game)}>
                      {game.name}
                    </p>
                    {selectedGame === game && (
                      <>
                        <p>{game.description}</p>
                        <p>Developer: {game.developer}</p>
                        <p>Publisher: {game.publisher}</p>
                        <p>Released Date: {game.released_date}</p>
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
