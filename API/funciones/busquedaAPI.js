const fetch = require("node-fetch");
const { Client } = require("pg");

const connectionString = "postgres://postgres:admin@localhost:5432/el_rincon_del_sabiondo";
const client = new Client({
  connectionString: connectionString,
});

const busqueda = async () => {
  await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=''+inauthor:'aldous huxley'&key=%20YOUR_API_KEY"
  )
    .then((response) => response.json())
    .then(async (libro) => {
      let c = 0;
      let obj = {
        id: libro.items[c].id, // Agregar el ID
        titulo: libro.items[c].volumeInfo.title,
        autor: libro.items[c].volumeInfo.authors[0],
        editorial: libro.items[c].volumeInfo.publisher,
        descripcion: libro.items[c].volumeInfo.description,
        fecha: libro.items[c].volumeInfo.publishedDate,
        paginas: libro.items[c].volumeInfo.pageCount,
        generos: libro.items[c].volumeInfo.categories[0],
        img: libro.items[c].volumeInfo.imageLinks.thumbnail,
        idioma: libro.items[c].volumeInfo.language,
        precio: libro.items[c].saleInfo.listPrice.amount,
      };

      await client.connect();
      const insertQuery =
        "INSERT INTO productos (id, titulo, autor, editorial, descripcion, fecha, paginas, generos, img, idioma, precio) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";
      const values = [
        obj.id,
        obj.titulo,
        obj.autor,
        obj.editorial,
        obj.descripcion,
        obj.fecha,
        obj.paginas,
        obj.generos,
        obj.img,
        obj.idioma,
        obj.precio,
      ];
      await client.query(insertQuery, values);
      await client.end();
    });
};

busqueda();
