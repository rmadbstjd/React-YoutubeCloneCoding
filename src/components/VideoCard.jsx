import React from 'react';
import styles from './css/VideoCard.module.css';
import detailDate from '../util/date';
import useStore from '../store';
import {useNavigate} from 'react-router-dom';
const VideoCard = ({video,type}) => {
    const navigate = useNavigate();
    const {title,thumbnails,publishedAt,channelTitle} = video.snippet;
    const {setYoutubeId} = useStore();
    const cardClick = () => {
        setYoutubeId(video.id);
        navigate(`/videos/watch/${video.id}`);
    };
    console.log("뭐나오냐",thumbnails.medium.url)
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
                <div className={styles.cardImg}style={{backgroundImage:"url("+`${thumbnails.medium.url}`+")"}}></div>
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