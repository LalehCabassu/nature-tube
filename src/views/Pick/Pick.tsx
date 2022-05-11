import React, {useEffect, useState} from 'react';
import styles from './Pick.module.scss';
import {CollectionService} from "../../services/collection/collection.service";
import {Collection} from "../../services/collection/collection.model";

export function Pick() {

    const [collections, setCollections] = useState<Collection[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);
    const collectionService = CollectionService.Instance;

    useEffect(() => {
        if (!collections.length) {
            collectionService.getAll().then((collections) => {
                setCollections(collections);
            }).finally(() => {
                setLoading(false);
            });
        }
    });

    return (isLoading ?
            <div className={styles.Pick} data-testid="Pick">
                Pick Component is loading
            </div> : <div><h1>Collections</h1>
                <div>{collections.map(collection => collection.title)}</div>
            </div>
    );
}
