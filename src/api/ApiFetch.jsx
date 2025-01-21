import React, { useEffect, useState } from "react";
import "./loader.scss";

export default function ApiFetch({ url, children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((result) => {
        setData(result.data || []);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [url]);

  if (isLoading) {
    return (
      <div className="container">
        <div className="container__content">
          <span className="loader"></span>
        </div>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return <>{children(data)}</>;
}