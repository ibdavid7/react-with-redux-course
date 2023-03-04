import React, { useState } from 'react';
import { Input } from 'antd';



const SearchBar = ({ onSearch }) => {

    const { Search } = Input;

    const [searchString, setSearchString] = useState('');

    const handleChange = (event) => {
        setSearchString(event.target.value);
    }

    const handleSubmit = () => {
        onSearch(searchString);
    }

    // const onSearch = (value) => {
    //     console.log(value);
    //     setSearchString(value);
    // }

    return (
        <Search
            placeholder="search image by text"
            allowClear
            // onSearch={(value) => onSearch(value)}
            onSearch={handleSubmit}
            onChange={handleChange}
            value={searchString}
            style={{
                width: '100%',
                margin: '20px 20px',
            }}
        />
    )
}

export default SearchBar;
