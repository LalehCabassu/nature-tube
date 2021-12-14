import {ElementSize} from "../../utils/ElementSize";

export interface CancelButtonProps {
    size?: ElementSize;
    onClick: (index: number) => void;
}
