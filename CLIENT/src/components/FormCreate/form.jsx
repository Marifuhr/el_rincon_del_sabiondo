import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBook } from "../../Redux/Action/Index";
import { Link } from "react-router-dom";
import "./form.css";
import validate from "./Validations/validation";

function FormCreate() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [book, setBook] = useState({
    title: "",
    authors: "",
    image: "",
    language: "",
    numberPages: "",
    description: "",
    datePublication: "",
    publisher: "",
    category: "",
    isbn: "",
    price: 0,
  });

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
  //   const errorsForm = [...event.target].reduce((init, input) => {
  //   const val = input.value;
	// if(!val){
	// 	return [...init, 'falta valor'];
	// }
	// return init; 
  //   }, []);
  //   if (errorsForm.length) {
  //     alert("no puedes crear un libro");
  //     return;
  //   }
    setErrors(validate(book));
    if (Object.keys(errors).length === 0) {
      alert("Falta completar campos");
      return;
    }

    try {
      const { authors, category, ...res } = book;
      const authorsArray = [authors];
      const categoryArray = [category];
      await dispatch(
        createBook({ ...res, authors: authorsArray, category: categoryArray })
      );

      setBook({
        title: "",
        authors: "",
        image: "",
        language: "",
        numberPages: "",
        description: "",
        datePublication: "",
        publisher: "",
        category: "",
        isbn: "",
        price: 0,
      });
     // alert("Libro creado con éxito");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="form-container">
      <div className="form">
        <div className="form-button">
          <Link to="/home">
            <button>Back</button>
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="book-form">
          <div>
            <h1>Add Book</h1>
          </div>
          <div className="divF">
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
            {!errors.title ? null : (
              <p className="input-error">{errors.title}</p>
            )}
            <label>
              Author:
              <input
                name="authors"
                value={book.authors}
                onChange={handleChange}
                className="form-input"
              />
            </label>
            {!errors.authors ? null : (
              <p className="input-error">{errors.authors}</p>
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
               isbn:
              <input
                name="isbn"
                value={book.isbn}
                onChange={handleChange}
                className="form-input"
              />
            </label>
            {!errors.isbn ? null : (
              <p className="input-error">{errors.isbn}</p>
            )}
            <label>
              Editorial:
              <input
                name="publisher"
                value={book.publisher}
                onChange={handleChange}
                className="form-input"
              />
            </label>
            {!errors.publisher ? null : (
              <p className="input-error">{errors.publisher}</p>
            )}
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
              Precio:
              <input
                type="number"
                name="price"
                value={book.price}
                onChange={handleChange}
                className="form-input"
              />
            </label>
            {!errors.price ? null : (
              <p className="input-error">{errors.price}</p>
            )}
          </div>

          <div className="div2">
            <label>
              image:
              <input
                name="image"
                value={book.image}
                onChange={handleChange}
                className="form-input"
              />
            </label>
            {!errors.image ? null : (
              <p className="input-error">{errors.image}</p>
            )}

            <label>
              Language:
              <input
                name="language"
                value={book.language}
                onChange={handleChange}
                className="form-input"
              />
            </label>
            {!errors.language ? null : (
              <p className="input-error">{errors.language}</p>
            )}

            <label>
              Number Pages:
              <input
                name="numberPages"
                value={book.numberPages}
                onChange={handleChange}
                className="form-input"
              />
            </label>
            {!errors.numberPages ? null : (
              <p className="input-error">{errors.numberPages}</p>
            )}

            <label>
              Categorías:
              <input
                type="text"
                name="category"
                value={book.category}
                onChange={handleChange}
                className="form-input"
              />
            </label>
            {!errors.category ? null : (
              <p className="input-error">{errors.category}</p>
            )}
          </div>

          <button type="submit" className="form-button">
            Crear libro
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormCreate;