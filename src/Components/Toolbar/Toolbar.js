import React from 'react';
import './Toolbar.css';
import DrawerButton from '../SideDrawer/DrawerButton';

const toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbar_nav'>
            <div className='toolbar_button'>
                <DrawerButton click={props.clickHandler}></DrawerButton>
            </div>

            <div className='toolbar_logo'><a href="/">HM Book Finder</a> </div>
            <div className='topMenuSpace' />
            <div className='toolbar_items'>
                <ul>
                    <li><a href="/bookfinder">Book Finder</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar