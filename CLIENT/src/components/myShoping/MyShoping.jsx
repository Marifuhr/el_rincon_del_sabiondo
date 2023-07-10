import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUserInfo } from "../../context/ProviderUser"; 

function MyShopping(){
  const { user } = useUserInfo();
  console.log(user);
  const customerId = user ? user.customerId : null; // Obtener el customerId del usuario del contexto

  const [compras, setCompras] = useState([]);

  useEffect(() => {
    const obtenerCompras = async () => {
      try {
        // Realizar la solicitud a la base de datos para obtener las compras del cliente
        const response = await axios.get(`${import.meta.env.VITE_URL_ENDPOINT}/compras?customerId=${customerId}`);
        setCompras(response.data); // Actualizar el estado con las compras obtenidas
      } catch (error) {
        console.error('Error al obtener las compras:', error);
      }
    };

     if (customerId) {
      obtenerCompras();
     }
  }, [customerId]);

  return (
    <div>
      <h2>Compras del cliente {customerId}</h2>
      <ul>
        {compras.map(compra => (
          <li key={compra.id}>
            <p>Fecha: {compra.fecha}</p>
            <p>Producto: {compra.producto}</p>
            <p>Precio: {compra.precio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyShopping;
