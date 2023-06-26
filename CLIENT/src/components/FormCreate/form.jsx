import React, { useState, useEffect } from "react";
//import { createBook } from "./api";
import "./form.css";
import validate from "./Validations/validation";

function BookForm() {
  const [errors, setErrors] = useState({});
  const [book, setBook] = useState({
    title: "",
    description: "",
    datePublication: "",
    categories: "",
    price: 0,
  });

  // useEffect(() => {
  //   validate();
  // }, [book]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors(validate(book));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newBook = await createBook(book);
      console.log(newBook);
      setBook({
        title: "",
        description: "",
        datePublication: "",
        categories: "",
        price: 0,
      });
    } catch (error) {
      console.log(error);
    }
    setErrors(validate(book));
  };

  return (
    <div className="form-container">
      <div className="form">
      <form onSubmit={handleSubmit} className="book-form">
        <div>
          <h1>Add Book</h1>
        </div>

        <label>
          Título:
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        {!errors.title ? null : <p className="input-error">{errors.title}</p>}
        <label>
          Descripción:
          <textarea
            name="description"
            value={book.description}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        {!errors.description ? null : (
          <p className="input-error">{errors.description}</p>
        )}
        <label>
          Fecha de publicación:
          <input
            type="date"
            name="datePublication"
            value={book.datePublication}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        {!errors.datePublication ? null : (
          <p className="input-error">{errors.datePublication}</p>
        )}
        <label>
          Categorías:
          <input
            type="text"
            name="categories"
            value={book.categories}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        {!errors.categories ? null : (
          <p className="input-error">{errors.categories}</p>
        )}
        <label>
          Precio:
          <input
            type="number"
            name="price"
            value={book.price}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        {!errors.price ? null : <p className="input-error">{errors.price}</p>}

        <button type="submit" className="form-button">
          Crear libro
        </button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
