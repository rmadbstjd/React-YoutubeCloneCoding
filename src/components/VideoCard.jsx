import React from 'react';
import styles from './css/VideoCard.module.css';
import detailDate from '../util/date';
const VideoCard = ({video}) => {
    const {title,thumbnails,publishedAt,channelTitle} = video.snippet;

   return (
        <div className={styles.card} >
            <div className={styles.cardImg}style={{backgroundImage:"url("+`${thumbnails.medium.url}`+")"}}></div>
            <div>{title} </div>
            <div>{channelTitle}</div>
            <div>{detailDate(new Date(publishedAt))}</div>
        </div>
    );
};

export default VideoCard;