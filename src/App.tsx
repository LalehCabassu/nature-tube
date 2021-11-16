import styles from './App.module.scss';
import React from "react";
import Play from "./pages/Play/Play";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ROUTES, MenuContext, AppState, MenuContextModel} from "./App.model";
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import Pick from "./pages/Pick/Pick";
import About from "./pages/About/About";


class App extends React.Component<any, AppState> {

    constructor(props) {
        super(props);
        const menuContextToggle = this.toggleMenu.bind(this);
        const menuContextModel = new MenuContextModel();
        menuContextModel.toggleMenu = menuContextToggle;
        this.state = {
            menuContext: menuContextModel
        } as AppState;
        this.toggleMenu = menuContextToggle;
    }

    toggleMenu() {
        console.log('toggle')
        this.setState((state) => {
            return {
                menuContext: {
                    open: !state.menuContext.open,
                    toggleMenu: state.menuContext.toggleMenu
                }
            }
        });
    };

    render() {
        return (
            <div>
                <BrowserRouter>
                    <MenuContext.Provider value={this.state.menuContext}>
                        <Header/>
                    </MenuContext.Provider>
                    <div className={styles.AppContent}>
                        <Switch>
                            <Route exact path={ROUTES.home}>
                                <Home/>
                            </Route>
                            <Route path={ROUTES.add}>
                                <Add/>
                            </Route>
                            <Route path={ROUTES.pick}>
                                <Pick/>
                            </Route>
                            <Route path={ROUTES.play}>
                                <Play/>
                            </Route>
                            <Route path={ROUTES.about}>
                                <About/>
                            </Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
