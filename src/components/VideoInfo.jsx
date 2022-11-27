import React from 'react';
import {useQuery} from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useStore from '../store';
import styles from './css/VideoInfo.module.css';
const VideoInfo = () => {
    const {youtube} = useStore();
    const {id} = useParams();
    const {
        isLoading,
        error,
        data: info,
      } = useQuery(['info',id],()=>
            youtube.info(id));
 
    console.log("주소",info && info[0].snippet.thumbnails.default.url);
    return (
        <div className={styles.container}>
            {info && <div className={styles.cardImg}style={{backgroundImage:"url("+`${info[0].snippet.thumbnails.default.url}`+")"}}></div>}
            <span className={styles.title}>{info && info[0].snippet.title}</span>
            <span className={styles.description}>{info && info[0].snippet.description}</span>
            
        </div>
    );
};

export default VideoInfo;