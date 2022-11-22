import React from 'react';
import styles from './css/Navbar.module.css';
import {TfiSearch} from 'react-icons/tfi';
import {AiFillYoutube} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    const handleSearch = (e) => {
        let keyword = e.target.value;
        if(e.key ==='Enter') {
            console.log(keyword);
            console.log(e.key);
        }
    }
    return (
        <div className={styles.navBarContainer}>
            
            <AiFillYoutube className={styles.youtubeLogo}color="red" size={50} onClick={() =>{navigate('/')}}/>
            <div className={styles.youtube} onClick={() =>{navigate('/')}}>YOUTUBE</div>
            <input type="text" placeholder="Search.." className={styles.search} onKeyPress={(e) =>handleSearch(e)}></input>
            <div className={styles.searchBox}><TfiSearch size={25} color="white"/></div>
            
        </div>
    );
};

export default Navbar;