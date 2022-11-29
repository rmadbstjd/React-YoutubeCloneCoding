import React,{useState, useEffect} from 'react';
import styles from './css/Navbar.module.css';
import {TfiSearch} from 'react-icons/tfi';
import {AiFillYoutube, AiOutlineBgColors} from 'react-icons/ai';
import {useNavigate, useParams} from 'react-router-dom';


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
             
            <div className={styles.youtubeContainer}>
                <AiFillYoutube className={styles.youtubeLogo}color="red" size={50} onClick={() =>{navigate('/')}}/>
                <div className={styles.youtube}  onClick={() =>{navigate('/')}}>Youtube</div>
            </div>
            <div className={styles.formContainer}>
            <form onSubmit={(e) =>submitKeyword(e)} className={styles.submit}>
                <input type="text" placeholder="Search..." value={text}onChange ={(e) =>setText(e.target.value)}className={styles.search}></input>
                 
                    <button className={styles.searchBox}><TfiSearch className={styles.searchImg} style={{marginTop : "5px"}}size={28} color="white"/></button>
                
            </form>
            </div>
            
            
        </div>
        
    );
};

export default Navbar;