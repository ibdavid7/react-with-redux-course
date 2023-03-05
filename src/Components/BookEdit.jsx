import React, {useContext, useState} from 'react';
import {Button, Space, Input} from "antd";
import {BooksContext} from "../Context";

const BookEdit = ({book, onSubmit}) => {

    const {editBookTitleById} = useContext(BooksContext);

    const [title, setTitle] = useState(book.title);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        editBookTitleById(book.id, title);
        onSubmit();
        setTitle('');
    }


    return (
        <div style={{
            padding: '0 0 10px 0',
            display: 'flex', justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Space
                direction="horizontal"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    minWidth: '100%',
                }}
            >
                <Input.Group size={'default'}>
                    <Input
                        style={{
                            // width: 'calc(100% - 100px)',
                            width: '100%',
                        }}
                        placeholder="Book Title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <Button
                        type="primary"
                        onClick={handleOnSubmit}
                        style={{
                            width: '100%',
                        }}
                    >Update Title</Button>
                </Input.Group>
            </Space>
        </div>
    );
};

export default BookEdit;