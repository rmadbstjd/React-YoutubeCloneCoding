import React,{useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import useStore from '../store';
import styles from './css/VideoInfo.module.css';

const VideoInfo = () => {
    const navigate = useNavigate();
    const [Id, setId] = useState('');
    const [keyword, setKeyword] = useState('');
    const {youtube,forId} = useStore();
    const {id} = useParams();
    
    const handleClick = () => {
        setKeyword(info[0].snippet.title);
        console.log("키워드!",keyword);
        
    };
    useEffect(() => {
      setId(forId.youtube.indexOf(id));
      
      
      }, [
       id
    ]);
    useEffect(() => {
        keyword && navigate(`/videos/${keyword}`);
        
        
        }, [
         keyword
      ]);
    const {
      isLoading,
      error,
      data: info,
    } = useQuery(['info',forId.channel[Id]],()=>{
        
          
          
        return youtube.info(forId.channel[Id]);
        },{staleTime : 1000 * 60 * 5});

    

       
   

    
        
    return (
        <div className={styles.container}>
            {info && <div onClick ={handleClick} className={styles.cardImg}style={{backgroundImage:"url("+`${info[0].snippet.thumbnails.default.url}`+")"}}></div>}
            <span onClick ={handleClick}className={styles.title}>{info && info[0].snippet.title}</span>
            <span className={styles.description}>{info && info[0].snippet.description}</span>
            
        </div>
    );
};

export default VideoInfo;