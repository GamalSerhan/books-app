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
        setLoading(true);
        try {
            const response = await getBookById(id);
            console.log(response.book); // Solo para verificar la respuesta en la consola
            if (response.book) {
                setSelectedBook(response.book);
                
            } else {
                console.error("'Book' no se encontró en la respuesta");
            }
        } catch (error) {
            console.error("Error fetching books:", error); 
        } finally {
            setLoading(false); 
        }
        console.log(selectedBook)
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
