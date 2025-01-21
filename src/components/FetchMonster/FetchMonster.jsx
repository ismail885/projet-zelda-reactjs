import React, { useState } from "react";
import ApiFetch from "../../api/ApiFetch";
import "../../pages/home.scss";
import { Comment } from "../Comments/Comments"; 

export default function FetchMonster() {
  const [selectedMonster, setSelectedMonster] = useState(null);

  const handleClick = (monster) => {
    setSelectedMonster(selectedMonster === monster ? null : monster);
  };

  return (
    <div className="fetch-container">
      <ApiFetch url="https://zelda.fanapis.com/api/monsters">
        {(data) => {
          const newMonster = {
            id: "new-monster-id",
            name: "Abominom",
            description: "Abominoms are enemies in the Philips CD-i game The Faces of Evil."
          };
          const updatedData = [...data, newMonster];

          return (
            <div className="fetch-list">
              {updatedData
                .filter((monster) => monster.name)
                .map((monster) => (
                  <div key={monster.id} className="fetch-item">
                    <div className="fetch-item-content">
                      <p className="zelda" onClick={() => handleClick(monster)}>
                        {monster.name}
                      </p>
                      {selectedMonster === monster && (
                        <>
                          <p>{monster.description}</p>
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
