import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css';
import React from 'react';
import styles from './Menu.module.scss';
import {MenuState} from "./Menu.model";
import {ROUTES} from "../../App.model";
import {Link} from 'react-router-dom';
import {MenuService} from "../../services/MenuService";

class Menu extends React.Component<any, MenuState> {

    private menuService: MenuService;

    constructor(props: any) {
        super(props);

        this.menuService = MenuService.Instance;
        this.state = this.createState(this.menuService.isMenuOpen());
        this.menuService.menuOpen.subscribe(value => {
            this.setState(() => {
                return this.createState(value)
            });
        });

        this.closeMenu = this.closeMenu.bind(this);
        this.flipState = this.flipState.bind(this);
    }

    createState(open?: boolean) {
        return {
            open: open ?? false
        } as MenuState;
    }

    closeMenu() {
        this.menuService.closeMenu();
    }

    flipState() {
        this.menuService.flipMenu();
    }

    render() {
        const menuClassName = this.state.open ? styles.Active : styles.Inactive;
        return (
            <nav className={styles.Menu} role="menu" aria-label="main menu">
                <Burger isOpen={this.state.open} onClick={this.flipState}/>
                <div className={menuClassName}>
                    <Link to={ROUTES.home} onClick={this.closeMenu}>home</Link>
                    <Link to={ROUTES.add} onClick={this.closeMenu}>add</Link>
                    <Link to={ROUTES.pick} onClick={this.closeMenu}>pick</Link>
                    <Link to={ROUTES.play} onClick={this.closeMenu}>play</Link>
                    <Link to={ROUTES.about} onClick={this.closeMenu}>about</Link>
                </div>
            </nav>
        );
    }
}

export default Menu;