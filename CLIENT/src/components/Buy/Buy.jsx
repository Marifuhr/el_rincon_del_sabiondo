// import React, { useEffect, useState } from "react";
// import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
// import { useSelector, useDispatch } from "react-redux";
// import { getDetailBooks } from "../../Redux/Action/Index";
// import { useParams } from "react-router-dom";
// import ButtonVolver from "../../elements/ButtonVolver";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useAuth0 } from "@auth0/auth0-react";
// import { LoginButton } from "../../components/Login/Login";
// import {
//   Box,
//   Flex,
//   Heading,
//   Text,
//   UnorderedList,
//   ListItem,
//   Image,
// } from "@chakra-ui/react";

// function Buy() {
//   const [preferenceId, setPreferenceId] = useState(null);
//   const { user, isAuthenticated } = useAuth0();

//   initMercadoPago("TEST-7e83e885-6223-43c0-a4c6-c68d268569b3");
//   const createPreference = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/create_preference",
//         {
//           items: [
//             {
//               description: book.title,
//               price: book.price,
//               quantity: 1,
//             },
//           ],
//           payer: {
//             email: user.email,
//           },
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
//     if (!isAuthenticated) {
//       return (
//         <div>
//           <p> Por favor inicie sesión para continuar la compra </p>
//           <LoginButton />
//         </div>
//       );
//     }
//   }, [dispatch, id]);
//   const book = useSelector((state) => state.detailBooks);

//   return;
//   <>
//     <form onSubmit={handleSubmit}>
//       <label>
//         Nombre:
//         <input type="text" value={nombre} onChange={handleChangeNombre} />
//       </label>
//       <br />
//       <label>
//         Apellido:
//         <input type="text" value={apellido} onChange={handleChangeApellido} />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" value={email} onChange={handleChangeEmail} />
//       </label>
//       <br />
//     </form>
//     <button onClick={handleBuy}>Comprar</button>
//     {preferenceId && <Wallet initialization={{ preferenceId }} />}
//   </>;
// }

// export default Buy;
