import React from 'react';
import './DrawerToggleBtn.css'

const DrawerToggleBtn = props => (
    <button className="menu_btn" onClick={props.click}>
        <div className="menu_btn_line"/>
        <div className="menu_btn_line"/>
        <div className="menu_btn_line"/>
    </button>

);

export default DrawerToggleBtn;