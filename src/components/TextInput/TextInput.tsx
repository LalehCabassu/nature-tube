import React, {useEffect, useState} from 'react';
import styles from './TextInput.module.scss';
import {TextInputProps} from "./TextInput.model";
import {v4 as uuidv4} from 'uuid';
import {getClassNames} from "../../services/elementSize/elementSize.service";
import {ElementSize} from "../../services/elementSize/elementSize.model";
import {FormService} from "../../services/form/form.service";

export function TextInput(props: TextInputProps) {

    const [displayLabel, setDisplayLabel] = useState<boolean>(false);
    const formService = FormService.Instance;

    const _uuid = uuidv4();
    const textAreaRef = React.createRef<HTMLTextAreaElement>();
    const inputRef = React.createRef<HTMLInputElement>();

    useEffect(() => {
        formService.resetForm.subscribe(value => {
            updateReset(value);
        });
    });

    function getLabelClassNames() {
        const visibility = (displayLabel || props.error) ? styles.Display : styles.Hide;
        const color = props.error ? styles.Error : '';
        return `${visibility} ${color}`;
    }

    function handleFocus() {
        setDisplayLabel(true);
        formService.stopResetForm();
    }

    function handleBlur(event) {
        const inputValue = event.target.value;
        props.onInputChange(inputValue);

        if (inputValue) {
            setDisplayLabel(true)
        } else {
            setDisplayLabel(false)
        }
    }

    function updateReset(reset: boolean) {
        if (reset && props.resetEnabled) {
            if (textAreaRef.current) {
                textAreaRef.current.value = '';
            } else if (inputRef.current) {
                inputRef.current.value = '';
            }
            setDisplayLabel(false)
        }
    }

    const labelClassName = getLabelClassNames();
    const inputClassNames = `${getClassNames(styles.TextInput, styles, props.size)}`;
    const description = props.error ? props.errorMessage : props.description;
    const inputElement = (props.size === ElementSize.Large) ?
        (<textarea
            ref={textAreaRef}
            name={_uuid}
            placeholder={props.description}
            onFocus={handleFocus}
            onBlur={handleBlur}
        >
            </textarea>) :
        (<input
            ref={inputRef}
            name={_uuid}
            type='text'
            required
            placeholder={props.description}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />);
    return (
        <div className={inputClassNames}>
            <label htmlFor={_uuid} className={labelClassName}>{description}</label>
            {inputElement}
        </div>
    );
}
