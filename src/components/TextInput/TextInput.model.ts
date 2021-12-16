import {ElementSize} from "../../utils/ElementSize";

export interface TextInputProps {
    description: string;
    size?: ElementSize;
    error?: boolean;
    errorMessage?: string;
    resetEnabled?: boolean;
    onInputChange: (inputValue: string) => void;
}

export interface TextInputState {
    displayLabel: boolean;
    error: boolean;
}