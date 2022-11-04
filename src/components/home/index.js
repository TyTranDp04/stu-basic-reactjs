import React from 'react'
import DpAboutRoad from './DpAboutRoad'
import DpAdmission from './DpAdmission'
import DpAlumniSaying from './DpAlumniSaying'
import DpBackground from './Dpbackground'
import DpCampus from './DpCampus'
import DpConcerns from './DpConcerns'
import DpMustHave from './DpMustHave'

const Content = () => {
  return (
    <>
    <DpBackground/>
    <DpAboutRoad/>
    <DpMustHave/>
    <DpCampus/>
    <DpAdmission/>
    <DpConcerns/>
    <DpAlumniSaying/>
    </>
  )
}

export default Content