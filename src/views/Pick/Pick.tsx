import React, {useEffect, useState} from 'react';
import styles from './Pick.module.scss';
import {Collection} from "../../services/collection/collection.model";
import {useDispatch, useSelector} from "react-redux";
import {CollectionsState, getAll, selectCollections} from "../../stores/collection/collectionsSlice";

export function Pick() {

    const [collections, setCollections] = useState<Collection[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);
    const dispatch = useDispatch();

    const collectionsState = useSelector<CollectionsState, Collection[]>(selectCollections);

    useEffect(() => {
        if (!collections.length) {
            dispatch(getAll());
            setCollections(collectionsState);
            setLoading(false);
        }
    }, collectionsState);

    return (isLoading ?
            <div className={styles.Pick} data-testid="Pick">
                Pick Component is loading
            </div> : <div><h1>Collections</h1>
                {collections.map(collection => {
                    return <div>{collection.title} </div>;
                })}
            </div>
    );
}
