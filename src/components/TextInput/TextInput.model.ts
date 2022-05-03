import {ElementSize} from "../../services/elementSize/elementSize.model";

export type TextInputProps = {
    description: string;
    size?: ElementSize;
    error?: boolean;
    errorMessage?: string;
    resetEnabled?: boolean;
    onInputChange: (inputValue: string) => void;
}
