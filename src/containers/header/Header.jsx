import React from "react";
import "./header.css";
import ai from "../../assets/artif.png";

const Header = () => {
  return (
    <div className="gpt4__header section__padding" id="home">
      <div className="gpt4__header-content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-4 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vitae tempor ex. Maecenas sit amet elit sit amet risus rutrum commodo.
          Morbi fringilla justo dolor, a egestas neque ultricies a. Donec
          hendrerit, nisl non varius tempus, nulla ex bibendum diam, tempor
          hendrerit lacus ligula quis nisl.
        </p>
        <div className="gpt4__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
      </div>
      <div className="gpt4__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
