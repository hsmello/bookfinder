import React, { Component } from 'react';
import './Home.css';
import BookPic from '../Images/book_homepage.jpg';

import request from 'superagent';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            picture: [],
        }
    }

    searchPicture = (e) => {
        e.preventDefault();
        request
            .get("https://api.unsplash.com/photos/?client_id=fh5fp_0xXO4sNsGPiWNnhLZ5NwPFFKSqwF3mJ7hMcA8")
            .query({ q: this.state.picture })
            .then((data) => {
                console.log(data)
                this.setState({ picture: [...data.id.links.download_location] })
            })
    }

    render() {
        return (
       <div>
            <h1 className="home" >Search here the main books in Google API</h1>



            <img src={BookPic} alt="book" />
        </div>
        );}
};

export default Home;