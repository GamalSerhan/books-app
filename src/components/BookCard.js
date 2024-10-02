import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
    return (
        <Link to={`/books/${book.id}`} style={{ textDecoration: 'none', color: 'inherit' }}> {/* Enlace a la página de detalles */}
            <Card
                sx={{
                    width: '100%', 
                    height: '250px', 
                    margin: 1, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    boxShadow: 3, 
                    borderRadius: '12px', 
                    backgroundColor: '#f9f9f9', 
                    '&:hover': {
                        backgroundColor: '#e3f2fd', 
                    },
                }}
            >
                <CardMedia
                    component="img"
                    height="180" 
                    image={book.imageLinks?.thumbnail} 
                    alt={book.title}
                    sx={{ objectFit: 'contain' }} 
                />
                <CardContent>
                    <Typography 
                        variant="h6" 
                        noWrap 
                        sx={{ 
                            fontWeight: 'bold', 
                            color: '#333' 
                        }}
                    >
                        {book.title}
                    </Typography>
                    <Typography 
                        variant="subtitle2" 
                        noWrap 
                        sx={{ 
                            color: '#555' 
                        }}
                    >
                        {book.subtitle}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        noWrap 
                        sx={{ 
                            color: '#777'
                        }}
                    >
                        {book.authors.join(", ")}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default BookCard;