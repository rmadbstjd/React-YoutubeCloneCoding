import React,{useState} from 'react';
import styles from './css/Navbar.module.css';
import {TfiSearch} from 'react-icons/tfi';
import {AiFillYoutube} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';
import useStore from '../store';
const Navbar = () => {
    const [searchName, setSearchName] = useState('');
    const {keyword, setKeyword} = useStore(state => state);
    const navigate = useNavigate();
    const searchKeyword = (e) => {
            if(e.key ==='Enter') {
                setSearchName(e.target.value);
                setKeyword(searchName);
                
            }
    }
    const handleChange = (e) => {
        setSearchName(e.target.value);
    };
    const clickSearchBtn = () => {
        setKeyword(searchName);
    };
    return (
        <div className={styles.navBarContainer}>
            
            <AiFillYoutube className={styles.youtubeLogo}color="red" size={50} onClick={() =>{navigate('/')}}/>
            <div className={styles.youtube} onClick={() =>{navigate('/')}}>YOUTUBE</div>
            <input type="text" placeholder={keyword} onChange ={(e) =>handleChange(e)}className={styles.search} onKeyPress={(e) =>searchKeyword(e)}></input>
            <div className={styles.searchBox} onClick={(e) =>clickSearchBtn(e)}><TfiSearch size={25} color="white"/></div>
            
        </div>
    );
};

export default Navbar;