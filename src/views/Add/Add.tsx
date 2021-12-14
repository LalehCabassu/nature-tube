import React from 'react';
import styles from './Add.module.scss';
import TextInput from "../../components/TextInput/TextInput";
import {AddState, Collection, Tab, Video} from "./Add.model";
import {ElementSize} from "../../utils/ElementSize";
import Button from "../../components/Button/Button";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import {FormService} from "../../services/Form.service";
import CancelButton from "../../components/CancelButton/CancelButton";

class Add extends React.Component<any, AddState> {

    private readonly _uriTab = 'URI';
    private readonly _dragDropTab = 'Drag & Drop';
    private readonly _collectionInputDescription = 'Collection Title';
    private readonly _videoTitleInputDescription = 'Title';
    private readonly _uriInputDescription = 'URI';
    private readonly _addButtonLabel = 'Add';

    private collection?: Collection;
    private video?: Video;
    private videoTitleElement: React.ElementRef<any>;
    private videoUriElement: React.ElementRef<any>;

    private formService: FormService;

    constructor(props) {
        super(props);
        this.state = this.createState(Tab.Uri);
        this.videoTitleElement = React.createRef();
        this.videoUriElement = React.createRef();

        this.formService = FormService.Instance;

        this.handleCollectionTitle = this.handleCollectionTitle.bind(this);
        this.showUriTab = this.showUriTab.bind(this);
        this.showDragNDropTab = this.showDragNDropTab.bind(this);
        this.handleVideoTitle = this.handleVideoTitle.bind(this);
        this.handleVideoUri = this.handleVideoUri.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemoveVideo = this.handleRemoveVideo.bind(this);
    }

    createState(tab: Tab) {
        return {
            tab: tab
        } as AddState;
    }

    generatePreviewVideos() {
        const videoPlayers: JSX.Element[] = [];

        if(!this.state.collection || !this.state.collection?.videos) {
            return videoPlayers;
        }

        this.state.collection?.videos.forEach((video, index) => {
            const videoPlayer = (
                <div key={index} className={styles.VideoPreview}>
                    <span>
                        <p><strong>{video.title}</strong></p>
                        <CancelButton onClick={this.handleRemoveVideo}></CancelButton>
                    </span>
                    <VideoPlayer size={ElementSize.Small} uri={video.uri}/>
                </div>
            );
            videoPlayers.push(videoPlayer);
        });

        return videoPlayers;
    }

    handleAdd() {
        this.formService.startResetForm();
        this.updateCollection();
    }

    handleCollectionTitle(collectionTitle: string) {
        this.collection = new Collection(collectionTitle);
    }

    handleRemoveVideo(event) {
        console.log(event)
    }

    handleVideoTitle(videoTitle: string) {
        this.video = new Video(videoTitle);
        this.collection?.addVideo(this.video);
    }

    handleVideoUri(videoUri: string) {
        this.video?.setUri(videoUri);
    }

    showUriTab() {
        this.updateTab(Tab.Uri);
    }

    showDragNDropTab() {
        this.updateTab(Tab.DragNDrop);
    }

    updateCollection() {
        this.setState(
            {
                tab: this.state.tab,
                collection: this.collection
            } as AddState);
    }

    updateTab(tab: Tab) {
        this.setState(
            {
                tab: tab,
                collection: this.state.collection
            } as AddState);
    }

    render() {
        const uriTabClassName = this.state.tab === Tab.Uri ? styles.Show : '';
        const dragNDropTabClassName = this.state.tab === Tab.DragNDrop ? styles.Show : '';

        const uriContentClassNames = this.state.tab === Tab.Uri ? `${styles.Show} ${styles.TabContent}` : styles.Hide;
        const dragNDropContentClassNames = this.state.tab === Tab.DragNDrop ? `${styles.Show} ${styles.TabContent}` : styles.Hide;

        return (
            <div className={styles.Add}>
                <h2>Add a new collection</h2>
                <div className={styles.Title}>
                    <TextInput
                        description={this._collectionInputDescription}
                        size={ElementSize.Medium}
                        onInputChange={this.handleCollectionTitle}
                    />
                </div>
                <div className={styles.Tab}>
                    <div className={styles.TabHeader}>
                        <span
                            className={uriTabClassName}
                            onClick={this.showUriTab}
                        >
                            {this._uriTab}
                        </span>
                        <span
                            className={dragNDropTabClassName}
                            onClick={this.showDragNDropTab}
                        >
                            {this._dragDropTab}
                        </span>
                    </div>
                    <div className={uriContentClassNames}>
                        <div className={styles.SubSection}>
                            <h3>Video Previews</h3>
                            {this.generatePreviewVideos()}
                        </div>
                        <div className={styles.SubSection}>
                            <h3>New Video</h3>
                            <TextInput
                                description={this._videoTitleInputDescription}
                                size={ElementSize.Medium}
                                resetEnabled={true}
                                onInputChange={this.handleVideoTitle}
                            />
                            <TextInput
                                description={this._uriInputDescription}
                                size={ElementSize.Large}
                                resetEnabled={true}
                                onInputChange={this.handleVideoUri}
                            />
                            <div className={styles.AddButton}>
                                <Button
                                    label={this._addButtonLabel}
                                    size={ElementSize.Medium}
                                    onClick={this.handleAdd}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={dragNDropContentClassNames}>
                        <div>
                            {this._dragDropTab}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add;
