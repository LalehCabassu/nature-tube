import {ElementSize} from "../../services/elementSize/elementSize.model";

export type ButtonProps = {
    label: string;
    size?: ElementSize;
    onClick: () => void;
}
