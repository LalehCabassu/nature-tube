import React from 'react';
import {ButtonProps} from "./Button.model";
import {getClassNames} from "../../services/elementSize/elementSize.service";
import styles from './Button.module.scss';

export function Button(props: ButtonProps) {

    const classNames = getClassNames(styles.Button, styles, props.size);

    return (
        <div className={classNames}>
            <button
                type="submit"
                onClick={props.onClick}
            >
                {props.label}
            </button>
        </div>
    );
}
