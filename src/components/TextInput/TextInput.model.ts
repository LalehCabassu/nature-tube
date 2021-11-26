export interface TextInputProps {
    description: string;
    name: string;
    onInputChange: (inputValue: string) => void;
}

export interface TextInputState {
    displayLabel: boolean;
}