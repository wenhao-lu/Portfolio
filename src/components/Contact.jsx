import { useState } from "react";
import axios from "axios";
import "../App.css";
import API_BASE_URL from "./apiConfig";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !msg) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/api/contacts`, {
        name,
        email,
        msg,
      });

      console.log(response.data);
      setFormSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="contact">
      <div className="contactText">Contact Me</div>

      <div className="contactWrap">
        

        {formSubmitted ? (
          <div className="formSubmitted">
            <p>Thank you for your message!</p> 
            <p>I'll get back to you soon.</p>
          </div>
        ) : (
          <form className="contactForm" onSubmit={handleSubmit}>
            <label htmlFor="name" className="formLabel">
              Name
            </label>
            <input
              className="formInput"
              id="name"
              type="text" required
              maxLength={20}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <label className="formLabel" htmlFor="email">
              Email
            </label>
            <input
              className="formInput"
              id="email"
              type="email" required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor="msg" className="formLabel">
              Message
            </label>
            <textarea
              className="formTextarea"
              id="msg"
              name="msg" 
              rows="4" required
              maxLength={200}
              value={msg}
              onChange={(event) => setMsg(event.target.value)}
            />

            <button type="submit" className="formBtn">
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
}