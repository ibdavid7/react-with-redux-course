import React, {useState} from 'react';
import {Button, Space, Input} from "antd";
import {SearchBar} from "./index";

const BookCreate = ({onCreate}) => {

    const [title, setTitle] = useState('');

    const handleOnSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }

    return (
        <div style={{
            padding: '30px 0 10px 0',
            // backgroundColor: 'rgb(24 24 27)',
            display: 'flex', justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Space
                direction="vertical"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    minWidth: '50%',
                }}
            >
                <Input.Group size={'default'}>
                    <Input
                        style={{
                            width: 'calc(100% - 100px)',
                            minWidth: '150px'
                        }}
                        placeholder="Book Title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <Button
                        type="primary"
                        onClick={handleOnSubmit}
                    >Add Book</Button>
                </Input.Group>
            </Space>
        </div>
    );
};

export default BookCreate;