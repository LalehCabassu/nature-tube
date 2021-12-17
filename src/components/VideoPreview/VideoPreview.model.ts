import {ElementSize} from "../../utils/ElementSize";

export interface VideoPreviewProps {
    id: string;
    title: string;
    uri: string;
    size: ElementSize;
    onRemove: (id: string) => void;
}