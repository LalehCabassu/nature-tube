import React from 'react';
import styles from './VideoPreview.module.scss';
import {VideoPreviewProps} from "./VideoPreview.model";
import {RemoveButton} from "../RemoveButton/RemoveButton";
import {VideoPlayer} from "../VideoPlayer/VideoPlayer";

export function VideoPreview(props: VideoPreviewProps) {

    function onRemove() {
        props.onRemove(props.id);
    }

    return (
        <div key={props.id} className={styles.VideoPreview}>
            <RemoveButton onClick={onRemove}/>
            <span>
                <p><strong>{props.title}</strong></p>
                <VideoPlayer size={props.size} uri={props.uri}/>
            </span>
        </div>
    );
}
