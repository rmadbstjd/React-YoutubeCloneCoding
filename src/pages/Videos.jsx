import React,{useEffect} from 'react';
import VideoCard from '../components/VideoCard';
import { useParams } from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import { search } from '../api/youtube';
const Videos = () => {
    const {keyword} = useParams();
    /*const {isLoading,error,data:hotVideos} = useQuery(['hotVideos'], async() => {
        console.log('fetching....');
        return fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD3kttxOh47zCyy4sZ0h0bL8Y_eYTqjTRg`).then((res) => res.json());
    }, {staleTime : 3600 * 5, refetchOnWindowFocus: false});
    const {data:searchVideos} = useQuery(['searchVideos',keyword], async() => {
        console.log('fetching....');
        if(keyword !==undefined){
        return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=AIzaSyD3kttxOh47zCyy4sZ0h0bL8Y_eYTqjTRg`).then((res) => res.json());
        }
    },{staleTime : 3600 * 5, refetchOnWindowFocus: false});*/
    const {
        isLoading,
        error,
        data: videos,
      } = useQuery(['videos', keyword],()=> search(keyword));
    console.log("비디오",videos);
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error appeared..</p>}
            {videos && <ul>
                {videos.map(items =><VideoCard key={items.id} video={items}/>)}
                </ul>}
        </div>
    )
    
 
     
};

export default Videos;