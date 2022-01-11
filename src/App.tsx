import styles from './App.module.scss';
import React from "react";
import Play from "./views/Play/Play";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AppState, ROUTES} from "./App.model";
import Home from "./views/Home/Home";
import Add from "./views/Add/Add";
import Pick from "./views/Pick/Pick";
import About from "./views/About/About";
import {CollectionContext} from "./contexts/CollectionContext/CollectionContext";
import {CollectionContextModel} from "./contexts/CollectionContext/CollectionContext.model";

class App extends React.Component<any, AppState> {

    constructor(props) {
        super(props);
        this.state = {
            collectionContext: {
                collections: []
            } as CollectionContextModel
        } as AppState;

        this.updateCollections = this.updateCollections.bind(this);
    }

    updateCollections(collection) {
        this.setState((state) => {
            state.collectionContext.collections.push(collection);
            return {
                collectionContext: state.collectionContext
            } as AppState;
        });
   }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <CollectionContext.Provider value={this.state.collectionContext}>
                        <div className={styles.AppContent}>
                            <Switch>
                                <Route exact path={ROUTES.home}>
                                    <Home/>
                                </Route>
                                <Route path={ROUTES.add}>
                                    <Add onSave={this.updateCollections}/>
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
                    </CollectionContext.Provider>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
