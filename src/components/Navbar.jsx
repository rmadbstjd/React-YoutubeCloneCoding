import React,{useState, useEffect} from 'react';
import styles from './css/Navbar.module.css';
import {TfiSearch} from 'react-icons/tfi';
import {AiFillYoutube} from 'react-icons/ai';
import {useNavigate, useParams} from 'react-router-dom';
import useStore from '../store';

const Navbar = () => {
    const {keyword} = useParams();
    const [text, setText] = useState('');
   
    const navigate = useNavigate();
    
    
    const submitKeyword = (e) => {
        e.preventDefault();
        
        navigate(`/videos/${text}`);
    };
    useEffect(() => {
        
        setText(keyword || '');
        
        
    }, [keyword]);
    
    return (
        <div className={styles.navBarContainer}>
            
            <AiFillYoutube className={styles.youtubeLogo}color="red" size={50} onClick={() =>{navigate('/')}}/>
            <div className={styles.youtube} onClick={() =>{navigate('/')}}>YOUTUBE</div>
            <form onSubmit={(e) =>submitKeyword(e)}>
                <input type="text" placeholder={keyword} value={text}onChange ={(e) =>setText(e.target.value)}className={styles.search}></input>
                <button className={styles.searchBox}><TfiSearch size={25} color="white"/></button>
            </form>
            
            
        </div>
    );
};

export default Navbar;