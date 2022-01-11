import React from 'react';
import styles from './Pick.module.scss';
import {CollectionContext} from "../../contexts/CollectionContext/CollectionContext";

class Pick extends React.Component<any, any> {

    render() {
        console.log(this.context.collections)
        return (
            <div className={styles.Pick} data-testid="Pick">
                Pick Component
            </div>
        );
    }
}

Pick.contextType = CollectionContext;

export default Pick;
