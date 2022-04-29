import React from 'react';
import cancelIcon from "../../assets/images/trash-can.svg";
import {CancelButtonProps} from "./RemoveButton.model";
import {getClassNames} from "../../utils/utils";
import styles from './RemoveButton.module.scss';


class RemoveButton extends React.Component<CancelButtonProps, any> {

    private readonly _icon_alt = 'Remove the video';

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClick();
    }

    render() {
        const classNames = getClassNames(styles.CancelButton, styles, this.props.size);
        return (
            <div className={classNames}>
                <button
                    onClick={this.onClick}
                >
                    <img alt={this._icon_alt} src={cancelIcon}/>
                </button>
            </div>
        );
    }
}

export default RemoveButton;
