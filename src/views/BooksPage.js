import React, { useEffect } from 'react';
import { Grid, Container, CircularProgress, Typography } from '@mui/material'; 
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';
import { useBooksViewModel } from '../viewmodels/BooksViewModel';

const BooksPage = () => {
    const { books, filterBooks, loading } = useBooksViewModel(); // Obtiene los libros, función de filtrado y estado de carga con un custom hook

    useEffect(() => {
        console.log(books); 
    }, [books]); // Para pruebas en consola

    return (
        <Container>
            <SearchBar onSearch={filterBooks} /> 
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
                {loading ? (
                    <Grid item xs={12} container justifyContent="center">
                        <CircularProgress /> 
                    </Grid>
                ) : books.length > 0 ? (
                    books.map((book, index) => (
                        <Grid item key={index} xs={12} sm={4} md={4}> 
                            <BookCard book={book} /> 
                        </Grid>
                    ))
                ) : (
                    <Grid item xs={12} container justifyContent="center">
                        <Typography>No books available.</Typography> 
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};

export default BooksPage;
