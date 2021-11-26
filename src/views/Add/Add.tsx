import React from 'react';
import styles from './Add.module.scss';
import TextInput from "../../components/TextInput/TextInput";
import {AddState, Collection, Tab, Video} from "./Add.model";
import {InputSize} from "../../components/TextInput/TextInput.model";

class Add extends React.Component<any, AddState> {

    private readonly _collectionInputDescription = 'Collection Title';
    private readonly _videoTitleInputDescription = 'Title';
    private readonly _uriInputDescription = 'URI';

    private collection?: Collection;
    private video?: Video;

    constructor(props) {
        super(props);
        this.state = this.createState(Tab.Uri);
        this.handleCollectionTitle = this.handleCollectionTitle.bind(this);
        this.showUriTab = this.showUriTab.bind(this);
        this.showDragNDropTab = this.showDragNDropTab.bind(this);
        this.handleVideoTitle = this.handleVideoTitle.bind(this);
        this.handleVideoUri = this.handleVideoUri.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    createState(tab: Tab) {
        return {
            tab: tab
        } as AddState;
    }

    handleAdd() {
        console.log(this.collection);
    }

    handleCollectionTitle(collectionTitle: string) {
        this.collection = new Collection(collectionTitle);
    }

    handleVideoTitle(videoTitle: string) {
        this.video = new Video(videoTitle);
        this.collection?.addVideo(this.video);
    }

    handleVideoUri(videoUri: string) {
        this.video?.setUri(videoUri);
    }

    showUriTab() {
        this.setState(this.createState(Tab.Uri));
    }

    showDragNDropTab() {
        this.setState(this.createState(Tab.DragNDrop));
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
                        size={InputSize.Medium}
                        onInputChange={this.handleCollectionTitle}
                    />
                </div>
                <div className={styles.Tab}>
                    <div className={styles.TabHeader}>
                        <span className={uriTabClassName} onClick={this.showUriTab}>URI</span>
                        <span className={dragNDropTabClassName} onClick={this.showDragNDropTab}>Drag & Drop</span>
                    </div>
                    <div className={uriContentClassNames}>
                        <TextInput
                            description={this._videoTitleInputDescription}
                            size={InputSize.Medium}
                            onInputChange={this.handleVideoTitle}
                        />
                        <TextInput
                            description={this._uriInputDescription}
                            size={InputSize.Large}
                            onInputChange={this.handleVideoUri}
                        />
                        <button onClick={this.handleAdd}>Add</button>
                    </div>
                    <div className={dragNDropContentClassNames}>
                        <div>
                            Drag & Drop
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add;
