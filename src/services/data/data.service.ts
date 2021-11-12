import {Collection, Document, Db, MongoClient} from "mongodb";
import {from, Observable} from "rxjs";

export class DataService {

    private readonly _url = 'mongodb://localhost:27017';
    private readonly _dbName = 'local';

    private mongoCLient: MongoClient;

    private static _instance;
    public static get Instance(): DataService {
        if (! this._instance) {
            this._instance = new DataService();
        }
        return this._instance;
    }

    constructor() {
        // console.log(this._url)
        this.mongoCLient = new MongoClient('mongodb://localhost:27017');
    }

    public createCollection() {
        this.mongoCLient.connect().then(() => {
            const db:Db = this.mongoCLient.db(this._dbName);
            return db.createCollection("playlist")
                .then(() => {
                    console.log('collection create')
                })
                .catch(error => {
                    console.error('collection creation error: ', error);
                });
        }).catch(error => {
            console.error('db connection error: ', error);
            return new Observable<any>();
        })
    }
}