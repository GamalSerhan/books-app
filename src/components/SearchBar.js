import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
    const handleSearch = (event) => {
        onSearch(event.target.value);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                my: 2, 
            }}
        >
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Buscar libros..."
                onChange={handleSearch}
                sx={{
                    backgroundColor: '#ffffff', 
                    borderRadius: '25px',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#ccc', 
                        },
                        '&:hover fieldset': {
                            borderColor: '#888', 
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#3f51b5', 
                        },
                    },
                    '& .MuiInputBase-input': {
                        padding: '10px 20px', 
                    },
                }}
            />
        </Box>
    );
};
export default SearchBar;