import React from 'react';
import {Card} from "antd";
const {Meta} = Card;


const BookList = ({books}) => {
    return (
        // Book Cards
    <div className={'flex flex-row flex-wrap justify-center border'}
         style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}
    >
        {books.map((book) => {

            return (
                <div style={{padding: '10px'}} key={book.id} >
                    {/*{console.log(book.id)}*/}
                    <Card
                        hoverable
                        style={{width: 240}}
                        cover={<img
                            // alt={book.alt_description}
                            // src={book.urls.small}
                            style={{objectFit: 'contain', height: '225px', position: 'static'}}/>}
                        loading={false}
                        onClick={() => {
                        }}
                    >

                        <Meta
                            title={book.title}
                        />
                    </Card>
                </div>
            );
        })}
    </div>
    );
};

export default BookList;