import React, {useContext, useState} from 'react';
import {Card} from "antd";
import {BsXLg, BsPen} from 'react-icons/bs';
import {BookEdit} from "./index";
import {BooksContext} from "../Context";

const {Meta} = Card;

const BookShow = ({book}) => {

    const {deleteBookById} = useContext(BooksContext)

    const [editMode, setEditMode] = useState(false);

    const enableEditMode = () => setEditMode(true);
    const disableEditMode = () => setEditMode(false);

    return (
        <div style={{padding: '10px'}} key={book.id}>
            {/*{console.log(book.id)}*/}
            <Card
                style={{width: 240}}
                cover={<img
                    alt={'book cover'}
                    src={`https://picsum.photos/seed/${book.id}/200/300.webp`}
                    style={{objectFit: 'cover', height: '225px', position: 'relative'}}/>}
                loading={false}
                onClick={() => {
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        inset: '1rem 1rem auto auto',
                        borderWidth: '0',
                        border: 'none',
                        display: 'flex',
                        direction: 'row',
                        justifyContent: 'space-between'
                    }}

                >
                    {!editMode &&
                        <div>
                            <BsPen
                                style={{
                                    cursor: 'pointer',
                                    fontSize: '1.3rem',
                                    color: 'black',
                                    backgroundColor: 'lightGray',
                                    opacity: '0.6',
                                    margin: '0.1rem',
                                    padding: '0.1rem'
                                }}
                                onClick={() => enableEditMode()}
                            />
                        </div>
                    }

                    <div>

                        <BsXLg
                            style={{
                                cursor: 'pointer',
                                fontSize: '1.5rem',
                                color: 'black',
                                backgroundColor: 'lightGray',
                                opacity: '0.6',
                                margin: '0.1rem'
                            }}
                            onClick={() => deleteBookById(book.id)}
                        />
                    </div>
                </div>
                {editMode
                    ? <BookEdit
                        book={book}
                        onSubmit={disableEditMode}
                    />
                    : <Meta
                        title={book.title}
                    />}
            </Card>
        </div>
    );
};

export default BookShow;