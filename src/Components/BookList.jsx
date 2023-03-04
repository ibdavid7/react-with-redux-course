import React from 'react';
import {BookShow} from "./index";

const BookList = ({books, onDelete, onEdit}) => {
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
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                );
            })}
        </div>
    );
};

export default BookList;