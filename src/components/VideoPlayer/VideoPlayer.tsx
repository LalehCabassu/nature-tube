import React, {useEffect, useState} from 'react';
import styles from './VideoPlayer.module.scss'
import {VideoPlayerProps, VideoPlayerState} from "./VideoPlayer.model";
import ReactPlayer from "react-player";
import {ElementSize} from "../../services/elementSize/elementSize.model";

export function VideoPlayer(props: VideoPlayerProps) {

    const _heightMargin = 180;
    const _widthMargin = 100;
    const [playerDimension, setPlayerDimension] = useState<VideoPlayerState>(createState);

    function updatePlayerDimension() {
        if (props.autoAdjustableSize) {
            setPlayerDimension(createState());
        }
    }

    useEffect(() => {
        if (props.autoAdjustableSize) {
            window.addEventListener('resize', updatePlayerDimension);
        }

        return () => {
            window.removeEventListener('resize', updatePlayerDimension);
        }
    },)

    function calculateHeight() {
        const height = document.documentElement.clientHeight;
        return height - _heightMargin;
    }

    function calculateWidth() {
        const width = document.body.clientWidth;
        return width - _widthMargin;
    }

    function createState() {
        let height, width;
        switch (props.size) {
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
                height = calculateHeight();
                width = calculateWidth();
                break;
        }
        return {
            playerHeight: height,
            playerWidth: width
        } as VideoPlayerState;
    }

    return (
        <div className={styles.Main}>
            <ReactPlayer className={styles.Player}
                         url={props.uri}
                         height={playerDimension.playerHeight}
                         width={playerDimension.playerWidth}
                         controls
                         playing={props.autoPlay ?? false}
                         loop
                         muted
            />
        </div>
    );
}