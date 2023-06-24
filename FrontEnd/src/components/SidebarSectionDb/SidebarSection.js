import React from 'react';
import "../../App.css";
import Button from 'react-bootstrap/Button';
import logo from "../../assets/images.jpg";
import {BiAlignLeft} from 'react-icons/bi';
import {BiBook} from 'react-icons/bi';
import {BiCartAlt} from 'react-icons/bi';
import {FiFeather} from 'react-icons/fi';
import {BiPlanet} from 'react-icons/bi';
import {BiPieChart} from 'react-icons/bi';
import {FiPackage} from 'react-icons/fi';
import {BiQuestionMark} from 'react-icons/bi';
import {BiLogOut} from 'react-icons/bi';
 import { Link } from 'react-router-dom'


const SidebarSection = () => {
  return (
    <div className='sideBar grid'>
      <div className='logoDiv flex'>
        <img className='imgLogo' src={logo} alt='logoImage' />
        <h2><Link to={"../Dashboard"}>
                        <span className='green'>
                            Farmers
                        </span>
                    </Link>
             <span className='green'>.</span>
        </h2>
      </div>
    <div className='menuDiv'>
        <h3 className='divTitle'>
            Quick Menu
        </h3>
        <ul className='menuLists grid'>
            <li className='listItem'>
                <a href='#' className='menuLink flex' active >
                <BiAlignLeft className='icon' /> 
                     <Link to={"../Dashboard"}>
                        <span className='green'>
                            Dashboard
                        </span>
                    </Link>
                </a>
            </li>
            <li className='listItem'>
                <a href='#' className='menuLink flex'>
                <BiBook />
                    <Link to={"../Inventory"}>
                        <span className='green'>
                            Inventory
                        </span>
                    </Link>
                </a>
            </li>
            <li className='listItem'>
                <a href='#' className='menuLink flex'>
                <FiFeather className='icon' /> 
                <Link to={"../Culture"}>
                        <span className='green'>
                            Culture
                        </span>
                    </Link>
                </a>
            </li>
             <li className='listItem'>
                <a href='#' className='menuLink flex'>
                <BiCartAlt className='icon' /> 
                <span >
                    Orders
                </span>
                </a>
            </li>
        </ul>
    </div>
    <div className='settingDiv'>
        <h3 className='divTitle'>
            SETTINGS
        </h3>
        <ul className='menuLists grid'>
            <li className='listItem'>
                <a href='#' className='menuLink flex'>
                <BiPieChart className='icon' /> 
                <span >
                    Chart
                </span>
                </a>
            </li>
            <li className='listItem'>
                <a href='#' className='menuLink flex'>
                <BiPlanet className='icon' /> 
                <span >
                    Explore
                </span>
                </a>
            </li>
            <li className='listItem'>
                <a href='#' className='menuLink flex'>
                <FiPackage className='icon' /> 
                <span >
                    Product
                </span>
                </a>
            </li>
        </ul>
    </div>

    <div className='sidebarCard'>
        <BiQuestionMark className='helpStick' /> 
        <div className='cardContent'>
            <div className='circle1'></div>
            <div className='circle2'></div>
            <h3>Help Center</h3>
            <p>Having trouble in SmallHolderFarm, please contact us for more questions.</p>
            <Button href='#' variant="success">Go to help center</Button>
        </div>
    </div>
    </div>
  )
}

// inventory culture orders

export default SidebarSection
