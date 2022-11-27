import React,{useEffect} from 'react';
import VideoCard from '../components/VideoCard';
import { useParams } from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import useStore from '../store';
import styles from './css/Videos.module.css';

const Videos = () => {
    const {youtube} = useStore();
  
    const {keyword} = useParams();
    const {
        isLoading,
        error,
        data: videos,
      } = useQuery(['videos', keyword],()=>
            youtube.search(keyword));
    console.log("비디오",videos);
    return (
        <div className={styles.realContainer}>
            <div className={styles.container}>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error appeared..</p>}
            {videos && 
                videos.map(items =><VideoCard  video={items}/>)
                }
            </div>
        </div>
    )
    
 
     
};

export default Videos;