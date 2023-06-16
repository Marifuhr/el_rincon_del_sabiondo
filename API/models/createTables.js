const { Client } = require('pg');

// Configura la conexión a la base de datos
const client = new Client({
  user: 'postgres',
  password: 'admin',
  host: 'localhost',
  port: 5432,
  database: 'libros',
});

// Conecta al cliente de PostgreSQL
client.connect()
  .then(() => {
    console.log('Conexión exitosa a PostgreSQL');
    createTables();
  })
  .catch((error) => {
    console.error('Error al conectar a PostgreSQL:', error);
    client.end();
  });

// Crea las tablas en la base de datos
function createTables() {
  const query = `
    CREATE TABLE IF NOT EXISTS libreria (
      id SERIAL PRIMARY KEY,
      titulo VARCHAR(255) NOT NULL,
      autor VARCHAR(255) NOT NULL,
      editorial VARCHAR(255) NOT NULL,
      descripcion VARCHAR(255) NOT NULL,
      fecha DATE NOT NULL,
      paginas INTEGER NOT NULL,
      generos VARCHAR(255)[] NOT NULL,
      img VARCHAR(255) NOT NULL,
      idioma VARCHAR(255) NOT NULL,
      stock INTEGER NOT NULL,
      precio INTEGER NOT NULL,
      review VARCHAR(255)[]
    );
  `;

  // Ejecuta la consulta para crear la tabla
  client.query(query)
    .then(() => {
      console.log('Tabla "libreria" creada correctamente');
      client.end();
    })
    .catch((error) => {
      console.error('Error al crear la tabla:', error);
      client.end();
    });
}
