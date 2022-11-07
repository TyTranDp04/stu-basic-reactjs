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
  return (
    <>
      <DpBackground />
      <DpAboutRoad 
      aboutTitle = {aboutTitle}
      aboutDesc = {aboutDesc}
      aboutContent = {aboutContent}
      roadTitle = {roadTitle}
      />
      <DpMustHave />
      <DpCampus />
      <DpAdmission />
      <DpConcerns />
      <DpAlumniSaying />
    </>
  )
}

export default Content