import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css';
import React from 'react';
import styles from './Menu.module.scss';
import {MenuState} from "./Menu.model";
import {ROUTES} from "../../App.model";
import {Link} from 'react-router-dom';

class Menu extends React.Component<any, MenuState> {

    constructor(props: any) {
        super(props);
        this.state = this.createState(false);
        this.flipState = this.flipState.bind(this);
    }

    createState(isOpen: boolean) {
        return {
            isOpen: isOpen
        }
    }

    flipState() {
        this.setState((state) => {
            return this.createState(!state.isOpen)
        });
    }

    render() {
        const menuClassName = this.state.isOpen ? styles.Active : styles.Inactive;
        return (
            <nav className={styles.Menu} role="menu" aria-label="main menu">
                <Burger isOpen={this.state.isOpen} onClick={this.flipState}/>
                <div className={menuClassName}>
                    <Link to={ROUTES.add}>add</Link>
                    <Link to={ROUTES.pick}>pick</Link>
                    <Link to={ROUTES.play}>play</Link>
                    <Link to={ROUTES.about}>about</Link>
                </div>
            </nav>
        );
    }
}

export default Menu;