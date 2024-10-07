import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, CircularProgress, Button, Box, Typography } from '@mui/material';
import { useBooksViewModel } from '../viewmodels/BooksViewModel';
import BookDetailCard from '../components/BookDetailCard';

const BookDetailPage = () => {
    const { id } = useParams(); 
    const { fetchBookDetails, selectedBook, loading } = useBooksViewModel(); 
    const navigate = useNavigate();

    useEffect(() => {
        fetchBookDetails(id);
    }, [id]); 

   /*Encontrar el libro de forma local
    useEffect(() => {
        const foundBook = books.find((book) => book.id === id);
        if (foundBook) setBook(foundBook);
        setLoading(false);
    }, [books, id]);*/

    if (loading) return <Container><CircularProgress /></Container>;

    if (!selectedBook) return <Typography>No book found!</Typography>; 

    return (
        <Container sx={{ py: 5, backgroundColor: '#f5f5f5' }}>
            <Box display="flex" justifyContent="flex-start" mb={3} mt={2}>
                <Button
                    variant="contained"
                    onClick={() => navigate('/books')}
                    sx={{
                        backgroundColor: '#585858 ',
                        color: '#ffffff',
                        borderRadius: '8px',
                        '&:hover': { backgroundColor: '#303f9f' },
                        padding: '12px 24px',
                        boxShadow: 2,
                        fontWeight: 'bold',
                    }}
                >
                    Volver a la lista de libros
                </Button>
            </Box>
            <BookDetailCard book={selectedBook} /> {/* Usar el libro seleccionado */}
        </Container>
    );
};

export default BookDetailPage;
