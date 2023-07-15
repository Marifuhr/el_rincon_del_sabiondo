import { useEffect, useState } from 'react';
import axios from 'axios';
import { useUserInfo } from "../../context/ProviderUser"; 

function UsuariosAdmin() {
  const { user } = useUserInfo();
  const customerId = user ? user.customerId : null; // Obtener el customerId del usuario del contexto

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await axios.get(`https://ser-back-sab.onrender.com/users`);
        setUsuarios(response.data); // Actualizar el estado con los usuarios
        console.log(response.data);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    };
    obtenerUsuarios();
  }, []);

 

  return (
    <div>
       <table width="800" border="1">
  <tr>
    <td>USUARIO</td>
    <td>TIPO USUARIO</td>
    <td>ESTADO</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>&nbsp;</td>
  </tr>
</table>
    </div>
  );
}

export default UsuariosAdmin;