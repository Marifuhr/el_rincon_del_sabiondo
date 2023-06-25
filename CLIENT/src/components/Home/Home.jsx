import React from 'react'
import Card from '../../components/Card/card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar'

export default function Home() {

  const [books, setBooks] = useState([]);


  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/books');
        console.log(response.data); // Asegúrate de que la respuesta contenga los datos esperados
        setBooks(response.data.books[0]);
        console.log(books)
        console.log(response.data.books[0])
      } catch (error) {
        console.error('Error al obtener los libros:', error);
      }
    };

    getBooks();
  }, []);
  return (
    <div>
      <NavBar />

      <div style={{ marginTop: "20px" }}>

        <Card props={books} />

      </div>
    </div>
  )
}
