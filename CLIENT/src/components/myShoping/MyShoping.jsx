 import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUserInfo } from "../../context/ProviderUser"; 

function MyShopping() {
  const { user } = useUserInfo();
  console.log(user);
  const customerId = user ? user.customerId : null; // Obtener el customerId del usuario del contexto

  const [compras, setCompras] = useState([]);
  const [carrito, setCarrito] = useState([]);

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

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div>
      <h2>Mis Compras {customerId}</h2>
      <h3>Carrito ({carrito.length})</h3>
      <ul>
        {carrito.map((producto, index) => (
          <li key={index}>{producto}</li>
        ))}
      </ul>
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