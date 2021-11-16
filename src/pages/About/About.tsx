import React from 'react';
import styles from './About.module.scss';

class About extends React.Component<any, any> {

    render() {
        return (
            <div className={styles.About} data-testid="About">
                About Component
            </div>
        );
    }
}

export default About;
