import React from "react";

export const ROUTES = {
    home: '/',
    add: '/add',
    pick: '/pick',
    play: '/play',
    about: '/about'
}

export class MenuContextModel {
    open = false;
    toggleMenu = () => {};
}

export interface AppState {
    menuContext: MenuContextModel
}

export const MenuContext = React.createContext(new MenuContextModel());
