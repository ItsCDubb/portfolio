import React, { useRef } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsMessenger } from "react-icons/bs";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_8cmeu8m",
      "template_9fuzqst",
      form.current,
      "user_7jtxsEF7xkCIm0SGpWUG0"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>How you can</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <GoLocation className="contact__icon" />
            <h4>Location</h4>
            <h5>Muncie, IN</h5>
          </article>
          <article className="contact__option">
            <MdOutlineAlternateEmail className="contact__icon" />
            <h4>Email</h4>
            <h5>me@chriswarren.dev</h5>
            <a
              href="mailto:me@chriswarren.dev"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__icon" />
            <h4>Messenger</h4>
            <h5>Chris Warren</h5>
            <a href="https://m.me/itscdubb" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <input type="text" name="subject" placeholder="The subject" />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
