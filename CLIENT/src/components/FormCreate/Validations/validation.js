const dictionaryNamesToLanguage = {
  title: "Titulo",
  authors: "autor",
  image: "imagen",
  language: "lenguaje",
  numberPages: "Número de páginas",
  description: "Descripción",
  datePublication: "Fecha de Publicación",
  publisher: " Editorials",
  category: "Categoría",
  isbn: "Código ISBN",
  price: "Precio",
}

const dictionaryErrorsInput = {
  title: "El título no debe entre 3 y 30 caracteres",
  isbn: `El ${dictionaryNamesToLanguage.isbn} debe tener entre 10 y 20 caracteres`
};

const validationsInput = {
  title: val => val.length > 3 && val.length <= 30 ,
  isbn: val => val.length > 10 && val.length <= 20,
}

const validate = (book) => {
  let error = "";
  
  for(let [key,val] in Object.entries(book)){
    if(!val){
      error = `El ${dictionaryNamesToLanguage(key)} es requerido`;
      break;
    }
  };

  if(!error){
    for(let [key,val] in Object.entries(book)){
      const validationInput = validationsInput[key];
      if(!validationInput) continue;
      
      const valueValidate = validationInput[key](val);
      if(!valueValidate){
        error = dictionaryErrorsInput[key];
        break;
      }
    }
  }

  return error;
};

export default validate;
