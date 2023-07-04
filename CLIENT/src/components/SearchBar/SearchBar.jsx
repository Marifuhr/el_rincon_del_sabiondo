// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { searchNameBooks } from "../../Redux/Action/Index";
// import styles from './SearchBar.module.css';

// export default function SearchBar() {
//   const dispatch = useDispatch();
//   let resultado = useSelector((state) => state.search);
//   const handleInputChange = (e) => {
//     dispatch(searchNameBooks(e.target.value));
//     console.log(resultado);
//   };

//   return (
//     <div className={styles.ctnSearchBar}>
//       <input onChange={handleInputChange} type="text" />
//       <button>Buscar</button>
//     </div>
//   );
// }
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { searchNameBooks } from "../../Redux/Action/Index";
// import styles from './SearchBar.module.css';
// import { Card } from "react-bootstrap";

// export default function SearchBar() {
//   const dispatch = useDispatch();
//   const resultados = useSelector((state) => state.search);
//   const handleInputChange = (e) => {
//     dispatch(searchNameBooks(e.target.value));
//   };

//   useEffect(() => {
//     console.log(resultados);
//   }, [resultados]);

//   return (
//     <div className={styles.ctnSearchBar}>
//       <input onChange={handleInputChange} type="text" />
//       <button>Buscar</button>
//       {resultados.map((resultados) => (
//         <div key={resultados.id}>{resultados.title}</div>
//       ))}
//     </div>
//   );
// }
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchNameBooks } from "../../Redux/Action/Index";
import { Card } from "react-bootstrap";
import styles from './SearchBar.module.css';

export default function SearchBar() {
  const dispatch = useDispatch();

 
  let handleInputChange = (e) => {
    e.preventDefault();
    dispatch(searchNameBooks(e.target.value));
  };
    

  return (
    <div className={styles.ctnSearchBar}>
      <input onChange={handleInputChange}
        type="text"
        placeholder="Search by name..." />
      <button>Buscar</button>
    </div>
  );
}
