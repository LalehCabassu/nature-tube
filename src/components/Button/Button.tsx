import React from 'react';
import {ButtonProps} from "./Button.model";
import {getClassNames} from "../../utils/utils";
import styles from './Button.module.scss';


class Button extends React.Component<ButtonProps, any> {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClick();
    }

    render() {
        const classNames = getClassNames(styles.Button, styles, this.props.size);
        return (
            <div className={classNames} >
                <button
                    onClick={this.onClick}
                >
                    {this.props.label}
                </button>
            </div>
        );
    }
}

export default Button;
