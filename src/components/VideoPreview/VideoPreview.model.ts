import {ElementSize} from "../../services/elementSize/elementSize.model";

export interface VideoPreviewProps {
    id: string;
    title: string;
    uri: string;
    size: ElementSize;
    onRemove: (id: string) => void;
}