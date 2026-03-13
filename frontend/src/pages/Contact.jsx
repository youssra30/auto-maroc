// src/pages/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        Vous pouvez nous contacter à : 
        <br />
        Email: contact@automaroc.com
        <br />
        Téléphone: +212 600 000 000
      </p>
      <form>
        <div>
          <label>Nom:</label>
          <input type="text" name="name" placeholder="Votre nom" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" placeholder="Votre email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" placeholder="Votre message"></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}