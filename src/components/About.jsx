import React from "react";
// --- FIX 1: Import the correct, modern 'react-parallax-tilt' package ---
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  // --- FIX 2: Apply Tilt props directly to the Tilt component, not the div inside it ---
  <Tilt
    className='xs:w-[250px] w-full'
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        // The 'options' prop was removed from here
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title} // Improved alt text for better accessibility
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[32px] text-justify'
      >
        I’m an aspiring <span className="text-white font-semibold">Data Scientist </span>
        and <span className="text-white font-semibold">AI Enthusiast</span>, currently pursuing
        <span className="text-white font-semibold"> B.Tech in Artificial Intelligence & Data Science</span>.

        I have hands-on experience in
        <span className="text-white font-semibold"> Machine Learning</span>,
        <span className="text-white font-semibold"> Deep Learning</span>,
        <span className="text-white font-semibold"> Data Visualization</span>, and
        <span className="text-white font-semibold"> Full-Stack Development</span>.

        Through internships and hackathons, I’ve built projects like
        <span className="italic"> AI-powered Resume Builders</span>,
        <span className="italic"> Vehicle Detection Systems</span>, and
        <span className="italic"> Smart Road Safety Applications</span>.

        I enjoy solving real-world problems with technology, and I’m passionate about combining
        <span className="text-white font-semibold"> Data Science</span>,
        <span className="text-white font-semibold"> AI</span>, and
        <span className="text-white font-semibold"> Entrepreneurship </span>
        to create impactful solutions 🚀.
        <br />
        <a
          href="https://drive.google.com/file/d/1nbiVKkOvnfCdnOp9-1ePrEAe-rtH19aA/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition-transform duration-300 animate-pulse"
        > Resume</a>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");