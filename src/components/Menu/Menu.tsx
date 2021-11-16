import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css';
import React from 'react';
import styles from './Menu.module.scss';
import {MenuState} from "./Menu.model";
import {MenuContext, ROUTES} from "../../App.model";

class Menu extends React.Component<any, MenuState> {

    static contextType = MenuContext;

    constructor(props: any) {
        super(props);
        // console.log(menuOpen);
        // this.state = this.createState(menuOpen);
        // this.flipState = this.flipState.bind(this);
    }

    // createState(isOpen: boolean) {
    //     return {
    //         isOpen: isOpen
    //     }
    // }

    // flipState() {
    //     // console.log('in flipState')
    //     // this.menuService.flipMenu();
    //     this.setState(() => {
    //         return this.createState(this.context);
    //     });
    // }

    render() {
        console.log('render: ', this.context)
        // const menuOpen = this.context;
        // const menuClassName = ;
        // console.log(menuClassName)
        return (
            <MenuContext.Consumer>
                {({open, toggleMenu}) => (
                    <div className={styles.Menu} >
                        <Burger isOpen={open} onClick={toggleMenu} />
                        <div className= {open ? styles.Active : styles.Inactive} >
                            <div>
                                <a href={ROUTES.play}>Play</a>
                            </div>
                            <div>
                                <a href={ROUTES.pick}>Pick</a>
                            </div>
                            <div>
                                <a href={ROUTES.add}>Add</a>
                            </div>
                        </div>
                    </div>
                )}
            </MenuContext.Consumer>
        );
    }
}

export default Menu;
