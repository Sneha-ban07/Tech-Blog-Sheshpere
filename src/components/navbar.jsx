import React, {useState} from "react";
import logo from '../images/logo.png'

function Navbar(){

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return(

        <nav className={nav ? 'nav active':'nav'}>
            <a href="#" className="logo">
                <img src={logo} alt=""/>
            </a>
            <input type='checkbox' className="menu-btn" id='menu-btn'></input>
            <label className="menu-icon" for="menu-btn" >
                <span className="nav-icon"></span>
            </label>
            
            <ul className="menu">
                
                <li><a href="#">Login</a></li>
                <li><a href="#">Sign Up</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;