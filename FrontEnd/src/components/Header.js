import React from 'react'
import Button from 'react-bootstrap/Button';
import '../App.css'
import imgHead from '../assets/imageHead.png'
const Header = () => {
  return (
    <div id='HeaderSection' className='header-wrapper mx-5 col d-flex col'>
        <div className='main-info '>
            <h1 className='mt-5'><b>Small Holder farmers<br></br> Software that moves your <br></br> whole farm forward</b></h1>
            <h5 className='mt-3 mb-5'>Make Small Holder farmers easier and meet your farming <br></br> business goals with Farmers all-in-one software solution.</h5>
            <Button href='#' variant="success">Get a demo</Button>
        </div>
        <div className='imageHeader'>
          <img src={imgHead} alt='imageHead'></img>
        </div>
    </div>
  )
}

export default Header;