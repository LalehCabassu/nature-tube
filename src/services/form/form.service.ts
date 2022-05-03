import {BehaviorSubject} from "rxjs";

export class FormService {

    private static _instance;
    public readonly resetForm: BehaviorSubject<boolean>;

    private constructor() {
        this.resetForm = new BehaviorSubject<boolean>(false);
    }

    public static get Instance(): FormService {
        if (!this._instance) {
            this._instance = new FormService();
        }
        return this._instance;
    }

    public startResetForm() {
        this.resetForm.next(true);
    }

    public stopResetForm() {
        this.resetForm.next(false);
    }
}