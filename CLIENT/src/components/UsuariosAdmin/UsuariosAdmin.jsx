import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Menu, MenuButton, MenuList, MenuItem, Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";


function UsuariosAdmin() {
  const [orderBy, setOrderBy] = useState("");
  const [users, setUsers] = useState([]);
  const [userTypeFilter, setUserTypeFilter] = useState(null);


  const handleFilterChange = (filterType) => {
    setUserTypeFilter(filterType);
  };

  const getUsers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL_ENDPOINT}/users`
      );
      let fetchedUsers = response.data;

      if (userTypeFilter) {
        fetchedUsers = fetchedUsers.filter((user) => user.role === userTypeFilter);
      }

      if (orderBy === "atoz") {
        fetchedUsers = fetchedUsers.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (orderBy === "ztoa") {
        fetchedUsers = fetchedUsers.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }

      return fetchedUsers;
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    }
  };


  const orderByAlphabetical = (order) => {
    setOrderBy(order);
  };




  useEffect(() => {
    const fetchData = async () => {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    };
    fetchData();
  }, [orderBy, userTypeFilter]);


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
            <Th>
              <Menu>
                <MenuButton as={Button}>Usuarios</MenuButton>
                <MenuList>
                  <MenuItem onClick={() => orderByAlphabetical("atoz")}>Ordenar A-Z</MenuItem>
                  <MenuItem onClick={() => orderByAlphabetical("ztoa")}>Ordenar Z-A</MenuItem>
                </MenuList>
              </Menu>
            </Th>
            <Th>
              <Menu>
                <MenuButton as={Button}>Tipo Usuario</MenuButton>
                <MenuList>
                  <MenuItem onClick={() => handleFilterChange("user")}>User</MenuItem>
                  <MenuItem onClick={() => handleFilterChange("admin")}>Admin</MenuItem>
                </MenuList>
              </Menu>
            </Th>

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
