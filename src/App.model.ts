import {CollectionContextModel} from "./contexts/CollectionContext/CollectionContext.model";

export const ROUTES = {
    home: '/',
    add: '/add',
    pick: '/pick',
    play: '/play',
    about: '/about'
}

export interface AppState {
    collectionContext: CollectionContextModel
}
