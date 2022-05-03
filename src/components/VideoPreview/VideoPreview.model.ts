import {ElementSize} from "../../services/elementSize/elementSize.model";

export type VideoPreviewProps = {
    id: string;
    title: string;
    uri: string;
    size: ElementSize;
    onRemove: (id: string) => void;
}