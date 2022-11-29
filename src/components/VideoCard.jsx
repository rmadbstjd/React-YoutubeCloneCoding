import React from 'react';
import styles from './css/VideoCard.module.css';
import detailDate from '../util/date';
import useStore from '../store';
import {useNavigate} from 'react-router-dom';
const VideoCard = ({video,type}) => {
    const navigate = useNavigate();
    const {title,thumbnails,publishedAt,channelTitle,channelId} = video.snippet;
    const {setYoutubeId, setIdforChannel,setIdforYoutube} = useStore();
    
    const cardClick = () => {
        typeof(video.id)==='object'?setYoutubeId(video.id.videoId):setYoutubeId(video.id);
        console.log("여기서추가",channelId);
        setIdforChannel(channelId);
        typeof(video.id)==='object'?setIdforYoutube(video.id.videoId):setIdforYoutube(video.id);    
        navigate(`/videos/watch/${typeof(video.id)!=='object'?video.id:video.id.videoId}`);
    };

   return (
        <div>
            { type !=='related'?
            <div className={styles.card} onClick={cardClick}>
                <div className={styles.cardImg}style={{backgroundImage:"url("+`${thumbnails.medium.url}`+")"}}></div>
                <div className={styles.title}>{title} </div>
                <div>{channelTitle}</div>
                <div>{detailDate(new Date(publishedAt))}</div>
            </div>
            :
            <div className={styles.card2} onClick={cardClick}>
                <div className={styles.cardImg2}style={{backgroundImage:"url("+`${thumbnails.medium.url}`+")"}}></div>
                <div className={styles.cardInfo}>
                    <div className={styles.title}>{title} </div>
                    <div>{channelTitle}</div>
                    <div>{detailDate(new Date(publishedAt))}</div>
                </div>
                
        </div>}
        </div>
    );
};

export default VideoCard;