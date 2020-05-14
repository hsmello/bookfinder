import React from 'react';
import MyEmailBox from '../Imports/MyEmailBox';
import MyTextBox from '../Imports/MyTextBox';
import './Contact.css';
import MyButton from '../Imports/MyButton';


function Contact() {
    return (
   <div className='contact_page'>
        <h1 className="all_text">Contact Us!</h1>
        <MyTextBox 
            variant="outlined"
            label="Name"
        />
        <MyTextBox 
            variant="outlined"
            label="E-mail"
        />
        <MyEmailBox/>
        <MyButton 
            label="Confirm"/>

        <h5 className="all_text">
            For more info you can contact (+351) 956 956 956
        </h5>
           

    </div>
    );
};

export default Contact;
