import {Collection} from "../../contexts/CollectionContext/CollectionContext.model";

export enum Tab {
    Uri,
    DragNDrop
}

export interface AddProps {
    onSave: (collection: Collection) => void;
}

export interface AddState {
    tab: Tab;
    collection: Collection;
    error: boolean;
    redirect: boolean;
}
