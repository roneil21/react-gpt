import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt4__possibility section__padding" id="possibility">
      <div className="gpt4__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt4__possibility-content">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
          pretium urna. In hac habitasse platea dictumst. Vestibulum purus
          nulla, gravida nec congue vitae, lobortis at nibh. Proin non turpis ac
          tellus feugiat consequat. Donec efficitur volutpat imperdiet.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
