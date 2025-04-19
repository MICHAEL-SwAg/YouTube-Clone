import React from "react";
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icom from '../../assets/search.png'
import upload_icom from '../../assets/upload.png'
import more_icom from '../../assets/more.png'
import notification_icom from '../../assets/notification.png'
import profile_icom from '../../assets/jack.png'
import { Link } from "react-router-dom";




const Navbar = ({setSidebar}) => {
  return(
    <nav className="flex-div">
        <div className="nav-left flex-div">
            <img className="menu-icon" onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
            <Link to='/'><img className="logo" src={logo} alt="" /></Link>
        </div>

        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
                <input type="text" placeholder="Search" />
                <img src={search_icom} alt="" />
            </div>
        </div>

        <div className="nav-right flex-div">
            <img src={upload_icom} alt="" />
            <img src={more_icom} alt="" />
            <img src={notification_icom} alt="" />
            <img src={profile_icom} className="user-icon" alt="" />
        </div>
    </nav>
  )
}

export default Navbar;