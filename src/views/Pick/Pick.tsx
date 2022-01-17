import React from 'react';
import styles from './Pick.module.scss';
import {CollectionContext} from "../../contexts/CollectionContext/CollectionContext";

class Pick extends React.Component<any, any> {

    render() {
        const collectionTitles =
            this.context.collections.map((collection, index) => (<p key={index}> {collection.title} </p>));
        return (
            <div className={styles.Pick} data-testid="Pick">
                Pick Component
                {collectionTitles}
            </div>
        );
    }
}

Pick.contextType = CollectionContext;

export default Pick;
