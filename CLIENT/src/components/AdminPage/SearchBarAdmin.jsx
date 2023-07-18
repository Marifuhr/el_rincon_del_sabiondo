import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchNameUser } from "../../Redux/Action/Index";
import styles from "../SearchBar/SearchBar.module.css";

export default function SearchBarAdmin() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
//console.log(input)
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    dispatch(searchNameUser(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(searchNameUser(input));
    }
    console.log(input);
    
  };

  return (
    <div className={styles.ctnSearchBar}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search by name..."
      />
      <button onSubmit={handleSubmit}>Buscar</button>
    </div>
  );
}



