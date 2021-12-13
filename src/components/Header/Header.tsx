import React from 'react';
import styles from './Header.module.scss';
import Menu from "../Menu/Menu";
import logo from "../../assets/images/aurora-borealis.png";
import {ROUTES} from "../../App.model";
import {Link} from 'react-router-dom';
import {MenuService} from "../../services/MenuService";


class Header extends React.Component<any, any> {

    private readonly _title = "natureTube";
    private menuService: MenuService;

    constructor(props: any) {
        super(props);
        this.menuService = MenuService.Instance;
        this.closeMenu = this.closeMenu.bind(this);
    }

    closeMenu() {
        this.menuService.closeMenu();
    }

    render() {
        return (
            <header className={styles.Header}>
                <div className={styles.Logo}>
                    <img src={logo} alt={this._title}/>
                    <Link to={ROUTES.home} onClick={this.closeMenu}>{this._title}</Link>
                </div>
                <Menu/>
            </header>
        );
    }
}

export default Header;
