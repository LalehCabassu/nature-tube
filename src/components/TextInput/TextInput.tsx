import React from 'react';
import styles from './TextInput.module.scss';
import {TextInputProps, TextInputState} from "./TextInput.model";
import { v4 as uuidv4 } from 'uuid';
import {getClassNames} from "../../utils/utils";

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
        const inputClassNames = getClassNames(styles.TextInput, styles, this.props.size);
        return (
            <div className={inputClassNames}>
                <label htmlFor={this._uuid} className={labelClassName}>{this.props.description}</label>
                <input
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
