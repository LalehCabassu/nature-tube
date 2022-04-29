import {ElementSize} from "../../services/elementSize/elementSize.model";

export interface VideoPlayerProps {
    uri: string;
    size?: ElementSize;
    autoAdjustableSize?: boolean;
    autoPlay?: boolean;
}

export interface VideoPlayerState {
    playerHeight: number | string;
    playerWidth: number | string;
}
