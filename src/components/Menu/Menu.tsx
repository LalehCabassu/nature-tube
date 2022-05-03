import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css';
import React, {useState} from 'react';
import styles from './Menu.module.scss';
import {ROUTES} from "../../App.model";
import {Link} from 'react-router-dom';

export function Menu() {

    const [open, setOpen] = useState<boolean>(false)
    const menuClassName = open ? styles.Active : styles.Inactive;

    function flipMenu() {
        setOpen(!open)
    }

    function closeMenu() {
        setOpen(false);
    }

    return (
        <nav className={styles.Menu} role="menu" aria-label="main menu">
            <Burger isOpen={open} onClick={flipMenu}/>
            <div className={menuClassName}>
                <Link to={ROUTES.home} onClick={closeMenu}>home</Link>
                <Link to={ROUTES.add} onClick={closeMenu}>add</Link>
                <Link to={ROUTES.pick} onClick={closeMenu}>pick</Link>
                <Link to={ROUTES.play} onClick={closeMenu}>play</Link>
                <Link to={ROUTES.about} onClick={closeMenu}>about</Link>
            </div>
        </nav>
    );
}

export default Menu;