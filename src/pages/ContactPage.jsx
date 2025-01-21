import React, { useState } from "react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <h1>Contact Us</h1>
      {submitted ? (
        <p>Thank you, {name}, for reaching out to us!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </main>
  );
};

export default ContactPage;