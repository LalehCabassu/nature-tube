import axios from 'axios';
import {Collection} from "./collection.model";

export class CollectionService {

    private static readonly _collectionsEndpoint = '/collection'
    private static _instance;

    private constructor() {
        axios.defaults.baseURL = 'http://localhost:8080';
    }

    public static get Instance() {
        if (!this._instance) {
            this._instance = new CollectionService();
        }
        return this._instance;
    }

    add(collection: Collection): Promise<any> {
        return axios.post(
            CollectionService._collectionsEndpoint,
            collection
        )
            .then(response => response.status)
            .catch(error => {
                console.error(error);
            });
    }
}