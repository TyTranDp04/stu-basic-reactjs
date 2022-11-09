import React from 'react'
import DpAboutRoad from './DpAboutRoad'
import DpAdmission from './DpAdmission'
import DpAlumniSaying from './DpAlumniSaying'
import DpBackground from './DpBackground'
import DpCampus from './DpCampus'
import DpConcerns from './DpConcerns'
import DpMustHave from './DpMustHave'

const Content = () => {
  const aboutTitle = "ABOUT DEVPLUS";
  const aboutDesc = "The Fact: Skilled labour shortage for software companies but full of freshers and low level juniors";
  const aboutContent = "Our responsibility is filling the gap between the quality of graduate students and the quality of engineers. Devplus will help reducing the cost of re-training and accelerating the skill-up progress of students and freshers.";
  const roadTitle = "ROAD TO BE A DEVPLUS"
  const titleBg =
    "Devplus Will Support The Early Stage Developers Go The Right Career Path";
  const contentBg =
    "Devplus is not a training center, it’s battle campus for you to level up your skillsets and ready to onboard any projects in our “kindest” companies listing";
  const btnBg = "LEARN MORE";
  const titleMustHave = "What an engineer after Devplus will must have?";
  const TitleAlumniSaying = 'What alumni saying';
  const titleMustHave = "What an engineer after Devplus will must have?";

  return (
    <>
      <DpBackground titleBg={titleBg} contentBg={contentBg} btnBg={btnBg} />
      <DpAboutRoad
        aboutTitle={aboutTitle}
        aboutDesc={aboutDesc}
        aboutContent={aboutContent}
        roadTitle={roadTitle}
      />
      <DpMustHave titleMustHave={titleMustHave} />
      <DpCampus />
      <DpAdmission />
      <DpConcerns />
      <DpAlumniSaying TitleAlumniSaying={TitleAlumniSaying} />
    </>
  );
};

export default Content;
