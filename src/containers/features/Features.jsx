import React from "react";
import "./features.css";
import {Feature} from "../../components"

const featuresData = [
  {
    title: "Insert Title Here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et pretium urna. In hac habitasse platea dictumst. Vestibulum purus nulla, gravida nec congue vitae, lobortis at nibh. Proin non turpis ac tellus feugiat consequat. Donec efficitur volutpat imperdiet.",
  },
  {
    title: "Insert Title Here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et pretium urna. In hac habitasse platea dictumst. Vestibulum purus nulla, gravida nec congue vitae, lobortis at nibh. Proin non turpis ac tellus feugiat consequat. Donec efficitur volutpat imperdiet.",
  },
  {
    title: "Insert Title Here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et pretium urna. In hac habitasse platea dictumst. Vestibulum purus nulla, gravida nec congue vitae, lobortis at nibh. Proin non turpis ac tellus feugiat consequat. Donec efficitur volutpat imperdiet.",
  },
  {
    title: "Insert Title Here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et pretium urna. In hac habitasse platea dictumst. Vestibulum purus nulla, gravida nec congue vitae, lobortis at nibh. Proin non turpis ac tellus feugiat consequat. Donec efficitur volutpat imperdiet.",
  },
];

const Features = () => {
  return (
    <div className="gpt4__features section__padding" id="features">
      <div className="gpt4__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt4__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
