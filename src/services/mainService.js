const API_URL = 'https://reactnd-books-api.udacity.com/books';
const headers = {
    'Accept': 'application/json',
    'Authorization': 'token' 
};

// Función para obtener todos los libros
export const getBooks = async () => {
    try {
        const response = await fetch(API_URL, { headers });
        if (!response.ok) {
            const errorText = await response.text(); 
            console.error('Error fetching books:', response.status, errorText);
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data; // Retorna los datos obtenidos
    } catch (error) {
        console.error('Error:', error);
        return []; 
    }
};

// Función para obtener un libro por ID
export const getBookById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, { headers });
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error fetching book by ID:', response.status, errorText);
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data; // Retorna los datos obtenidos
    } catch (error) {
        console.error('Error:', error);
        return null; 
    }
};
