import React, {useState} from 'react';
import {Button, Space, Input} from "antd";

const BookEdit = ({book, onEdit}) => {

    const [title, setTitle] = useState(book.title);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        onEdit(book.id, title);
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