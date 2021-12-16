const UNTITLED = 'Untitled';

export enum Tab {
    Uri,
    DragNDrop
}

export interface AddState {
    tab: Tab;
    collection: Collection;
    error: boolean;
}

export class Collection {
    title?: string;
    videos: Video[];

    constructor(title?: string) {
        this.title = title || UNTITLED;
        this.videos = [];
    }

    addVideo(video: Video) {
        this.videos.push(video);
    }
}

export class Video {
    title?: string;
    uri: string;

    constructor(title?: string) {
        this.title = title || UNTITLED;
        this.uri = '';
    }

    setTitle(title: string) {
        this.title = title || UNTITLED;
    }

    setUri(uri: string) {
        this.uri = uri;
    }
}