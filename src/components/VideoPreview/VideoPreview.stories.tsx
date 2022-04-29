/* eslint-disable */
import VideoPreview from './VideoPreview';
import {ElementSize} from "../../utils/ElementSize";

export default {
    title: "VideoPreview",
};

export const Default = () => <VideoPreview id='' size={ElementSize.Small} uri='' title='' onRemove={() => {
}}/>;

Default.story = {
    name: 'default',
};
