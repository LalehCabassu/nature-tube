import React from 'react';
import styles from './TextInput.module.scss';
import {InputSize, TextInputProps, TextInputState} from "./TextInput.model";
import { v4 as uuidv4 } from 'uuid';

class TextInput extends React.Component<TextInputProps, TextInputState> {

    private readonly _uuid: string;

    constructor(props: TextInputProps) {
        super(props);
        this._uuid = uuidv4();
        this.state = this.createState(false);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    createState(displayLabel: boolean) {
        return {
            displayLabel: displayLabel
        } as TextInputState;
    }

    getInputClassName() {
        switch (this.props.size) {
            case InputSize.Small:
                return styles.Small;
            case InputSize.Medium:
                return styles.Medium;
            case InputSize.Large:
                return styles.Large;
            default:
                return styles.Medium;
        }
    }

    handleFocus() {
        this.setState(this.createState(true));
    }

    handleBlur(event) {
        const inputValue = event.target.value;
        if (inputValue) {
            this.setState(this.createState(true));
            this.props.onInputChange(inputValue);
        } else {
            this.setState(this.createState(false));
        }
    }

    render() {
        const labelClassName = (this.state.displayLabel) ? styles.Display : styles.Hide;
        const inputClassName = this.getInputClassName();
        return (
            <div className={styles.TextInput}>
                <label htmlFor={this._uuid} className={labelClassName}>{this.props.description}</label>
                <input
                    className={inputClassName}
                    name={this._uuid}
                    type='text'
                    required
                    placeholder={this.props.description}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
            </div>
        );
    }
}

export default TextInput;
