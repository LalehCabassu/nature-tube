import React from 'react';
import styles from './Pick.module.scss';

class Pick extends React.Component<any, any> {

    render() {
        return (
            <div className={styles.Pick} data-testid="Pick">
                Pick Component
            </div>
        );
    }
}

export default Pick;
