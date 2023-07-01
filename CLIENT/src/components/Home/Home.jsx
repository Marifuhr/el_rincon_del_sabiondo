import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/card";
import SearchBar from "../SearchBar/SearchBar";
import { getAllBooks, filterByCategory } from "../../Redux/Action/Index";
import styles from "./Home.module.css";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const resultados = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const allBooks = useSelector((state) => state.allBooks);
  const filteredBooks = useSelector((state) => state.filtered);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 12;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch, currentPage, resultados]);

  useEffect(() => {
    setCurrentPage(1);
  }, [resultados, filteredBooks]);

  let renderBooks = [];
  filteredBooks
    ? (renderBooks = filteredBooks)
    : resultados
    ? (renderBooks = resultados)
    : (renderBooks = allBooks);

  const totalPages = Math.ceil(renderBooks.length / booksPerPage);
  const books = renderBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div className={styles.homePage}>
        <div className={styles.pageIndicator}>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            ⮜
          </button>
          {new Array(totalPages).fill("").map((_, index) => (
            <button
              className={currentPage === index + 1 ? styles.active : ""}
              onClick={() => handlePageChange(index + 1)}
              key={index}
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
        <div className={styles.boxCardBooks}>
          {books &&
            books.map((book) => <Card key={book.IdBook} props={book} />)}
        </div>
        
        <div className={styles.scrollToTopButton} onClick={handleScrollToTop}>
          Subir
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Footer />
      </div>
    </div>
  );
}

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Card from "../../components/Card/card";
// import SearchBar from "../SearchBar/SearchBar";
// import { getAllBooks, filterByCategory } from "../../Redux/Action/Index";
// import styles from "./Home.module.css";
// import Footer from "../../components/Footer/Footer";

// export default function Home() {
//   const resultados = useSelector((state) => state.search);
//   const dispatch = useDispatch();

//   const allBooks = useSelector((state) => state.allBooks);
//   const filteredBooks = useSelector((state) => state.filtered);
//   const [currentPage, setCurrentPage] = useState(1);
//   const booksPerPage = 9;

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   useEffect(() => {
//     dispatch(getAllBooks());
//   }, [dispatch, currentPage, resultados]);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [resultados, filteredBooks]);

//   let renderBooks = [];
//   filteredBooks
//     ? (renderBooks = filteredBooks)
//     : resultados
//     ? (renderBooks = resultados)
//     : (renderBooks = allBooks);

//   const totalPages = Math.ceil(renderBooks.length / booksPerPage);
//   const books = renderBooks.slice(
//     (currentPage - 1) * booksPerPage,
//     currentPage * booksPerPage
//   );

//   return (
//     <div>
//       <div>
//         <SearchBar />
//       </div>
//       <div className={styles.homePage}>
//         <div className={styles.pageIndicator}>
//           <button
//             disabled={currentPage === 1}
//             onClick={() => handlePageChange(currentPage - 1)}
//           >
//             ⮜
//           </button>
//           {new Array(totalPages).fill("").map((_, index) => (
//             <button
//               className={currentPage === index + 1 ? styles.active : ""}
//               onClick={() => handlePageChange(index + 1)}
//               key={index}
//             >
//               {index + 1}
//             </button>
//           ))}
//           <button
//             disabled={currentPage === totalPages}
//             onClick={() => handlePageChange(currentPage + 1)}
//           >
//             ⮞
//           </button>
//         </div>
//         <div className={styles.boxCardBooks}>
//           {books &&
//             books.map((book) => <Card key={book.IdBook} props={book} />)}
//         </div>
//       </div>
//       <div style={{ marginTop: "20px" }}>
//         <Footer />
//       </div>
//     </div>
//   );
// }
