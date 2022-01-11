import React from 'react';
import {CollectionContextModel} from "./CollectionContext.model";

export const CollectionContext = React.createContext({
    collections: []
} as CollectionContextModel);
