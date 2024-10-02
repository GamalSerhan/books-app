import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BooksPage from './views/BooksPage';
import BookDetailsPage from './views/BookDetailsPage';
import Navbar from './components/NavBar';

const App = () => {
    return (
        <Router>
            <Navbar/> 
            <Routes>
            <Route path="/" element={<BooksPage />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/books/:id" element={<BookDetailsPage />} /> 
            </Routes>
        </Router>
    );
};

export default App;
