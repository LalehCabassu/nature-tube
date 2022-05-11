import {configureStore} from "@reduxjs/toolkit";
import {collectionsSlice} from "./collection/collectionsSlice";

export default configureStore({reducer: {collections: collectionsSlice.reducer}});
