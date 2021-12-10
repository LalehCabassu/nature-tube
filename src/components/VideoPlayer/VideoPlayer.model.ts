import {ElementSize} from "../../utils/ElementSize";

export interface VideoPlayerState {
    playerHeight: number | string;
    playerWidth: number | string;
}

export interface VideoPlayerProps {
    uri: string;
    size?: ElementSize;
    autoAdjustableSize?: boolean;
    autoPlay?: boolean;
}
