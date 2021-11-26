import React from 'react';
import styles from './VideoPlayer.module.scss'
import {VideoPlayerProps, VideoPlayerState} from "./VideoPlayer.model";
import ReactPlayer from "react-player";

class VideoPlayer extends React.Component<VideoPlayerProps, VideoPlayerState> {

    private readonly _heightMargin = 180;
    private readonly _widthMargin = 100;

    constructor(props: VideoPlayerProps) {
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
                <ReactPlayer className={styles.Player}
                             url={this.props.uri}
                             height={this.state.playerHeight}
                             width={this.state.playerWidth}
                             controls
                             playing
                             loop
                             muted
                />
            </div>
        );
    }
}

export default VideoPlayer;
