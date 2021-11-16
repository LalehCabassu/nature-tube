import React from 'react';
import styles from './Add.module.scss';

class Add extends React.Component<any, any> {

    render() {
        return (
            <div className={styles.Add} data-testid="Add">
                Add Component
            </div>
        );
    }
}

export default Add;
