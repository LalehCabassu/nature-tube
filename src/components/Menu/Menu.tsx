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
            <nav role="menu" aria-label="main menu">
                <div className={styles.BurgerMenu} onClick={this.flipState}>
                    <hr />
                    <hr />
                    <hr />
                </div>
                <div className={menuClassName}>
                    {/*<div className={styles.Close} onClick={this.flipState}>X</div>*/}
                    <Link to={ROUTES.add}>ADD</Link>
                    <Link to={ROUTES.pick}>PICK</Link>
                    <Link to={ROUTES.play}>PLAY</Link>
                    <Link to={ROUTES.about}>ABOUT</Link>
                </div>
            </nav>
        );
    }
}

export default Menu;