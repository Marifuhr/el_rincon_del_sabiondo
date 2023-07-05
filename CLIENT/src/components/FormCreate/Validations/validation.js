const dictionaryNamesToLanguage = {
  title: "El titulo",
  authors: "El autor",
  image: "La imagen",
  language: "El lenguaje",
  numberPages: "El número de páginas",
  description: "La descripción",
  datePublication: "La fecha de publicación",
  publisher: "El editorial",
  category: "La categoría",
  isbn: "El código ISBN",
  price: "El precio",
}

const dictionaryErrorsInput = {
  title: "El título no debe entre 3 y 30 caracteres",
  isbn: `${dictionaryNamesToLanguage.isbn} debe tener entre 10 y 20 caracteres`
};

const validationsInput = {
  title: val => val.length > 3 && val.length <= 30 ,
  isbn: val => val.length > 10 && val.length <= 20,
};

const validate = (book) => {
  const entriesBookValues = Object.entries(book);
  let error = "";

  for(let [key,val] of entriesBookValues){
    if(!val){
      error = `Debes completar ${dictionaryNamesToLanguage[key]}`;
      break;
    }
  };

  if(!error){
    for(let [key,val] of entriesBookValues){
      const validationInput = validationsInput[key];
      if(!validationInput) continue;

      const valueValidate = validationInput(val);
      if(!valueValidate){
        error = dictionaryErrorsInput[key];
        break;
      }
    }
  }

  return error;
};

export default validate;
