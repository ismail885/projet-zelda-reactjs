import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your actual Service ID
        "YOUR_TEMPLATE_ID", // Replace with your actual Template ID
        form.current,
        "YOUR_PUBLIC_KEY"  // Replace with your actual Public Key
      )
      .then(
        (result) => {
          console.log("Email envoyé : ", result.text);
          alert("Message envoyé avec succès !");
          setSubmitted(true);
        },
        (error) => {
          console.error("Erreur lors de l'envoi : ", error.text);
          alert("Une erreur s'est produite. Veuillez réessayer.");
        }
      );
    e.target.reset(); // Réinitialise le formulaire après l'envoi
  };

  return (
    <main className="contact">
      <h1>Contactez-nous</h1>
      {submitted ? (
        <p>Merci, {name}, de nous avoir contactés !</p>
      ) : (
        <form ref={form} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", maxWidth: "600px", margin: "0 auto" }}>
          <label>
            Nom :
            <input type="text" name="from_name" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <br />
          <label>
            Email :
            <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <br />
          <label>
            Message :
            <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
          </label>
          <br />
          <button type="submit">Envoyer</button>
        </form>
      )}
    </main>
  );
};

export default ContactPage;