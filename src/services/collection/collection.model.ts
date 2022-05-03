const UNTITLED = 'Untitled';

export class Collection {
    title?: string;
    videos: Video[];

    constructor(title?: string) {
        this.title = title || UNTITLED;
        this.videos = [];
    }
}

export class Video {
    title: string;
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