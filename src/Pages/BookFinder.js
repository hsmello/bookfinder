import React, { Component } from 'react';
import MyTextBox from '../Imports/MyTextBox';
import MyButton from '../Imports/MyButton';
import BookList from '../Components/BookList';
import './BookFinder.css';
import request from 'superagent';

class BookFinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    searchBook = (e) => {

        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .then((data) => {
                console.log(data)
                this.setState({ books: [...data.body.items] })
            })

    }

    handleSearch(event) {
        this.setState({ searchField: event.target.value })
    }

    render() {
        return (
            <div>
                <div className='searchBook' >
                    <MyTextBox
                        onChange={(event) => { this.handleSearch(event) }}
                        label="Book or Author"
                        onClickEnter={this.searchBook}
                    />
                    <MyButton
                        onClick={this.searchBook}
                        onSubmit={this.searchBook}
                        label="Search"
                    />
                </div>
                <div>
                    <BookList
                        books={this.state.books}
                    />
                </div>
            </div>
        );
    }
};

export default BookFinder;