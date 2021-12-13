import React from 'react';
import styles from './TextInput.module.scss';
import {TextInputProps, TextInputState} from "./TextInput.model";
import {v4 as uuidv4} from 'uuid';
import {getClassNames} from "../../utils/utils";
import {ElementSize} from "../../utils/ElementSize";

class TextInput extends React.Component<TextInputProps, TextInputState> {

    private readonly _uuid: string;
    private readonly textAreaRef;
    private readonly inputRef;

    constructor(props: TextInputProps) {
        super(props);
        this._uuid = uuidv4();
        this.textAreaRef = React.createRef<HTMLTextAreaElement>();
        this.inputRef = React.createRef<HTMLInputElement>();
        this.state = this.createState(false);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    componentDidUpdate(prevProps: Readonly<TextInputProps>, prevState: Readonly<TextInputState>, snapshot?: any) {
        if (this.props.reset) {
            if (this.textAreaRef.current) {
                this.textAreaRef.current.value = '';
            } else if (this.inputRef.current) {
                this.inputRef.current.value = '';
            }
        }
    }

    createState(displayLabel?: boolean) {
        return {
            displayLabel: displayLabel ?? this.state.displayLabel,
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
        const inputElement = (this.props.size === ElementSize.Large) ?
            (<textarea
                ref={this.textAreaRef}
                name={this._uuid}
                placeholder={this.props.description}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
            >
            </textarea>) :
            (<input
                ref={this.inputRef}
                name={this._uuid}
                type='text'
                required
                placeholder={this.props.description}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
            />);
        return (
            <div className={inputClassNames}>
                <label htmlFor={this._uuid} className={labelClassName}>{this.props.description}</label>
                {inputElement}
            </div>
        );
    }
}

export default TextInput;
