import React from 'react'
import '../App.css'
import SidebarSection from '../components/SidebarSectionDb/SidebarSection';
import BodySection from '../components/BodySectionDb/BodySectionCulture';

const Culture = () => {
  return (
    <div className='containerDb'>
      <SidebarSection />
      <BodySection /> 
    </div>
  )
}

export default Culture; 