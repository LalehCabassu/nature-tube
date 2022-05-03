import React from 'react';
import styles from './Header.module.scss';
import Menu from "../Menu/Menu";
import logo from "../../assets/images/aurora-borealis.png";
import {ROUTES} from "../../App.model";
import {Link} from 'react-router-dom';


export function Header() {

    const _title = "natureTube";

    return (
        <header className={styles.Header}>
            <div className={styles.Logo}>
                <img src={logo} alt={_title}/>
                <Link to={ROUTES.home}>{_title}</Link>
            </div>
            <Menu/>
        </header>
    );
}
