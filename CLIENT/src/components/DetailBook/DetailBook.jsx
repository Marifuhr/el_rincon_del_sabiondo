// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getDetailBooks } from "../../Redux/Action/Index";
// import { useParams } from "react-router-dom";
// import ButtonVolver from "../../elements/ButtonVolver";

// function DetailBook() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getDetailBooks(id));
//   }, [dispatch, id]);
//   const book = useSelector((state) => state.detailBooks);
//   const author =
//     book.Authors && book.Authors.length > 0
//       ? book.Authors[0].name
//       : "Unknown Author";
//   const category =
//     book.Categories && book.Categories.length > 0
//       ? book.Categories[0].name
//       : "Unknown Category";
//   return (
//     <div>
//       <button className="btn-back">
//         <ButtonVolver />
//       </button>
//       <div class="container">
//         <div class="row justify-content-center">
//           <div class="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
//             <div class="card border-0 shadow">
//               <img src={book.image} alt="..." />
//               <div class="card-body p-1-9 p-xl-5">
//                 <div class="mb-4">
//                   <h3 class="h4 mb-0">Autor: {author}</h3>
//                   <br />
//                   <h3 class="h4 mb-0">Libro:{book.title}</h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="col-lg-8">
//             <div class="ps-lg-1-6 ps-xl-5">
//               <div class="mb-5 wow fadeIn">
//                 <div class="text-start mb-1-6 wow fadeIn">
//                   <h2 class="mb-0 text-primary">Descripcion Libro</h2>
//                 </div>
//                 <p>{book.description}</p>
//               </div>
//               <div class="mb-5 wow fadeIn">
//                 <div class="text-start mb-1-6 wow fadeIn">
//                   <h2 class="mb-0 text-primary">Ficha técnica</h2>
//                 </div>
//                 <div class="row mt-n4">
//                   <div class="col-sm-6 col-xl-4 mt-4">
//                     <div class="card text-center border-0 rounded-3">
//                       <div class="card-body">
//                         <i class="ti-bookmark-alt icon-box medium rounded-3 mb-4"></i>
//                         <h3 class="h5 mb-3">Idioma</h3>
//                         <p class="mb-0">{book.language}</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="col-sm-6 col-xl-4 mt-4">
//                     <div class="card text-center border-0 rounded-3">
//                       <div class="card-body">
//                         <i class="ti-pencil-alt icon-box medium rounded-3 mb-4"></i>
//                         <h3 class="h5 mb-3">Numero de Paginas</h3>
//                         <p class="mb-0">{book.numberPages}</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="col-sm-6 col-xl-4 mt-4">
//                     <div class="card text-center border-0 rounded-3">
//                       <div class="card-body">
//                         <i class="ti-medall-alt icon-box medium rounded-3 mb-4"></i>
//                         <h3 class="h5 mb-3">Categorias {category}</h3>
//                         <p class="mb-0"></p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DetailBook;




//-------------- cambio con autentificacion--------------

