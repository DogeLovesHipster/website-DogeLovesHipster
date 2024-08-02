import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, youtube } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { useNavigate } from "react-router-dom"; 

import "../styles/hover-animation.css";
import "../styles/shine-animation.css"

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  youtube_link,
  demo_link,
}) => {

  const navigate = useNavigate();

  const handleCardClick = () => {
    // Use a URL-friendly version of the project name
    const projectNameUrl = encodeURIComponent(name.toLowerCase().replace(/\s+/g, '-'));
    navigate(`/projects/${projectNameUrl}`, { state: { title: name } });
  };

  // Methods to handle the click of the YouTube and GitHub icons
  const handleYouTubeClick = () => {
    if (!youtube_link) {
      navigate('/404?Unavailable');
    } else {
      window.open(youtube_link, "_blank");
    }
  };

  const handleGitHubClick = () => {
    if (!source_code_link) {
      navigate('/404?Unavailable');
    } else {
      window.open(source_code_link, "_blank");
    }
  };

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      onClick={handleCardClick}
      className="cursor-pointer"
    >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div className="relative flex space-x-2">
                <div
                  onClick={handleGitHubClick}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover-target hover-github-gradient"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                  <div className="hover-info">Visit the public repo!</div>
                </div>
                <div
                    onClick={handleYouTubeClick}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover-target hover-youtube-gradient"
                  >
                    <img
                      src={youtube}
                      alt="YouTube"
                      className="w-1/2 h-1/2 object-contain"
                    />
                    <div className="hover-info">Watch a demo on YouTube!</div>
                  </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
  );
};

const Works = () => {
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    navigate("/projects");
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText} cursor-pointer project-text display: inline-block`} onClick={handleHeaderClick}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience Each project is
          briefly described with links to code repositories and live demos in
          it. It reflects my ability to solve complex problems, work with
          different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
