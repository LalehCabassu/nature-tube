import logo from './assets/images/aurora-borealis.png';
import styles from './App.module.scss';
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import React from "react";

class App extends React.Component {

    private readonly _title = "NatureTube";

    render() {
        return (
            <div className={styles.App}>
                <header>
                    <img src={logo} alt={this._title}/>
                    <div>{this._title}</div>
                </header>
                <div>
                    <VideoPlayer/>
                </div>
            </div>
        );
    }
}

export default App;
