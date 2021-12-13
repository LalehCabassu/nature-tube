import {BehaviorSubject} from "rxjs";

export class MenuService {

    private static _instance;
    public readonly menuOpen: BehaviorSubject<boolean>;

    private constructor() {
        this.menuOpen = new BehaviorSubject<boolean>(false);
    }

    public static get Instance() {
        if (!this._instance) {
            this._instance = new MenuService();
        }
        return this._instance;
    }

    public isMenuOpen(): boolean {
        return this.menuOpen.value;
    }

    public flipMenu() {
        this.menuOpen.next(!this.menuOpen.value);
    }

    public closeMenu() {
        this.menuOpen.next(false);
    }
}