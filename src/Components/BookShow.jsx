import React, {useState} from 'react';
import {Card} from "antd";
import {BsXLg, BsPen} from 'react-icons/bs';
import {book as bookCover} from "../Assets";
import {BookEdit} from "./index";

const {Meta} = Card;

const BookShow = ({book, onDelete, onEdit}) => {

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
                    src={bookCover}
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
                                margin: '0.1rem'
                            }}
                            onClick={() => onDelete(book.id)}
                        />
                    </div>
                </div>
                {editMode
                    ? <BookEdit
                        book={book}
                        onEdit={onEdit}
                        disableEditMode={disableEditMode}
                    />
                    : <Meta
                        title={book.title}
                    />}
            </Card>
        </div>
    );
};

export default BookShow;