import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { achievements, experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const AchievementCard = ({ Achievement }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#111522",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={Achievement.date}
      iconStyle={{ background: Achievement.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={Achievement.icon}
            alt={Achievement.company_name}
            className="object-contain rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[#8eadff] text-[24px] font-bold">
          {Array.isArray(Achievement.title)
            ? Achievement.title.map((t, i) => <div key={i}>{t}</div>)
            : Achievement.title}
        </h3>
        {/* <p
          className="text-white text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {Achievement.company_name}
        </p> */}
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {Achievement.points.map((point, index) => (
          <li
            key={`Achievement-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
            {Achievement.credential && Achievement.credential[index] && (
              <div className="my-2">
                <a
                  href={Achievement.credential[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300 transition-colors duration-200"
                >
                  View Credential
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.companyName}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Journey So Far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experience & Achievements.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`Experience-${index}`}
              experience={experience}
            />
          ))}
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={`Achievement-${index}`}
              Achievement={achievement}
            />
          ))}
        </VerticalTimeline>
      </div>

      <span id="skills"></span>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
