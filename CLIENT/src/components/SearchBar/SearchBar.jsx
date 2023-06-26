import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchNameBooks } from "../../Redux/Action/Index";

export default function SearchBar() {
  const dispatch = useDispatch();
  let resultado = useSelector((state) => state.search);
  const handleInputChange = (e) => {
    dispatch(searchNameBooks(e.target.value));
  };

  return (
    <div>
      <input onChange={handleInputChange} type="text" />
      <button>Buscar</button>
    </div>
  );
}
