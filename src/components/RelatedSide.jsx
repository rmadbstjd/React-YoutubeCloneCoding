import React from 'react';
import {useQuery} from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useStore from '../store';
import VideoCard from './VideoCard';
const RelatedSide = () => {
    const {youtube} = useStore();
    const {id} = useParams();
   
    const {
        isLoading,
        error,
        data: relatedVideos,
      } = useQuery(['relatedVideos',id],()=>
            youtube.related(id), {staleTime : 1000 * 60 * 5});
    
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error appeared..</p>}
            {relatedVideos && 
                relatedVideos.map((items,index) =><VideoCard video={items} type="related" key={index}/>)
                }
        </div>
    );
};

export default RelatedSide;