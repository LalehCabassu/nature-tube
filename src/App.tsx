import styles from './App.module.scss';
import React from "react";
import Play from "./pages/Play/Play";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ROUTES} from "./App.model";
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import Pick from "./pages/Pick/Pick";
import About from "./pages/About/About";

class App extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
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
