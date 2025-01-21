import React, { useState } from "react";
import ApiFetch from "../../api/ApiFetch";
import "../../pages/home.scss";
import { Comment } from "../Comments/Comments"; 

export default function FetchDungeons() {
  const [selectedDungeon, setSelectedDungeon] = useState(null);

  const handleClick = (dungeon) => {
    setSelectedDungeon(selectedDungeon === dungeon ? null : dungeon);
  };

  return (
    <div className="fetch-container">
      <ApiFetch url="https://zelda.fanapis.com/api/dungeons">
        {(data) => {
          const newDungeon = {
            id: "new-dungeon-id",
            name: "Abyss of Agony",
            description: "Abyss of Agony is a challenging dungeon in the game."
          };
          const updatedData = [...data, newDungeon];

          return (
            <div className="fetch-list">
              {updatedData
                .filter((dungeon) => dungeon.name)
                .map((dungeon) => (
                  <div key={dungeon.id} className="fetch-item">
                    <div className="fetch-item-content">
                      <p className="zelda" onClick={() => handleClick(dungeon)}>
                        {dungeon.name}
                      </p>
                      {selectedDungeon === dungeon && (
                        <>
                          <p>{dungeon.description}</p>
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