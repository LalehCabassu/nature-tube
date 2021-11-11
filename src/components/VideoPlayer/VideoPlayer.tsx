import React from 'react';
import styles from './VideoPlayer.module.scss'
import {VideoPlayerState} from "./VideoPlayer.model";

class VideoPlayer extends React.Component<any, VideoPlayerState> {

    private readonly _heightMargin = 110;
    private readonly _widthMargin = 100;

    constructor(props: any) {
        super(props);
        this.state = this.createState();
        this.setPlayerDimension();
    }

    componentDidMount() {
        window.addEventListener('resize', this.setPlayerDimension);
    }

    calculateHeight() {
        const height = document.documentElement.clientHeight;
        return height - this._heightMargin;
    }

    calculateWidth() {
        const width = document.body.clientWidth;
        return width - this._widthMargin;
    }

    createState() {
        return {
            playerHeight: this.calculateHeight(),
            playerWidth: this.calculateWidth()
        };
    }

    setPlayerDimension = () => {
        this.setState(this.createState());
    }

    render() {
        return (
            <div className={styles.Main}>
                <video
                    className="video-js"
                    controls
                    preload="auto"
                    poster="https://asc-csa.gc.ca/images/recherche/hi-res/fe3dcb35-bf4a-4f05-bd73-508b3974b6b8.jpg"
                    data-setup="{}"
                    height={this.state.playerHeight}
                    width={this.state.playerWidth}
                >
                    <source
                        src="http://data.phys.ucalgary.ca/sort_by_project/AuroraMAX/rt-movies/mp4/2021/11/04/auroramaxHD_20211104_720p.mp4"
                        type="video/mp4"/>
                </video>
            </div>
        );
    }
}

export default VideoPlayer;
