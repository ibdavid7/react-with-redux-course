import {useContext} from 'react';
import {BooksContext} from "../Context";

const UseBooksContext = () => {
    return useContext(BooksContext);
};

export default UseBooksContext;