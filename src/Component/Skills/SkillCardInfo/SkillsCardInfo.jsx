import React from "react";
import "./SkillsCardInfo.css";

const SkillsCardInfo = ({ heading, skills }) => {
  return (
    <div id="skills-info-card">
      <h6>{heading}</h6>
      <div id="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div id="skills-info">
              <p>{item.skill}</p>
              <p id="percentage">{item.percentage}</p>
            </div>
            <div id="skills-progress-bg">
              <div id="skills-progress" style={{ width: item.percentage }} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsCardInfo;
