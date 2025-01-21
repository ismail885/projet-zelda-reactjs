import React, { useState, useEffect } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.slice(0, 10)); // Limit to 10 items
        setLoading(false);
      });
  }, []);

  const addComment = (id, comment) => {
    setComments({ ...comments, [id]: [...(comments[id] || []), comment] });
  };

  return (
    <main>
      <h1>Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.body}</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const comment = e.target.elements.comment.value;
                  addComment(product.id, comment);
                  e.target.reset();
                }}
              >
                <input name="comment" placeholder="Add a comment" required />
                <button type="submit">Submit</button>
              </form>
              <ul>
                {(comments[product.id] || []).map((c, index) => (
                  <li key={index}>{c}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default ProductsPage;
