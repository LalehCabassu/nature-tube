import React from 'react';
import styles from './Add.module.scss';

class Add extends React.Component<any, any> {

    render() {
        return (
            <div className={styles.Add} data-testid="Add">
                <h2>Add a new collection</h2>
                <div className={styles.Title}>
                    <label className={styles.CustomField}>
                        <span>Collection Name</span>
                        <input type='text' required />
                    </label>

                </div>
            </div>
        );
    }
}

export default Add;
