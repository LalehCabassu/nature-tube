import React from 'react';
import styles from './Header.module.scss';
import Menu from "../Menu/Menu";
import logo from "../../assets/images/aurora-borealis.png";
import {ROUTES} from "../../App.model";


class Header extends React.Component<any, any> {

    private readonly _title = "NatureTube";

    render() {
        return (
            <header className={styles.Header}>
                <Menu />
                <div className={styles.Logo}>
                    <img src={logo} alt={this._title}/>
                    <h1>{this._title}</h1>
                </div>
                <a className={styles.About} href={ROUTES.about}>About</a>
            </header>
        );
    }
}

export default Header;
