
// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "../../components/Card/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import { getAllBooks } from "../../Redux/Action/Index";
//import Pagination from "../Pagination/Pagination";
import styles from "./Home.module.css";
import Footer from "../../components/Footer/Footer";



export default function Home() {

  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state.allBooks);
  const [currentPage, setCurrentPage] = useState(1);

  const booksperPage = 9;
  const totalPages = Math.ceil(allBooks.length / booksperPage);



  //console.log(allBooks);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch, currentPage]);

  const books = allBooks.slice((currentPage - 1) * booksperPage, currentPage * booksperPage);

  //console.log(books);



  return (
    <div>
      <div><NavBar /></div>
      <div className={styles.homePage}>
        <div className={styles.boxCardBooks}>
          {/* {/renderizar una Card por cada book/} */}
          {books.map((book) => (
            <Card key={book.IdBokk} props={book} />
          ))}
        </div>
        <div className={styles.pageIndicator}>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            ⮜
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? styles.active : ''}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            ⮞
          </button>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Footer />
        </div>
    </div>
  );
}