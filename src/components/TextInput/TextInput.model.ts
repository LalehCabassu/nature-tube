import {ElementSize} from "../../utils/ElementSize";

export interface TextInputProps {
    description: string;
    size?: ElementSize;
    onInputChange: (inputValue: string) => void;
}

export interface TextInputState {
    displayLabel: boolean;
}