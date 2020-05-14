import React from 'react';
import './DrawerButton.css'

const drawerButton = props => (
    <button className='button' onClick={props.click}>
        <div className='button_line'/>
        <div className='button_line'/>
        <div className='button_line'/>
    </button>
);

export default drawerButton;