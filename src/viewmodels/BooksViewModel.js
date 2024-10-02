import { useState, useEffect } from 'react';
import { getBooks, getBookById } from '../services/mainService';

export const useBooksViewModel = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await getBooks();
                console.log(response); // Solo para verificar la respuesta en la consola
                if (response.books) {
                    setBooks(response.books);
                    setFilteredBooks(response.books);
                } else {
                    console.error("'Books' no se encontró en la respuesta");
                }
            } catch (error) {
                console.error("Error fetching books:", error); 
            } finally {
                setLoading(false); 
            }
        };
        fetchBooks();
    }, []);

    const filterBooks = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        const filtered = books.filter(book => 
            book.title.toLowerCase().includes(lowerCaseQuery) ||
            book.authors.some(author => author.toLowerCase().includes(lowerCaseQuery)) 
        );
        setFilteredBooks(filtered);
        console.log(filtered); 
    };

    const fetchBookDetails = async (id) => {
        const book = await getBookById(id);
        setSelectedBook(book);
    };

    return {
        books: filteredBooks,
        filteredBooks,
        selectedBook,
        filterBooks,
        fetchBookDetails,
        loading
    };
};
