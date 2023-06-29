const validate = (book) => {
  let errors = {};

  if (!book.title) {
    errors.title = "El título es requerido";
  }
  if (book.title.length < 3) {
    errors.title = "El título no debe tener menos de 3 caracteres";
  }
  if (book.title.length > 30) {
    errors.title = "El título no debe exceder los 30 caracteres";
  }

  if (!book.authors) {
    errors.authors = "El author es requerido";
  }
  if (!book.publisher) {
    errors.publisher = "La editorial es requerida";
  }
  if (!book.image) {
    errors.image = "La image es requerida";
  }

  if (!book.language) {
    errors.language = "El lenguaje es requerido";
  }
  if (!book.numberPages) {
    errors.numberPages = "El numero de paginas es requerida";
  }
  if (!book.description) {
    errors.description = "La descripción es requerida";
  }

  if (!book.datePublication) {
    errors.datePublication = "La fecha de publicación es requerida";
  }

  if (!book.category) {
    errors.category = "Las categorías son requeridas";
  }
  if(!book.ISBN) {
    errors.ISBN = "El ISBN es requerido";
  }
if (!book.ISBN.length < 10) {
    errors.ISBN = "No debe tener menos de 10 caracteres";
  }
if (!book.ISBN.length > 20) {
    errors.ISBN = "No debe excede los 20 caracteres";
  }
  if (!book.price) {
    errors.price = "El precio es requerido";
  }
  return errors;
};

export default validate;
