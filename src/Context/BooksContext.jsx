import {createContext, useCallback, useState} from "react";
import axios from "axios";

const BooksContext = createContext();

const Provider = ({children}) => {

    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async () => {
            const response = axios.get(process.env.REACT_APP_API_URL_BOOKS);
            setBooks((await response).data)
        },
        []);

    const createBook = async (title) => {

        // API code
        try {
            // console.log(process.env.REACT_APP_API_URL);
            const response = await axios.post(process.env.REACT_APP_API_URL_BOOKS, {title: title});
            // console.log(response.data);
            setBooks([
                ...books,
                response.data
            ]);

        } catch (e) {
            console.log(e);
        }
    }

    const deleteBookById = async (id) => {

        try {
            await axios.delete(`${process.env.REACT_APP_API_URL_BOOKS}/${id}`);

            const updatedBooks = books.filter((book) => book.id !== id);
            setBooks(updatedBooks);
        } catch (e) {
            console.log(e);
        }

    }

    const editBookTitleById = async (id, newTitle) => {

        try {
            const response = await axios.put(`${process.env.REACT_APP_API_URL_BOOKS}/${id}`, {
                id: id, title: newTitle,
            })
            // console.log(response);

            const updatedBooks = books.map((book) => {
                if (book.id === id) {
                    return response.data;
                } else {
                    return book;
                }
            })
            setBooks(updatedBooks);

        } catch (e) {
            console.log(e);
        }

    }

    const objToShare = {
        books,
        fetchBooks,
        createBook,
        deleteBookById,
        editBookTitleById,
    }

    return (
        <BooksContext.Provider value={objToShare}>
            {children}
        </BooksContext.Provider>

    );

}

export {Provider};
export default BooksContext;