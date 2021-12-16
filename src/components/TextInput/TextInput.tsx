import React from 'react';
import styles from './TextInput.module.scss';
import {TextInputProps, TextInputState} from "./TextInput.model";
import {v4 as uuidv4} from 'uuid';
import {getClassNames} from "../../utils/utils";
import {ElementSize} from "../../utils/ElementSize";
import {FormService} from "../../services/Form.service";

class TextInput extends React.Component<TextInputProps, TextInputState> {

    private readonly _uuid: string;
    private readonly textAreaRef;
    private readonly inputRef;

    private formService: FormService;

    constructor(props: TextInputProps) {
        super(props);
        this._uuid = uuidv4();
        this.textAreaRef = React.createRef<HTMLTextAreaElement>();
        this.inputRef = React.createRef<HTMLInputElement>();
        this.state = this.createState(false);

        this.formService = FormService.Instance;
        this.formService.resetForm.subscribe(value => {
            this.updateReset(value);
        });

        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    componentDidUpdate(prevProps: Readonly<TextInputProps>, prevState: Readonly<TextInputState>, snapshot?: any) {
        if (this.props.error !== prevProps.error) {
            this.setState(this.createState());
        }
    }

    createState(displayLabel?: boolean, error?: boolean) {
        return {
            displayLabel: displayLabel ?? this.state.displayLabel,
            error: error ?? this.props.error
        } as TextInputState;
    }

    getLabelClassNames() {
        const visibility = (this.state.displayLabel || this.state.error) ? styles.Display : styles.Hide;
        const color = this.state.error ? styles.Error : '';
        return `${visibility} ${color}`;
    }

    handleFocus() {
        this.setState(this.createState(true, false));
        this.formService.stopResetForm();
    }

    handleBlur(event) {
        const inputValue = event.target.value;
        this.props.onInputChange(inputValue);

        if (inputValue) {
            this.setState(this.createState(true, false));
        } else {
            this.setState(this.createState(false));
        }
    }

    updateReset(reset: boolean) {
        if (reset && this.props.resetEnabled) {
            if (this.textAreaRef.current) {
                this.textAreaRef.current.value = '';
            } else if (this.inputRef.current) {
                this.inputRef.current.value = '';
            }
            this.setState(this.createState(false));
        }
    }

    render() {
        const labelClassName = this.getLabelClassNames();
        const inputClassNames = `${getClassNames(styles.TextInput, styles, this.props.size)}`;
        const description = this.state.error ? this.props.errorMessage : this.props.description;
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
                <label htmlFor={this._uuid} className={labelClassName}>{description}</label>
                {inputElement}
            </div>
        );
    }
}

export default TextInput;
