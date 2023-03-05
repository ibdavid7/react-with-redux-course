import React, {useEffect} from 'react';
import {Divider} from "antd";
import {BookCreate, BookList} from "../Components";
import {useBooksContext} from "../Hooks";

const BookWidget = () => {

    const {books, fetchBooks} = useBooksContext();

    useEffect(() => {
        fetchBooks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        // Container
        <div className={'flex flex-col'}
             style={{
                 display: 'flex', flexDirection: 'column',
                 backgroundColor: 'rgb(249 250 251)',
                 borderRadius: '10px', minWidth: '80%',
                 paddingBottom: '20px', maxWidth: '80%',
                 marginTop: '1rem'
             }}>

            {/*Heading*/}
            <div className={'p-8 m-10 bg-slate-400'}
                 style={{
                     padding: '10px 0 10px 0',
                     color: 'white', backgroundColor: 'rgb(24 24 27)',
                     display: 'flex', justifyContent: 'center',
                     alignItems: 'center', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'
                 }}>
                <h1>Books</h1>
            </div>

            {/*BookCreate Component*/}
            <div>
                <BookCreate/>
            </div>

            {/*Divider*/}
            <div style={{width: '70%', display: 'flex', justifyContent: 'center', margin: '0 auto'}}>
                <Divider orientation="center" plain>
                    {books.length === 0 ? '' : books.length === 1 ? '1 Book' : `${books.length} Books`}
                </Divider>
            </div>

            {/*Book Cards*/}
            <BookList/>
        </div>
    );
};

export default BookWidget;