
import React from 'react'
import DpAboutRoad from './DpAboutRoad'
import DpAdmission from './DpAdmission'
import DpAlumniSaying from './DpAlumniSaying'
import DpBackground from './Dpbackground'

import DpCampus from './DpCampus'
import DpConcerns from './DpConcerns'
import DpMustHave from './DpMustHave'

const Content = () => {
  const titleBg =
    "Devplus Will Support The Early Stage Developers Go The Right Career Path";
  const contentBg =
    "Devplus is not a training center, it’s battle campus for you to level up your skillsets and ready to onboard any projects in our “kindest” companies listing";
  const btnBg = "LEARN MORE";
  const TitleAlumniSaying = 'What alumni saying';
  
  return (
    <>
      <DpBackground titleBg={titleBg} contentBg={contentBg} btnBg={btnBg} />
      <DpAboutRoad />
      <DpMustHave />
      <DpCampus />
      <DpAdmission />
      <DpConcerns />
      <DpAlumniSaying TitleAlumniSaying={TitleAlumniSaying} />
    </>
  );
};

export default Content;
