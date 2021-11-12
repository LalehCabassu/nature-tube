import logo from './assets/images/aurora-borealis.png';
import styles from './App.module.scss';
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import React from "react";

class App extends React.Component {

    private readonly _title = "NatureTube";

    render() {
        const sourceUri = "http://data.phys.ucalgary.ca/sort_by_project/AuroraMAX/rt-movies/mp4/2021/11/04/auroramaxHD_20211104_720p.mp4";
        // const sourceUri = "videos/20211010_155936.mp4";
        // const sourceUri = "https://www.youtube.com/watch?v=fk5PWZIATvU";
        return (
            <div className={styles.App}>
                <header className={styles.AppHeader}>
                    <img src={logo} alt={this._title}/>
                    <div>{this._title}</div>
                </header>
                <div className={styles.AppContent}>
                    <VideoPlayer uri={sourceUri} />
                </div>
            </div>
        );
    }
}

export default App;
