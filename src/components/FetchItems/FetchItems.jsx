import React, { useState } from "react";
import ApiFetch from "../../api/ApiFetch";
import "../../pages/home.scss";
import { Comment } from "../Comments/Comments"; 

export default function FetchItems() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(selectedItem === item ? null : item);
  };

  return (
    <div className="fetch-container">
      <ApiFetch url="https://zelda.fanapis.com/api/items">
        {(data) => {
          const newItem = {
            id: "new-item-id",
            name: "Magic Sword",
            description: "The Magic Sword is a powerful weapon in the game."
          };
          const updatedData = [...data, newItem];

          return (
            <div className="fetch-list">
              {updatedData
                .filter((item) => item.name)
                .map((item) => (
                  <div key={item.id} className="fetch-item">
                    <div className="fetch-item-content">
                      <p className="zelda" onClick={() => handleClick(item)}>
                        {item.name}
                      </p>
                      {selectedItem === item && (
                        <>
                          <p>{item.description}</p>
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
