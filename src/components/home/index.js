import React from "react";
import DpAboutRoad from "./dp-about-road";
import DpAdmission from "./dp-admission";
import DpAlumniSaying from "./dp-alumni-saying";
import DpBackground from "./DpBackground";
import DpCampus from "./dp-campus";
import DpConcerns from "./dp-concerns";
import DpMustHave from "./dp-must-have";

const Content = () => {
  const titleBg =
    "Devplus Will Support The Early Stage Developers Go The Right Career Path";
  const contentBg =
    "Devplus is not a training center, it’s battle campus for you to level up your skillsets and ready to onboard any projects in our “kindest” companies listing";
  const btnBg = "LEARN MORE";
  
  return (
    <>
      <DpBackground titleBg={titleBg} contentBg={contentBg} btnBg={btnBg} />
      <DpAboutRoad />
      <DpMustHave />
      <DpCampus />
      <DpAdmission />
      <DpConcerns />
      <DpAlumniSaying />
    </>
  );
};

export default Content;
