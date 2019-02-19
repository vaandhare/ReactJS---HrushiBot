import React from 'react'
import './SideDrawer.css'

const SideDrawer = props => {
    let drawerClases = 'side-drawer';
    if(props.show){
        drawerClases = 'side-drawer open';
    }
    return (<nav className={drawerClases}>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Patient</a></li>
            <li><a href="">Doctor</a></li>
        </ul>
    </nav> );
};

export default SideDrawer;