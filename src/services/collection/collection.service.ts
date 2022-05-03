import axios from 'axios';
import {Collection} from "./collection.model";

export class CollectionService {

    private static readonly _addCollectionsEndpoint = '/collection'
    private static readonly _getAllCollectionsEndpoint = '/collections'
    private static _instance;

    private constructor() {
        axios.defaults.baseURL = 'http://localhost:8080';
    }

    public static get Instance(): CollectionService {
        if (!this._instance) {
            this._instance = new CollectionService();
        }
        return this._instance;
    }

    add(collection: Collection): Promise<any> {
        return axios.post(
            CollectionService._addCollectionsEndpoint,
            collection
        )
            .then(response => response.status)
            .catch(error => {
                console.error(error);
            });
    }

    getAll(): Promise<Collection[]> {
        return axios.get(CollectionService._getAllCollectionsEndpoint);
    }
}