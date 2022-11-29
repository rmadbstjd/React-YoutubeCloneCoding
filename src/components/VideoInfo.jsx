import React,{useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useStore from '../store';
import styles from './css/VideoInfo.module.css';

const VideoInfo = () => {
    const [Id, setId] = useState('');
    const {youtube,forId} = useStore();
    const {id} = useParams();
    useEffect(() => {
      setId(forId.youtube.indexOf(id));
      console.log("아이디바뀜!!");
      
      }, [
       id
    ]);
    const {
      isLoading,
      error,
      data: info,
    } = useQuery(['info',forId.channel[Id]],()=>{
        
          
          console.log("Id의 인덱스",Id);
        return youtube.info(forId.channel[Id]);
        });
     

    
    console.log("info",info);
    return (
        <div className={styles.container}>
            {info && <div className={styles.cardImg}style={{backgroundImage:"url("+`${info[0].snippet.thumbnails.default.url}`+")"}}></div>}
            <span className={styles.title}>{info && info[0].snippet.title}</span>
            <span className={styles.description}>{info && info[0].snippet.description}</span>
            
        </div>
    );
};

export default VideoInfo;