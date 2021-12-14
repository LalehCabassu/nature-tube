import React from 'react';
import cancelIcon from "../../assets/images/cancel-icon.svg";
import {CancelButtonProps} from "./CancelButton.model";
import {getClassNames} from "../../utils/utils";
import styles from './CancelButton.module.scss';


class CancelButton extends React.Component<CancelButtonProps, any> {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        this.props.onClick(event);
    }

    render() {
        const classNames = getClassNames(styles.CancelButton, styles, this.props.size);
        return (
            <div className={classNames} >
                <button
                    onClick={this.onClick}
                >
                    <img src={cancelIcon}/>
                </button>
            </div>
        );
    }
}

export default CancelButton;
