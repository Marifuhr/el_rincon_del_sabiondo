module.exports = async function reviewValidator (reviewData) {
  const { IdUser, IdBook, rate, description } = reviewData;

  if (!IdUser || !IdBook || !rate || !description) {
    throw new Error('Todos los campos son obligatorios');
  }

  if (typeof rate !== 'number' || rate < 0 || rate > 5) {
    throw new Error('La calificación debe ser un número entre 0 y 5');
  }

  if (typeof description !== 'string' || description.trim().length < 10 || description.trim().length > 500) {
    throw new Error('La descripción debe tener entre 10 y 500 caracteres');
  }
};
