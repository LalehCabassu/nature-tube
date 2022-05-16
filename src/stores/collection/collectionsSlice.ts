import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Collection} from "../../services/collection/collection.model";

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
        }
    }
});

export const {add} = collectionsSlice.actions;

export const collections = (state): Collection[] => state.collections.value;

export default collectionsSlice.reducer;
