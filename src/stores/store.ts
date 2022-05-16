import {configureStore} from "@reduxjs/toolkit";
import {collectionApi} from "../services/collection/collection.service";
import {setupListeners} from "@reduxjs/toolkit/query";
import {collectionsSlice} from "./collection/collectionsSlice";

export const store = configureStore({
    reducer: {
        collections: collectionsSlice.reducer,
        [collectionApi.reducerPath]: collectionApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(collectionApi.middleware)
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
