import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const BookDetailCard = ({ book }) => {
    return (
        <Card sx={{ mt: 2, borderRadius: '16px', boxShadow: 3 }}>
            <CardMedia
                component="img"
                image={book.imageLinks?.thumbnail} 
                alt={book.title}
                sx={{ height: 'auto', maxHeight: '600px', objectFit: 'contain', borderRadius: '16px 16px 0 0' }} 
            />
            <CardContent sx={{ padding: '24px' }}> 
                <Typography variant="h4" sx={{ mb: 1, fontWeight: 'bold', color: '#3f51b5' }}>{book.title}</Typography>
                <Typography variant="h6" sx={{ mb: 1, color: '#555' }}>{book.subtitle}</Typography>
                <Typography variant="body1" sx={{ mb: 2, color: '#333' }}>{book.description}</Typography>
                <Typography variant="subtitle1" sx={{ color: '#777' }}>Authors: {book.authors.join(", ")}</Typography>
            </CardContent>
        </Card>
    );
};

export default BookDetailCard;
