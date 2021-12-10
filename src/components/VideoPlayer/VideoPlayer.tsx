import React from 'react';
import styles from './VideoPlayer.module.scss'
import {VideoPlayerProps, VideoPlayerState} from "./VideoPlayer.model";
import ReactPlayer from "react-player";
import {ElementSize} from "../../utils/ElementSize";

class VideoPlayer extends React.Component<VideoPlayerProps, VideoPlayerState> {

    private readonly _heightMargin = 180;
    private readonly _widthMargin = 100;

    constructor(props: VideoPlayerProps) {
        super(props);
        this.state = this.createState();
        this.setPlayerDimension();
    }

    componentDidMount() {
        if (this.props.autoAdjustableSize) {
            window.addEventListener('resize', this.setPlayerDimension);
        }
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
        let height, width;
        switch (this.props.size) {
            case ElementSize.Small:
                height = '50%';
                width = '50%';
                break;
            case ElementSize.Medium:
                height = '80%';
                width = '80%';
                break;
            case ElementSize.Large:
                height = '100%';
                width = '100%';
                break;
            default:
                height = this.calculateHeight();
                width = this.calculateWidth();
                break;
        }
        return {
            playerHeight: height,
            playerWidth: width
        };
    }

    setPlayerDimension = () => {
        if (this.props.autoAdjustableSize) {
            this.setState(this.createState());
        }
    }

    render() {
        return (
            <div className={styles.Main}>
                <ReactPlayer className={styles.Player}
                             url={this.props.uri}
                             height={this.state.playerHeight}
                             width={this.state.playerWidth}
                             controls
                             playing={this.props.autoPlay ?? false}
                             loop
                             muted
                />
            </div>
        );
    }
}

export default VideoPlayer;
