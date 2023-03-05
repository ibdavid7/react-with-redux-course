import React, {useContext} from 'react';
import {BookShow} from "./index";
import {BooksContext} from "../Context";

const BookList = () => {

    const {books} = useContext(BooksContext);

    return (
        // Book Cards
        <div className={'flex flex-row flex-wrap justify-center border'}
             style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}
        >
            {books.map((book) => {

                return (
                    <BookShow
                        key={book.id}
                        book={book}
                    />
                );
            })}
        </div>
    );
};

export default BookList;