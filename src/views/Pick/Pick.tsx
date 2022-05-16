import React from 'react';
import styles from './Pick.module.scss';
import {useGetCollectionsQuery} from "../../services/collection/collection.service";
import {useSelector} from "react-redux";
import {CollectionsState, collections} from "../../stores/collection/collectionsSlice";
import {Collection} from "../../services/collection/collection.model";

export function Pick() {

    const collectionsInState = useSelector<CollectionsState, Collection[]>(collections);
    const {data: collectionsFromApi, isLoading} = useGetCollectionsQuery();

    return (
        <div className={styles.Pick} data-testid="Pick">
            <h1>Collections</h1>
            <h2>From API</h2>
            {isLoading ? <div>Loading...</div> : collectionsFromApi?.map(collection => {
                return <div>{collection.title} </div>;
            })}
            <h2>In State</h2>
            {collectionsInState.map(collection => {
                return <div>{collection.title} </div>;
            })}
        </div>
    );
}
