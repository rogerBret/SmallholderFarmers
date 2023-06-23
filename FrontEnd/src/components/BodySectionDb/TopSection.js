import React from 'react'

/******Imported icons*********/
import {AiOutlineSearch} from 'react-icons/ai'
import {TbMessageCircle} from 'react-icons/tb'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'

/*******Imported images***********/
import img from '../../assets/profile.png'
import video from '../../assets/Farm2.gif'
import imgTomato from '../../assets/tomato.png'

const TopSection = () => {
  return (
     <div className='topSection'>
      <div className='headerSection flex'>
        <div className='title'>
            <h1>Welcome to your smart Farm</h1>
            <p>Hello christelle, welcome back</p>
        </div>

        <div className='searchBar flex'>
          <input type='text' placeholder='Search Dashboard' />
          <AiOutlineSearch className="icon" />
        </div>

        <div className='adminDiv flex'>
          <TbMessageCircle className='icon' />
          <MdOutlineNotificationsNone className='icon' />
          <div className='adminImage'>
            <img src={img} alt='pic profile' />
          </div>
        </div>
      </div>

      <div className='cardSection flex'>
        <div className='rightCard flex'>
          <h1>Manage and control your farm products</h1>
          <p>The world fast growing industry today are natural made products!</p>
          <div className='buttons flex'>
            <button className='butn'>Explore more</button>
            <button className='butn transparent'>Top Intrants</button>
          </div>
          <div className='videoDiv'>
            <img src={video} alt='gif'></img>
          </div>
        </div>
        <div className='leftCard flex'>
          <div className='main flex'>
            <div className='textDiv row'>
              <h1>my stat</h1>
              <div className='flex col'>
                <span>
                  Today <br/> <small>4 orders</small>
                </span>
              </div>
              <div className='flex col'>
                <span>
                  This month <br/> <small>125 orders</small>
                </span>
              </div>
              <span className='flex link'>
                Go to my orders <BsArrowRightShort className='icon'/>
              </span>
            </div>

            <div className='imgDiv'>
              <img src={imgTomato} alt='imgName'/> 
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TopSection
