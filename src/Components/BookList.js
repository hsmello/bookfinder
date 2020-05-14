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
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                published={book.volumeInfo.publishedDate}                           
                            />
                })
            }
        </div>
    )
};

export default BookList;