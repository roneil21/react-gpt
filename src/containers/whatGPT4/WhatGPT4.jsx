import React from "react";
import "./whatGPT4.css";

import Feature from "../../components/feature/Feature";

const WhatGPT4 = () => {
  return (
    <div className="gpt4__whatgpt4 section__margin" id="wgpt4">
      <div className="gpt4__whatgpt4-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et pretium urna. In hac habitasse platea dictumst. Vestibulum purus nulla, gravida nec congue vitae, lobortis at nibh. Proin non turpis ac tellus feugiat consequat. Donec efficitur volutpat imperdiet."
        />
      </div>
      <div className="gpt4__whatgpt4-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt4__whatgpt4-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et pretium urna. In hac habitasse platea dictumst. Vestibulum purus nulla, gravida nec congue vitae, lobortis at nibh. Proin non turpis ac tellus feugiat consequat. Donec efficitur volutpat imperdiet."
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et pretium urna. In hac habitasse platea dictumst. Vestibulum purus nulla, gravida nec congue vitae, lobortis at nibh. Proin non turpis ac tellus feugiat consequat. Donec efficitur volutpat imperdiet."
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et pretium urna. In hac habitasse platea dictumst. Vestibulum purus nulla, gravida nec congue vitae, lobortis at nibh. Proin non turpis ac tellus feugiat consequat. Donec efficitur volutpat imperdiet."
        />
      </div>
    </div>
  );
};

export default WhatGPT4;
