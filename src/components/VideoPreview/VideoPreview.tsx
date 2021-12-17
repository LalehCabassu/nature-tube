import React from 'react';
import styles from './VideoPreview.module.scss';
import RemoveButton from "../RemoveButton/RemoveButton";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import {VideoPreviewProps} from "./VideoPreview.model";

export class VideoPreview extends React.Component<VideoPreviewProps, any> {

    constructor(props) {
        super(props);
        this.onRemove = this.onRemove.bind(this);
    }

    onRemove() {
        this.props.onRemove(this.props.id);
    }

    render() {
        return (
            <div key={this.props.id} className={styles.VideoPreview}>
                <RemoveButton onClick={this.onRemove} />
                <span>
                        <p><strong>{this.props.title}</strong></p>
                        <VideoPlayer size={this.props.size} uri={this.props.uri}/>
                    </span>
            </div>
        );
    }
}

export default VideoPreview;
