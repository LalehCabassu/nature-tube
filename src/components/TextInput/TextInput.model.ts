import {ElementSize} from "../../utils/ElementSize";

export interface TextInputProps {
    description: string;
    size?: ElementSize;
    reset?: boolean;
    onInputChange: (inputValue: string) => void;
}

export interface TextInputState {
    displayLabel: boolean;
    reset: boolean;
}