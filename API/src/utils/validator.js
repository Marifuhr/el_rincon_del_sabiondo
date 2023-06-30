async function validator ({ title, description, language, datePublication, publisher, numberPages, rate, category, authors, image }) {
  let errors = [];
  console.log(title)
  if (!title || title.length <= 0) {
    errors.push({ title : 'The title cannot be empty'});    
  }
  if (title?.length > 100) {
    errors.push({ title : 'The title cannot be longer than 100 characters'});    
  }
  if (!Array.isArray(authors)) {
    errors.push({ authors : 'The authors must be an array'});
  }
  if (!authors) {
    errors.push({ authors : 'The authors cannot be empty'});
  }
  authors?.map((author) => {
    if (author.length > 250) {
      errors.push({ authors : 'The authors cannot be longer than 250 characters'});
    }
  });
  if (!category) {
    errors.push({ category : 'The categories cannot be empty'});
  }
  if (!Array.isArray(category)) {
    errors.push({ category : 'The categories must be an array'});
  }
  if (!language) {
    errors.push({ language : 'The language cannot be empty'});
  }
  if (!datePublication) {
    errors.push({ datePublication : 'The date of publication cannot be empty'});
  }
  if (!publisher) {
    errors.push({ publisher : 'The publisher cannot be empty'});
  }
  if (publisher?.length > 100) {
    errors.push({ publisher : 'The publisher cannot be longer than 100 characters'});    
  }
  if (!numberPages) {
    errors.push({ numberPages : 'The number of pages cannot be empty'});
  }
  if (!parseInt(numberPages) || numberPages <= 0) {
    errors.push({ numberPages : 'The number of pages must be an integer greater than 0'});
  }
  if (parseInt(rate) < 0 || parseInt(rate) > 10) {
    errors.push({ rate : 'The rate cannot be empty or greater than 10'});
  }
  // if (!ISBN) {
  //   errors.push({ ISBN : 'The ISBN cannot be empty'});
  // }
  if (!description) {
    errors.push({ description : 'The description cannot be empty'});
  }
  if (description?.length > 5000 || description.length <= 0) {
    errors.push({ description : 'The description cannot be longer than 5000 characters or empty'});
  }
  if (!image) {
    errors.push({ image : 'The image cannot be empty'});    
  }
  console.log(errors)
  return errors;
}

module.exports = validator