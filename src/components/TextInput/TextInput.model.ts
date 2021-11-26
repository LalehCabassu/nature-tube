export enum InputSize {
    Small = 'Small',
    Medium = 'Medium',
    Large = 'Large'
}
export interface TextInputProps {
    description: string;
    size?: InputSize;
    onInputChange: (inputValue: string) => void;
}

export interface TextInputState {
    displayLabel: boolean;
}