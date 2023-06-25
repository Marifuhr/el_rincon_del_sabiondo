import React from "react";
import Card from "../../components/Card/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import { getAllBooks } from "../../Redux/Action/Index";

export default function Home() {
  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state.allBooks);

  console.log(allBooks);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <div>
      <NavBar />

      <div style={{ marginTop: "20px" }}>{/* <Card props={books} /> */}</div>
    </div>
  );
}
