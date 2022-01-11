import React from 'react';
import styles from './Add.module.scss';
import TextInput from "../../components/TextInput/TextInput";
import {AddProps, AddState, Tab} from "./Add.model";
import {ElementSize} from "../../utils/ElementSize";
import Button from "../../components/Button/Button";
import {FormService} from "../../services/Form.service";
import VideoPreview from "../../components/VideoPreview/VideoPreview";
import {Collection, Video} from "../../contexts/CollectionContext/CollectionContext.model";

class Add extends React.Component<AddProps, AddState> {

    private readonly _uriTab = 'URI';
    private readonly _dragDropTab = 'Drag & Drop';
    private readonly _collectionInputDescription = 'Collection Title';
    private readonly _videoTitleInputDescription = 'Title';
    private readonly _uriInputDescription = 'URI';
    private readonly _uriInputErrorMessage = 'Forgot uri ;)';
    private readonly _addButtonLabel = 'Add';
    private readonly _saveButtonLabel = 'Save';

    private collection: Collection;
    private video: Video;
    private videoTitleElement: React.ElementRef<any>;
    private videoUriElement: React.ElementRef<any>;

    private formService: FormService;

    constructor(props) {
        super(props);

        this.collection = new Collection();
        this.video = new Video();

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
        this.handleSave = this.handleSave.bind(this);
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
                <VideoPreview key={index} id={`${index}`} title={video.title} uri={video.uri} size={ElementSize.Small} onRemove={this.handleRemoveVideo} />
            );
            videoPlayers.push(videoPlayer);
        });

        return videoPlayers;
    }

    handleAdd() {
        const isValid = this.validateNewVideo();
        if (isValid) {
            this.collection?.addVideo(this.video);
            this.updateCollection(!isValid);
            this.resetForm();
        } else {
            this.setError(!isValid);
        }
    }

    handleCollectionTitle(collectionTitle: string) {
        this.collection = new Collection(collectionTitle);
    }

    handleSave() {
        this.props.onSave(this.collection);
    }

    handleRemoveVideo(videoIndexToRemove?: string) {
        if (!videoIndexToRemove) {
            return;
        }

        this.collection.videos =
            this.collection.videos.filter((video, index) => index!== parseInt(videoIndexToRemove));

        this.updateCollection(false);
    }

    handleVideoTitle(videoTitle: string) {
        this.video?.setTitle(videoTitle);
    }

    handleVideoUri(videoUri: string) {
        this.video?.setUri(videoUri);
    }

    resetForm() {
        this.formService.startResetForm();
        this.video = new Video();
    }

    setError(error: boolean) {
        this.setState(
            {
                tab: this.state.tab,
                collection: this.state.collection,
                error: error
            } as AddState);
    }

    showUriTab() {
        this.updateTab(Tab.Uri);
    }

    showDragNDropTab() {
        this.updateTab(Tab.DragNDrop);
    }

    validateNewVideo(): boolean {
        return !!this.video.uri;
    }

    updateCollection(error) {
        this.setState(
            {
                tab: this.state.tab,
                collection: this.collection,
                error: error
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
                    <div className={styles.AddButton}>
                        <Button
                            label={this._saveButtonLabel}
                            size={ElementSize.Medium}
                            onClick={this.handleSave}
                        />
                    </div>
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
                                error={this.state.error}
                                errorMessage={this._uriInputErrorMessage}
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
