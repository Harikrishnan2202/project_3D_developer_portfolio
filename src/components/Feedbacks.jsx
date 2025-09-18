import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const AchievementCard = ({ index, title, company_name, date, points }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-1'>
      <h3 className='text-white font-bold text-[20px] text-justify'>{title}</h3>
      <p className='text-secondary text-[14px]'>
        {company_name} • {date}
      </p>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, i) => (
          <li
            key={`achievement-point-${i}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider text-justify"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const AchievementsSection = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Journey</p>
          <h2 className={styles.sectionHeadText}>Achievements</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {achievements.map((ach, index) => (
          <AchievementCard key={index} index={index} {...ach} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(AchievementsSection, "achievements");
