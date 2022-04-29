import React, {useState} from 'react';
import styles from './Add.module.scss';
import {Tab} from "./Add.model";
import {ElementSize} from "../../services/elementSize/elementSize.model";
import {FormService} from "../../services/form/form.service";
import {ROUTES} from "../../App.model";
import {Redirect} from "react-router-dom";
import {CollectionService} from "../../services/collection/collection.service";
import {VideoPreview} from "../../components/VideoPreview/VideoPreview";
import {TextInput} from "../../components/TextInput/TextInput";
import {Button} from "../../components/Button/Button";
import {Collection, Video} from "../../services/collection/collection.model";

export function Add() {

    const _uriTab = 'URI';
    const _dragDropTab = 'Drag & Drop';
    const _collectionInputDescription = 'Collection Title';
    const _videoTitleInputDescription = 'Title';
    const _uriInputDescription = 'URI';
    const _uriInputErrorMessage = 'Forgot uri ;)';
    const _addButtonLabel = 'Add';
    const _saveButtonLabel = 'Save';

    const formService = FormService.Instance;
    const collectionService = CollectionService.Instance;
    const collection = new Collection();

    const [tab, setTab] = useState<Tab>(Tab.Uri);
    const [error, setError] = useState<boolean>(false);
    const [redirect, setRedirect] = useState<boolean>(false);
    const [videos, setVideos] = useState<Video[]>([]);
    const [video, setVideo] = useState<Video>(new Video());

    function generatePreviewVideos() {
        const videoPlayers: JSX.Element[] = [];

        if (!videos) {
            return videoPlayers;
        }

        videos.forEach((video, index) => {
            const videoPlayer = (
                <VideoPreview key={index} id={`${index}`} title={video.title} uri={video.uri} size={ElementSize.Small}
                              onRemove={handleRemoveVideo}/>
            );
            videoPlayers.push(videoPlayer);
        });

        return videoPlayers;
    }

    function handleAdd() {
        const isValid = validateNewVideo();
        if (isValid) {
            videos.push(video);
            setVideos(videos);
            resetForm();
        }
        setError(!isValid);
    }

    function handleCollectionTitle(collectionTitle: string) {
        collection.title = collectionTitle;
    }

    function handleSave() {
        collection.videos = videos;
        collectionService.add(collection);
        setRedirect(true);
    }

    function handleRemoveVideo(videoIndexToRemove ?: string) {
        if (!videoIndexToRemove) {
            return;
        }

        setVideos(videos.filter((video, index) => index !== parseInt(videoIndexToRemove)));
    }

    function handleVideoTitle(videoTitle: string) {
        video?.setTitle(videoTitle);
    }

    function handleVideoUri(videoUri: string) {
        video?.setUri(videoUri);
    }

    function resetForm() {
        formService.startResetForm();
        setVideo(new Video());
    }

    function showUriTab() {
        setTab(Tab.Uri);
    }

    function showDragNDropTab() {
        setTab(Tab.DragNDrop);
    }

    function validateNewVideo(): boolean {
        return !!video.uri;
    }

    const uriTabClassName = tab === Tab.Uri ? styles.Show : '';
    const dragNDropTabClassName = tab === Tab.DragNDrop ? styles.Show : '';

    const uriContentClassNames = tab === Tab.Uri ? `${styles.Show} ${styles.TabContent}` : styles.Hide;
    const dragNDropContentClassNames = tab === Tab.DragNDrop ? `${styles.Show} ${styles.TabContent}` : styles.Hide;

    const contentToRender = (
        <div className={styles.Add}>
            <h1>Add a new collection</h1>
            <div className={styles.Title}>
                <TextInput
                    description={_collectionInputDescription}
                    size={ElementSize.Medium}
                    onInputChange={handleCollectionTitle}
                />
            </div>
            <div className={styles.Tab}>
                <div className={styles.TabHeader}>
                    <span
                        className={uriTabClassName}
                        onClick={showUriTab}
                    >
                        {_uriTab}
                    </span>
                    <span
                        className={dragNDropTabClassName}
                        onClick={showDragNDropTab}
                    >
                        {_dragDropTab}
                    </span>
                </div>
                <div className={uriContentClassNames}>
                    <div className={styles.SubSection}>
                        <h2>New Video</h2>
                        <TextInput
                            description={_videoTitleInputDescription}
                            size={ElementSize.Medium}
                            resetEnabled={true}
                            onInputChange={handleVideoTitle}
                        />
                        <TextInput
                            description={_uriInputDescription}
                            size={ElementSize.Large}
                            error={error}
                            errorMessage={_uriInputErrorMessage}
                            resetEnabled={true}
                            onInputChange={handleVideoUri}
                        />
                        <div className={styles.AddButton}>
                            <Button
                                label={_addButtonLabel}
                                size={ElementSize.Medium}
                                onClick={handleAdd}
                            />
                        </div>
                    </div>
                    <div className={styles.SubSection}>
                        <h2>Video Previews</h2>
                        {generatePreviewVideos()}
                    </div>
                </div>
                <div className={dragNDropContentClassNames}>
                    <div>
                        {_dragDropTab}
                    </div>
                </div>
            </div>
            <div className={styles.SaveButton}>
                <Button
                    label={_saveButtonLabel}
                    size={ElementSize.Medium}
                    onClick={handleSave}
                />
            </div>
        </div>
    );

    return redirect ? <Redirect to={ROUTES.pick}/> : contentToRender;

}
