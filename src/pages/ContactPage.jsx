import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yuu1v55",
        "template_zpuv5ut",
        form.current,      
        "baNwAcDlfw4KLp9nX" 
      )
      .then(
        (result) => {
          console.log("Email envoyé : ", result.text);
          alert("Message envoyé avec succès !");
        },
        (error) => {
          console.error("Erreur lors de l'envoi : ", error.text);
          alert("Une erreur s'est produite. Veuillez réessayer.");
        }
      );
    e.target.reset(); 
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Nom :</label>
      <input type="text" name="from_name" required />

      <label>Email :</label>
      <input type="email" name="user_email" required />

      <input type="hidden" name="to_name" value="Isma" />

      <label>Message :</label>
      <textarea name="message" required />

      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
