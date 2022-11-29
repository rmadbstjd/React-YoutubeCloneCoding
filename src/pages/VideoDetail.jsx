import React, {useState} from 'react';
import YouTube from 'react-youtube';
import styles from './css/VideoDetail.module.css'
import useStore from '../store';
import VideoInfo from '../components/VideoInfo';
import RelatedSide from '../components/RelatedSide';
import { useParams } from 'react-router-dom';
const VideoDetail = () => {
   const {id} = useParams();
   const {youtubeId} = useStore();
   const [width,setWidth] = useState(2000);

   const resizingHandler = () => {
    
    setWidth(window.innerWidth);
    
   }

   window.addEventListener("resize", resizingHandler);
    return (
        <div className={styles.box}>
            <div className={width>=1400?styles.container:styles.container2}>
                <div className={styles.desc}>
                    <YouTube className={styles.youtube}
                        videoId = {id}
                        opts={{
                        width: "700",
                        height: "470",
                        playerVars: {
                        autoplay: 0, //자동재생 1
                        rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                     modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                        },
                        }}>
                    </YouTube>
                     <VideoInfo className={styles.info}></VideoInfo>
                </div>
                <div>
                    <RelatedSide></RelatedSide>
                </div>
           
            </div>

        </div>
    );
};

export default VideoDetail;