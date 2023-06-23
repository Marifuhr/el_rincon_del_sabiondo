import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BookCategory from '../BookCategory/BookCategory';
import style from "../CarruselLink/carruselLink.module.css";
//estos datos sacar de la data
const categories = [
    { id: 1, name: 'Ficción', url: '/ficcion',description: 'Aquí encontrarás libros para niños de todas las edades.' },
    { id: 2, name: 'Misterio', url: '/misterio',description: 'Aquí encontrarás libros para niños de todas las edades.' },
    { id: 3, name: 'Romance', url: '/romance',description: 'Aquí encontrarás libros para niños de todas las edades.' },
    { id: 4, name: 'Fantasía', url: '/fantasia',description: 'Aquí encontrarás libros para niños de todas las edades.' },
    { id: 1, name: 'Ficción', url: '/ficcion',description: 'Aquí encontrarás libros para niños de todas las edades.' },
    { id: 2, name: 'Misterio', url: '/misterio',description: 'Aquí encontrarás libros para niños de todas las edades.' },
    { id: 3, name: 'Romance', url: '/romance',description: 'Aquí encontrarás libros para niños de todas las edades.' },
    { id: 4, name: 'Fantasía', url: '/fantasia',description: 'Aquí encontrarás libros para niños de todas las edades.' },
  ];

function CarruselLink(props) {
    const groupSize = 4;
    const categoryGroups = categories.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / groupSize);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

    return (
        <div>
      <Carousel>
        {categoryGroups.map((categoryGroup, index) => (
          <Carousel.Item key={index} >
            <div className={`row ${style.row}`}>
              {categoryGroup.map((category) => (
                <div className={`${style["col-md-3"]}`} key={category.id}>
                  <BookCategory
                    key={category.id}
                    category={category.name}
                    url={category.url}
                  />
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    );
}
export default CarruselLink;