import React, { useEffect, useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useSelector, useDispatch } from "react-redux";
import { getDetailBooks } from "../../Redux/Action/Index";
import { useParams } from "react-router-dom";
import ButtonVolver from "../../elements/ButtonVolver";
import { Link } from "react-router-dom";
import axios from "axios";
import { LoginButton } from "../../components/Login/Login";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Box,
  Flex,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Image,
} from "@chakra-ui/react";
function DetailBook() {
  const [preferenceId, setPreferenceId] = useState(null);
  const { user, isAuthenticated } = useAuth0();

  initMercadoPago("TEST-11820fb6-1a46-4858-a769-dc0c4de0f1b2");
  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/create_preference",
        {
          description: "libros",
          price: 100,
          quantity: 1,
        }
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };
  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailBooks(id));
  }, [dispatch, id]);
  const book = useSelector((state) => state.detailBooks);
  const author =
    book.Authors && book.Authors.length > 0
      ? book.Authors[0].name
      : "Unknown Author";
  const category =
    book.Categories && book.Categories.length > 0
      ? book.Categories[0].name
      : "Unknown Category";
  return (
    <div>
      {!isAuthenticated && <LoginButton />}

      {isAuthenticated && (
        <>
          <button onClick={handleBuy}>Comprar</button>
          {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </>
      )}

      <button className="btn-back">
        <ButtonVolver />
      </button>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
            <div class="card border-0 shadow">
              <img src={book.image} alt="..." />
              <div class="card-body p-1-9 p-xl-5">
                <div class="mb-4">
                  <h3 class="h4 mb-0">Autor: {author}</h3>
                  <br />
                  <h3 class="h4 mb-0">Libro:{book.title}</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="ps-lg-1-6 ps-xl-5">
              <div class="mb-5 wow fadeIn">
                <div class="text-start mb-1-6 wow fadeIn">
                  <h2 class="mb-0 text-primary">Descripcion Libro</h2>
                </div>
                <p>{book.description}</p>
              </div>
              <div class="mb-5 wow fadeIn">
                <div class="text-start mb-1-6 wow fadeIn">
                  <h2 class="mb-0 text-primary">Ficha técnica</h2>
                </div>
                <div class="row mt-n4">
                  <div class="col-sm-6 col-xl-4 mt-4">
                    <div class="card text-center border-0 rounded-3">
                      <div class="card-body">
                        <i class="ti-bookmark-alt icon-box medium rounded-3 mb-4"></i>
                        <h3 class="h5 mb-3">Idioma</h3>
                        <p class="mb-0">{book.language}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-4 mt-4">
                    <div class="card text-center border-0 rounded-3">
                      <div class="card-body">
                        <i class="ti-pencil-alt icon-box medium rounded-3 mb-4"></i>
                        <h3 class="h5 mb-3">Numero de Paginas</h3>
                        <p class="mb-0">{book.numberPages}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-4 mt-4">
                    <div class="card text-center border-0 rounded-3">
                      <div class="card-body">
                        <i class="ti-medall-alt icon-box medium rounded-3 mb-4"></i>
                        <h3 class="h5 mb-3">Categorias {category}</h3>
                        <p class="mb-0"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <button onClick={handleBuy}>Comprar</button>
              {preferenceId && <Wallet initialization={{ preferenceId }} />} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailBook;




// import React, { useEffect, useState } from "react";
// import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
// import { useSelector, useDispatch } from "react-redux";
// import { getDetailBooks } from "../../Redux/Action/Index";
// import { useParams } from "react-router-dom";
// import ButtonVolver from "../../elements/ButtonVolver";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import {
//   Box,
//   Flex,
//   Heading,
//   Text,
//   UnorderedList,
//   ListItem,
//   Image,
// } from "@chakra-ui/react";
// function DetailBook() {
//   const [preferenceId, setPreferenceId] = useState(null);

//   initMercadoPago("TEST-11820fb6-1a46-4858-a769-dc0c4de0f1b2");
//   const createPreference = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/create_preference",
//         {
//           description: "libros",
//           price: 100,
//           quantity: 1,
//         }
//       );
//       const { id } = response.data;
//       return id;
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const handleBuy = async () => {
//     const id = await createPreference();
//     if (id) {
//       setPreferenceId(id);
//     }
//   };

//   const { id } = useParams();
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getDetailBooks(id));
//   }, [dispatch, id]);
//   const book = useSelector((state) => state.detailBooks);
//   const author =
//     book.Authors && book.Authors.length > 0
//       ? book.Authors[0].name
//       : "Unknown Author";
//   const category =
//     book.Categories && book.Categories.length > 0
//       ? book.Categories[0].name
//       : "Unknown Category";
//   return (
//     <div>
//       <button className="btn-back">
//         <ButtonVolver />
//       </button>
//       <div class="container">
//         <div class="row justify-content-center">
//           <div class="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
//             <div class="card border-0 shadow">
//               <img src={book.image} alt="..." />
//               <div class="card-body p-1-9 p-xl-5">
//                 <div class="mb-4">
//                   <h3 class="h4 mb-0">Autor: {author}</h3>
//                   <br />
//                   <h3 class="h4 mb-0">Libro:{book.title}</h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="col-lg-8">
//             <div class="ps-lg-1-6 ps-xl-5">
//               <div class="mb-5 wow fadeIn">
//                 <div class="text-start mb-1-6 wow fadeIn">
//                   <h2 class="mb-0 text-primary">Descripcion Libro</h2>
//                 </div>
//                 <p>{book.description}</p>
//               </div>
//               <div class="mb-5 wow fadeIn">
//                 <div class="text-start mb-1-6 wow fadeIn">
//                   <h2 class="mb-0 text-primary">Ficha técnica</h2>
//                 </div>
//                 <div class="row mt-n4">
//                   <div class="col-sm-6 col-xl-4 mt-4">
//                     <div class="card text-center border-0 rounded-3">
//                       <div class="card-body">
//                         <i class="ti-bookmark-alt icon-box medium rounded-3 mb-4"></i>
//                         <h3 class="h5 mb-3">Idioma</h3>
//                         <p class="mb-0">{book.language}</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="col-sm-6 col-xl-4 mt-4">
//                     <div class="card text-center border-0 rounded-3">
//                       <div class="card-body">
//                         <i class="ti-pencil-alt icon-box medium rounded-3 mb-4"></i>
//                         <h3 class="h5 mb-3">Numero de Paginas</h3>
//                         <p class="mb-0">{book.numberPages}</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="col-sm-6 col-xl-4 mt-4">
//                     <div class="card text-center border-0 rounded-3">
//                       <div class="card-body">
//                         <i class="ti-medall-alt icon-box medium rounded-3 mb-4"></i>
//                         <h3 class="h5 mb-3">Categorias {category}</h3>
//                         <p class="mb-0"></p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <button onClick={handleBuy}>Comprar</button>
//               {preferenceId && <Wallet initialization={{ preferenceId }} />}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DetailBook;