import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBook } from "../../Redux/Action/Index";
import { Link } from "react-router-dom";

import InputForm from './InputForm';
import "./form.css";
import validate from "./Validations/validation";

const initialStateBook = {
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
}

function FormCreate() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [book, setBook] = useState(initialStateBook);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBook((prevState) => {
            const propsBook = {
                ...prevState,
                [name]: value,
            };
            setErrors(validate(propsBook));
            return propsBook;
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors(validate(book));

        if (Object.keys(errors).length === 0) {
            alert("Falta completar campos");
            return;
        }

        //Envía la data por medio de la Action para crear un Libro
        const { authors, category, ...res } = book;
        const authorsArray = [authors];
        const categoryArray = [category];
        dispatch(createBook({ ...res, authors: authorsArray, category: categoryArray }));

        //Reset form
        setBook(initialStateBook);
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
                    <h1>Add Book</h1>
                    <InputForm
                        title="Titulo:"
                        name="title"
                        value={book.title}
                        onChange={handleChange}
                        classStyles="form-input"
                    />
                    <InputForm
                        title="Autor:"
                        name="authors"
                        value={book.authors}
                        onChange={handleChange}
                        classStyles="form-input"
                    />
                    <InputForm
                        title="Fecha de publicación:"
                        type="date"
                        name="datePublication"
                        value={book.datePublication}
                        onChange={handleChange}
                        classStyles="form-input"
                    />
                    <InputForm
                        title="ISBN:"
                        type="number"
                        name="isbn"
                        value={book.isbn}
                        onChange={handleChange}
                        classStyles="form-input"
                    />
                    <InputForm
                        title="Editorial:"
                        name="publisher"
                        value={book.publisher}
                        onChange={handleChange}
                        classStyles="form-input"
                    />
                    <InputForm
                        mode="textarea"
                        title="Descripción:"
                        name="description"
                        value={book.description}
                        onChange={handleChange}
                        classStyles="form-input"
                    />
                    <InputForm
                        title="Precio:"
                        name="price"
                        value={book.price}
                        onChange={handleChange}
                        classStyles="form-input"
                    />
                    <InputForm
                        title="image:"
                        name="image"
                        value={book.image}
                        onChange={handleChange}
                        classStyles="form-input"
                    />
                    <InputForm
                        title="Idioma (es,en):"
                        name="language"
                        value={book.language}
                        onChange={handleChange}
                        classStyles="form-input"
                    />
                    <InputForm
                        title="Número de Páginas:"
                        type="number"
                        name="numberPages"
                        value={book.numberPages}
                        onChange={handleChange}
                        classStyles="form-input"
                    />
                    <InputForm
                        title="Categorías:"
                        name="category"
                        value={book.category}
                        onChange={handleChange}
                        classStyles="form-input"
                    />
                    <button type="submit" className="form-button">Crear libro</button>
                </form>
            </div>
        </div>
    );
}

export default FormCreate;