import {ElementSize} from "../../services/elementSize/elementSize.model";

export type VideoPlayerProps = {
    uri: string;
    size?: ElementSize;
    autoAdjustableSize?: boolean;
    autoPlay?: boolean;
}

export type VideoPlayerState = {
    playerHeight: number | string;
    playerWidth: number | string;
}
