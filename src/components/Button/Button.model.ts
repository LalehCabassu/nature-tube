import {ElementSize} from "../../utils/ElementSize";

export interface ButtonProps {
    label: string;
    size?: ElementSize;
    onClick: () => void;
}
