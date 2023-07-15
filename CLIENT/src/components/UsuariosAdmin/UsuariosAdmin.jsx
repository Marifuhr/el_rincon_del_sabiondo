import { useEffect, useState } from "react";
import axios from "axios";
import { useUserInfo } from "../../context/ProviderUser";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";

function UsuariosAdmin() {
  const { user } = useUserInfo();
  const customerId = user ? user.customerId : null; // Obtener el customerId del usuario del contexto

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL_ENDPOINT}/users`
      );
      return response.data; // Actualizar el estado con los usuarios
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    };
    fetchData();
  }, []);

  const handleIsActive = async (user) => {
    try {
      const updatedUser = { ...user, isActive: !user.isActive };
      await axios.put(
        `${import.meta.env.VITE_URL_ENDPOINT}/users/${user.IdUser}`,
        updatedUser
      );
      setUsers((prevUsers) =>
        prevUsers.map((prevUser) =>
          prevUser.IdUser === user.IdUser ? updatedUser : prevUser
        )
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleMakeAdmin = async (user) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_URL_ENDPOINT}/users/${user.IdUser}`,
        {
          ...user,
          role: "admin",
        }
      );
      setUsers((prevUsers) =>
        prevUsers.map((prevUser) =>
          prevUser.IdUser === user.IdUser ? { ...prevUser, role: "admin" } : prevUser
        )
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Box mt={4}>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>USUARIO</Th>
            <Th>TIPO USUARIO</Th>
            <Th>ESTADO</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users?.map((user) => (
            <Tr key={user.IdUser}>
              <Td>
                <img
                  src={user.picture} // Asegúrate de tener la URL de la imagen en el objeto de usuario
                  alt="User"
                  style={{ width: "32px", height: "32px", marginRight: "8px" }}
                />
                {user.name}
              </Td>
              <Td>{user.role}</Td>
              <Td>{user.isActive ? "Activo" : "Inactivo"} </Td>
              <Td>
                {user.isActive ? (
                  <Button
                    colorScheme="red"
                    onClick={() => handleIsActive(user)}
                    mr={2}
                  >
                    Deshabilitar
                  </Button>
                ) : (
                  <Button
                    colorScheme="green"
                    onClick={() => handleIsActive(user)}
                    mr={2}
                  >
                    Habilitar
                  </Button>
                )}
                {user.role !== "admin" && <Button
                  colorScheme="blue"
                  onClick={() => handleMakeAdmin(user)}
                >
                  Hacer Admin
                </Button>}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default UsuariosAdmin;
