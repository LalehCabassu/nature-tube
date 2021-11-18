import React from 'react';
import styles from './Home.module.scss';
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

class Home extends React.Component<any, any> {

    render() {
        const now = new Date();
        const extractedDate = now.toISOString().substring(0, 10).split('-');
        const year = extractedDate[0];
        const month = extractedDate[1];
        const day = `${parseInt(extractedDate[2]) - 1}`;
        const sourceUri = `http://data.phys.ucalgary.ca/sort_by_project/AuroraMAX/rt-movies/mp4/${year}/${month}/${day}/auroramaxHD_${year}${month}${day}_1080p.mp4`;
        // const sourceUri = "http://data.phys.ucalgary.ca/sort_by_project/AuroraMAX/rt-movies/mp4/2021/11/04/auroramaxHD_20211104_720p.mp4";
        // const sourceUri = "videos/20211010_155936.mp4";
        // const sourceUri = "https://www.youtube.com/watch?v=fk5PWZIATvU";

        return (
            <div className={styles.Home} >
                <VideoPlayer uri={sourceUri} />
            </div>
        );
    }

}

export default Home;
