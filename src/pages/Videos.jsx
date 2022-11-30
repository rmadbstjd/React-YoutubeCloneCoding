import React from 'react';
import VideoCard from '../components/VideoCard';
import { useParams} from 'react-router-dom';
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
            youtube.search(keyword)
            ,{staleTime : 1000 * 60 * 1});
            
    
    return (
        <div className={styles.realContainer}>
            <div className={styles.container}>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error appeared..</p>}
            {videos && 
                videos.map((items,index) =><VideoCard  video={items} key={index}/>)
                }
            </div>
        </div>
    )
    
 
     
};

export default Videos;