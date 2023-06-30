import React from 'react';

const BookPage = ({ category }) => {
  // Aquí puedes obtener los datos de los libros de la categoría desde una API o definirlos estáticamente
  const books = [
    { id: 1, title: 'Libro 1', author: 'Autor 1',url:'https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' },
    { id: 2, title: 'Libro 2', author: 'Autor 2',url:'https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' },
    { id: 3, title: 'Libro 3', author: 'Autor 3',url:'https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' },
    // Agrega más libros según sea necesario
  ];
  return (
    <div>
      <h2>{category}</h2>
        {books.map(book => (
          <div class="card" key={book.id}>
            <img src={book.url} alt="" />
            <h3>{book.title}</h3>
            <p>Autor: {book.author}</p>
            <a href="#" class="btn btn-primary">+ ver mas</a>
          </div>
        ))}
    </div>
  );
/*
  return (
    <div>
      <h2>{category}</h2>
      <div class="card" >
      
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      
    </div>
  );
  */
};


export default BookPage;