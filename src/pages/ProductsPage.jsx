import React, { useState, useEffect } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState({});
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.slice(0, 10)); // Limit to 10 items
        setLoading(false);
      });

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPages(data.slice(0, 10)); // Limit to 10 items
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
        <ul style={{ padding: 0, listStyle: "none" }}>
          {products.map((product) => (
            <li key={product.id} style={{ marginBottom: "20px" }}>
              <h2>{product.title}</h2>
              <p>{product.body}</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const comment = e.target.elements.comment.value;
                  addComment(product.id, comment);
                  e.target.reset();
                }}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <input name="comment" placeholder="Add a comment" required style={{ marginBottom: "10px" }} />
                <button type="submit">Submit</button>
              </form>
              <ul style={{ padding: 0, listStyle: "none" }}>
                {(comments[product.id] || []).map((c, index) => (
                  <li key={index}>{c}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
      <h1>Pages</h1>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {pages.map((page) => (
          <li key={page.id} style={{ marginBottom: "20px" }}>
            <h2>{page.title}</h2>
            <p>{page.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ProductsPage;
