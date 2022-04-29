import React from 'react';
import cancelIcon from "../../assets/images/trash-can.svg";
import {CancelButtonProps} from "./RemoveButton.model";
import {getClassNames} from "../../services/elementSize/elementSize.service";
import styles from './RemoveButton.module.scss';


export function RemoveButton(props: CancelButtonProps) {

    const _icon_alt = 'Remove the video';
    const classNames = getClassNames(styles.CancelButton, styles, props.size);
    return (
        <div className={classNames}>
            <button
                onClick={props.onClick}
            >
                <img alt={_icon_alt} src={cancelIcon}/>
            </button>
        </div>
    );

}
