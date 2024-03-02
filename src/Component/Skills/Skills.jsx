import React, { useState } from "react";
import "./Skills.css";
import { SkillsCard } from "../SkillsCard/SkillsCard";
import { SKILLS } from "../../utils/data";
import SkillsCardInfo from "./SkillCardInfo/SkillsCardInfo";

export const Skills = () => {

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0])


  const handleSelectSkill = (data) =>{
    setSelectedSkill(data);
  };


  return (
    <section id="skills-container" className="my-16 mx-0 relative">
      <h5 className="text-[1.5rem] font-semibold mb-14 font-Gilroy">Technical Proficiency</h5>
      <div id="skill-content" className="flex items-start gap-12 ">
        <div id="skills">
            {SKILLS.map((item) => (
              <SkillsCard 
               key={item.title}
               iconUrl={item.icon}
               title={item.title}
               isActive={selectedSkill.title === item.title}
               onClick={() => {
                handleSelectSkill(item);
               }}
               />
            ))}
        </div>
        <div id="skill-data" className="flex-1">
          <SkillsCardInfo
              heading={selectedSkill.title}
              skills= {selectedSkill.skills}
              />
        </div>
      </div>
    </section>
  );
};
