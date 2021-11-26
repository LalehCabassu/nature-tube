export enum TAB {
    uri,
    dragNDrop
}

export interface AddState {
    tab: TAB
}

export class Collection {
    title: string;
    videos: Video[];

    constructor(title: string) {
        this.title = title;
        this.videos = [];
    }

    addVideo(video: Video) {
        this.videos.push(video);
    }
}
export class Video {
    title: string;
    uri: string;

    constructor(title: string, uri: string) {
        this.title = title;
        this.uri = uri;
    }
}