import React from 'react'
import TopSection from './TopSection'
import ListingSection from './ListingSection'
import ActivitySection from './ActivitySection'

const BodySection = () => {
  return (
    <div className='mainContent'>
        <TopSection />
         
         <div className='bottom flex'>
            <ListingSection/>
            <ActivitySection/>
         </div>
    </div>
  )
}

export default BodySection
