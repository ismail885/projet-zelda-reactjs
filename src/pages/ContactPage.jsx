import React, { useState } from "react";
import "./contact.scss";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact">
      <h1>Contactez-nous</h1>
      {submitted ? (
        <p>Merci, {name}, de nous avoir contactés !</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "600px", margin: "0 auto" }}>
          <label>
            Nom :
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <br />
          <label>
            Email :
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <br />
          <label>
            Message :
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
          </label>
          <br />
          <button type="submit">Envoyer</button>
        </form>
      )}
    </main>
  );
};

export default ContactPage;