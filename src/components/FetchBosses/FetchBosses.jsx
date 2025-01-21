import React, { useState } from "react";
import ApiFetch from "../../api/ApiFetch";
import "../../pages/home.scss";
import { Comment } from "../Comments/Comments"; 

export default function FetchBosses() {
  const [selectedBoss, setSelectedBoss] = useState(null);

  const handleClick = (boss) => {
    setSelectedBoss(selectedBoss === boss ? null : boss);
  };

  return (
    <div className="fetch-container">
      <ApiFetch url="https://zelda.fanapis.com/api/bosses">
        {(data) => (
          <div className="fetch-list">
            {data
              .filter((boss) => boss.name)
              .map((boss) => (
                <div key={boss.id} className="fetch-item">
                  <div className="fetch-item-content">
                    <p className="zelda" onClick={() => handleClick(boss)}>
                      {boss.name}
                    </p>
                    {selectedBoss === boss && (
                      <>
                        <p>{boss.description}</p>
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
