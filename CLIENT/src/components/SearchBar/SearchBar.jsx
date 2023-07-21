
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchNameBooks } from "../../Redux/Action/Index";
import { Card } from "react-bootstrap";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();

  let handleInputChange = (e) => {
    e.preventDefault();
    dispatch(searchNameBooks(e.target.value));
  };

  return (
    <div className={styles.ctnSearchBar}>
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="Buscar por título"
      />
      {/* <button>Buscar</button> */}
    </div>
  );
}
