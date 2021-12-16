import React from 'react';
import cancelIcon from "../../assets/images/trash-can.svg";
import {CancelButtonProps} from "./RemoveButton.model";
import {getClassNames} from "../../utils/utils";
import styles from './RemoveButton.module.scss';


class RemoveButton extends React.Component<CancelButtonProps, any> {

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

export default RemoveButton;
