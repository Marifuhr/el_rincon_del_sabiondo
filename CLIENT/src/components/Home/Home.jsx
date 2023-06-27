import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/card";
import NavBar from "../../components/NavBar/NavBar";
import { getAllBooks, filterByCategory } from "../../Redux/Action/Index";
//import Pagination from "../Pagination/Pagination";
import styles from "./Home.module.css";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state.allBooks);
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 9;
  //const totalPages = Math.ceil(allBooks.length / booksperPage);

  //console.log(allBooks);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(filterByCategory(selectedCategory));
    }
  }, [dispatch, selectedCategory]);

  const filteredBooks = selectedCategory
    ? allBooks.filter((book) => book.category === selectedCategory)
    : allBooks;

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const books = filteredBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  //console.log(books);

  return (
    <div>
      <div>
        <NavBar />
        {/* Resto del código */}
        <div className={styles.boxCardBooks}>
          {books.map((book) => (
            <Card key={book.IdBook} props={book} />
          ))}
        </div>
        {/* Resto del código */}
      </div>
      <div className={styles.homePage}>
        <div className={styles.boxCardBooks}>
          {/* {/renderizar una Card por cada book/} */}
          {books &&
            books.map((book) => <Card key={book.IdBook} props={book} />)}
        </div>
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
      </div>
      <div style={{ marginTop: "20px" }}>
        <Footer />
      </div>
    </div>
  );
}

// import Card from "../../components/Card/card";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import NavBar from "../../components/NavBar/NavBar";
// import { getAllBooks } from "../../Redux/Action/Index";
// //import Pagination from "../Pagination/Pagination";
// import styles from "./Home.module.css";
// import Footer from "../../components/Footer/Footer";

// export default function Home() {

//   const dispatch = useDispatch();
//   const allBooks = useSelector((state) => state.allBooks);
//   const [currentPage, setCurrentPage] = useState(1);

//   const booksperPage = 9;
//   const totalPages = Math.ceil(allBooks.length / booksperPage);

//   //console.log(allBooks);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   useEffect(() => {
//     dispatch(getAllBooks());
//   }, [dispatch, currentPage]);

//   const books = allBooks.slice((currentPage - 1) * booksperPage, currentPage * booksperPage);

//   //console.log(books);

//   return (
//     <div>
//       <div><NavBar /></div>
//       <div className={styles.homePage}>
//         <div className={styles.boxCardBooks}>
//           {/* {/renderizar una Card por cada book/} */}
//           {books && books.map((book) => (
//             <Card key={book.IdBook} props={book} />
//           ))}
//         </div>
//         <div className={styles.pageIndicator}>
//           <button
//             disabled={currentPage === 1}
//             onClick={() => handlePageChange(currentPage - 1)}
//           >
//             ⮜
//           </button>
//           {
//             new Array(totalPages).fill('').map( (_,index) => (
//               <button
//                 className={currentPage === index + 1 ? styles.active : ''}
//                 onClick={() => handlePageChange(index + 1)}
//                 key={index}
//               >
//                 {index + 1}
//               </button>
//             ))
//           }
//           <button
//             disabled={currentPage === totalPages}
//             onClick={() => handlePageChange(currentPage + 1)}
//           >
//             ⮞
//           </button>
//         </div>
//       </div>
//       <div style={{ marginTop: "20px" }}>
//         <Footer />
//         </div>
//     </div>
//   );
// }
