import React from "react";
import '../SideDrawer/DrawerToggleBtn';
import './Menu.css';
import DrawerToggleBtn from "../SideDrawer/DrawerToggleBtn";

const Menu = props => (
    <header className="menu">
        <nav className="menu_nav">
            <div className="menu_toggle_btn">
                <DrawerToggleBtn click={props.drawerClickHandler}/>
            </div>
            <div className="menu_logo"><a href="">NCORD health</a></div>
            <div className="spacer" />
            <div className="menu_nav_item">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Patient</a></li>
                    <li><a href="/Doctor.js">Doctor</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Menu;