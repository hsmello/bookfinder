import React from 'react';
import './SideDrawer.css'

const sideDrawer = props => {
    let drawerClasses = 'side_Drawer';
    if (props.show) {
        drawerClasses = 'side_Drawer open';
    }

    return (
    <nav className={drawerClasses} >
        <ul> 
            <li><a href="/bookfinder">Book Finder</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
    );
};

export default sideDrawer;

