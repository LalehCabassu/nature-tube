import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Collection} from "../../services/collection/collection.model";
import {CollectionService} from "../../services/collection/collection.service";

const collectionService = CollectionService.Instance;

export type CollectionsState = {
    value: Collection[]
};

export const collectionsSlice = createSlice({
    name: 'collections',
    initialState: {
        value: []
    } as CollectionsState,
    reducers: {
        add: (state, action: PayloadAction<Collection>) => {
            state.value.push(action.payload);
            collectionService.add(action.payload);
        },
        getAll: (state) => {
            collectionService.getAll().then((data) => state.value = data).catch(() => []);
        }
    }
});

export const {add, getAll} = collectionsSlice.actions;

export const selectCollections = (state): Collection[] => state.collections.value;

export default collectionsSlice.reducer;
