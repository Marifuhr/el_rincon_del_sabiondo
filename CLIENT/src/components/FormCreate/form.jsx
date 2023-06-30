import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createBook } from "../../Redux/Action/Index";
import { Link } from "react-router-dom";

import InputForm from './InputForm';
import "./form.css";
import validate from "./Validations/validation";
import AlertComponent from "../Alert/AlertComponent";

const initialStateBook = {
    title: "",
    authors: "",
    datePublication: "",
    isbn: "",
    publisher: "",
    description: "",
    price: 0,
    image: "",
    language: "",
    numberPages: "",
    category: "",
}

function FormCreate() {
    const dispatch = useDispatch();
    const [message, setMessage] = useState({type:'',messageValue:''});
    const refIndicator = useRef(false);
    const [book, setBook] = useState(initialStateBook);

    const changeMessage = (type, messageValue) => {
        setMessage({type,messageValue});
        
        if(!refIndicator.current){
            refIndicator.current = true;
            setTimeout(() => {
                setMessage(values => ({...values, messageValue:""}));
                refIndicator.current = false;
            }, 4000);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBook((prevState) => {
            const propsBook = {
                ...prevState,
                [name]: value,
            };
            changeMessage('error', validate(propsBook));
            return propsBook;
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const errorLocalForm = validate(book);
        changeMessage('error', errorLocalForm);
        
        if(errorLocalForm) return;

        //Envía la data por medio de la Action para crear un Libro
        const { authors, category, ...res } = book;
        const authorsArray = [authors];
        const categoryArray = [category];
        dispatch(createBook({ ...res, authors: authorsArray, category: categoryArray }));

        //Reset form
        changeMessage('success', `El libro ${book.title} ha sido creado con exito`);
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
                    {
                        message.messageValue && <AlertComponent {...message}/>
                    }
                    <button type="submit" className="form-button">Crear libro</button>
                </form>
            </div>
        </div>
    );
}

export default FormCreate;