import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createBook } from "../../Redux/Action/Index";
import "./form.css";
import validate from "./Validations/validation";

function FormCreate() {
  const dispatch = useDispatch();
  // const allBooks = useSelector((state) => state.allBooks);
  // console.log(allBooks);
  const [errors, setErrors] = useState({});
  const [book, setBook] = useState({
    title: "",
    author: "",
    image: "",
    lenguage: "",
    numberPages: "",
    description: "",
    datePublication: "",
    category: "",
    price: 0,
  });

  // useEffect(() => {
  //   dispatch(allBooks);
  // }, []);

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
    if (
      Object.keys(errors).length === 0 &&
      book.title !== "" &&
      book.author !== ""
    )
      try {
        const newBook = await dispatch(createBook(book));
        console.log(newBook);
        setBook({
          title: "",
          author: "",
          image: "",
          lenguage: "",
          numberPages: "",
          description: "",
          datePublication: "",
          category: "",
          price: 0,
        });
        alert("¡El libro se creó correctamente!");
      } catch (error) {
        console.log(error.message);
        alert("check the fields");
      }
    setErrors(validate(book));
  };

  return (
    <div className="form-container">
      <div className="form">
        <Link to="/home">
          <div className="form-button2">
            <button>
              <img
                className="star"
                src="src\assets\image\flecha.png"
                alt="volver"
              />
            </button>
          </div>
        </Link>

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
                name="author"
                value={book.author}
                onChange={handleChange}
                className="form-input"
              />
            </label>
            {!errors.author ? null : (
              <p className="input-error">{errors.author}</p>
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
              Lenguage:
              <input
                name="lenguage"
                value={book.lenguage}
                onChange={handleChange}
                className="form-input"
              />
            </label>
            {!errors.lenguage ? null : (
              <p className="input-error">{errors.lenguage}</p>
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
                name="categories"
                value={book.categories}
                onChange={handleChange}
                className="form-input"
              />
            </label>
            {!errors.categories ? null : (
              <p className="input-error">{errors.categories}</p>
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
