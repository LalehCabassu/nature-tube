import styles from './App.module.scss';
import React from "react";
import Home from "./views/Home/Home";
import {Header} from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ROUTES} from "./App.model";
import {Add} from "./views/Add/Add";
import {Pick} from "./views/Pick/Pick";
import {Play} from "./views/Play/Play";
import {About} from "./views/About/About";

export function App() {


    return (
        <div>
            <BrowserRouter>
                <Header/>
                <div className={styles.AppContent}>
                    <Routes>
                        <Route path={ROUTES.home} element={<Home/>}/>
                        <Route path={ROUTES.add} element={<Add/>}/>
                        <Route path={ROUTES.pick} element={<Pick/>}/>
                        <Route path={ROUTES.play} element={<Play/>}/>
                        <Route path={ROUTES.about} element={<About/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}
