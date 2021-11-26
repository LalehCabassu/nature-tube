import React from 'react';
import styles from './TextInput.module.scss';
import {TextInputProps, TextInputState} from "./TextInput.model";

class TextInput extends React.Component<TextInputProps, TextInputState> {

    constructor(props: TextInputProps) {
        super(props);
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
        return (
            <div className={styles.TextInput}>
                <label htmlFor={this.props.name} className={labelClassName}>{this.props.description}</label>
                <input
                    name={this.props.name}
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
