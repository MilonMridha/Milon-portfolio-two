import React, { useState } from "react";
import Education from "./Education";
import "./Resume.css";
import Skill from "./Skill";
import Trainee from "./Trainee";

const Resume = () => {
  const [skill, setSkill] = useState(true);
  const [education, setEducation] = useState(false);
  const [trainee, setTrainee] = useState(false);

  const handleSkill = () => {
    setSkill(true);
    setEducation(false);
    setTrainee(false);
  };
  const handleEducation = () => {
    setSkill(false);
    setEducation(true);
    setTrainee(false);
  };
  const handleTrainee = () => {
    setSkill(false);
    setEducation(false);
    setTrainee(true);
  };

  return (
    <div id="resume" className="text-white max-w-7xl mx-auto">
      <p className="text-base text-secondary uppercase">Ekramul hasan</p>
      <p className="text-accent font-bold text-6xl mb-10">Resume </p>
      <div className="min-h-[50vh]">
        <div class="tab-button-content">
          <ul class="flex flex-wrap -mb-px">
            <li class="mr-2">
              <label
                onClick={handleSkill}
                class={`tab-button ${skill && "active-tab"}`}
              >
                Profession Skills
              </label>
            </li>
            <li class="mr-2">
              <label
                onClick={handleEducation}
                class={`tab-button ${education && "active-tab"}`}
                aria-current="page"
              >
                Education
              </label>
            </li>
            <li class="mr-2">
              <label
                onClick={handleTrainee}
                class={`tab-button ${trainee && "active-tab"}`}
              >
                Professional Trainee
              </label>
            </li>
          </ul>
        </div>
        <div>
          <div id="skill" className={`${skill ? "block" : "hidden"}`}>
            <Skill />
          </div>
          <div id="education" className={`${education ? "block" : "hidden"}`}>
            <Education />
          </div>
          <div id="trainee" className={`${trainee ? "block" : "hidden"}`}>
            <Trainee />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
