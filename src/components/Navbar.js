import React, { useEffect, useState } from 'react';
import { BiMoviePlay } from "react-icons/bi";
import {NavLink, Link} from "react-router-dom";

const Navbar = () => {
    const activeStyle = {
        color:'pink'
    }
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(()=>{
        const handleScroll =() =>{
            if(window.scrollY>0){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
            
        }
        window.addEventListener('scroll', handleScroll);
        return () =>{
            window.removeEventListener('scroll', handleScroll)
        }
    },[])
    return (
        <nav className={isScrolled ? 'scrolled' : ''}>
            <div className='logo'>
                <Link to='/'><BiMoviePlay className='icon' /></Link>
            </div>    
            <ul>
                <li><NavLink to="" style={({isActive}) => (isActive? activeStyle : undefined)}>Home</NavLink></li>
                <li><NavLink to="movies" style={({isActive}) => (isActive? activeStyle : undefined)}>Movie</NavLink></li>
                <li><NavLink to="users" style={({isActive}) => (isActive? activeStyle : undefined)}>Users</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;