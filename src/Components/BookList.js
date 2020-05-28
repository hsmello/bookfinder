import React from 'react';
import MyBookCard from '../Imports/MyBookCard';

const BookList = (props) => {
    return(
        <div className='bookList'>
            {
                props.books.map((book, i) => {
                    return <MyBookCard 
                                key={i}
                                image={book.volumeInfo.imageLinks === undefined ? 
                                    "" : book.volumeInfo.imageLinks.thumbnail}
                                title={book.volumeInfo.title === undefined ?
                                    "" : book.volumeInfo.title}
                                author={book.volumeInfo.authors === undefined ?
                                    "" : book.volumeInfo.authors}
                                published={book.volumeInfo.publishedDate === undefined ?
                                    "" : book.volumeInfo.publishedDate}                           
                            />
                })
            }
        </div>
    )
};

export default BookList;