import React from "react";
import Card from "../../components/Card/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import { getAllBooks } from "../../Redux/Action/Index";
import Pagination from "../Pagination/Pagination";
import style from "./Home.module.css";


export default function Home(props) {

  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state.allBooks);

  console.log(allBooks);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  const [page, setPage] = useState(1);
  const [booksPage, setBooksPage] = useState();
  const [paged, setPaged] = useState(1);

  const books = allBooks.slice((page - 1) * booksPage, page * booksPage);

  const pages = (p) => {
    setPaged(p);
    setPage(p);
  }

  const back = () => {
    setPaged(paged - 1);
    setPage(paged - 1);

  }
  const next = () => {
    setPaged(paged + 1);
    setPage(paged + 1);

  }
 


  return (
    <div>
      <NavBar />

      <div style={{ marginTop: "20px" }}>{/* <Card props={books} /> */}</div>
      {
        props.allBooks.length > 9?
          <div className={style.pag}>
            <Pagination booksPage={booksPage} allBooks={props.allBooks.length} paged={paged} setPage={setPage} page={page}></Pagination>
            <span className={style.actual}> {page} of {Math.ceil(props.allBooks.length / booksPage)} </span>
          </div> :
          <div><span className={style.actual}> {page} of {Math.ceil(props.allBooks.length / booksPage)} </span>

          </div>
      }
    </div>
  );
}
