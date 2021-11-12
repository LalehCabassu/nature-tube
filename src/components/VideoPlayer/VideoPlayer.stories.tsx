/* eslint-disable */
import VideoPlayer from './VideoPlayer';
import React from "react";

export default {
    title: "TestComponent",
};

const uri = "http://data.phys.ucalgary.ca/sort_by_project/AuroraMAX/rt-movies/mp4/2021/11/04/auroramaxHD_20211104_720p.mp4";

export const Default = () => <VideoPlayer uri={uri} />;

Default.story = {
    name: 'default',
};
