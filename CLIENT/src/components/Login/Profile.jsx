
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Image, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import styles from './Profile.module.css';
import { clearStorageCart } from "../../Redux/Action/Index";
import { useNavigate } from "react-router-dom";



export const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();
  const handleLogout = () => {
    clearStorageCart();
    console.log("Realizando acciones antes de hacer logout...");

    // Hacer logout
    logout({ returnTo: window.location.origin });
  };

  return (
    isAuthenticated && (
      <div className={styles.profile_zlksadaskj}>
        <Menu>
          <MenuButton as={Button} variant="flat" colorScheme="gray" size="sm">
            <Image src={user.picture} alt={`profile_${user.name}`} borderRadius="full" boxSize={8} objectFit="cover" />
          </MenuButton>
          <MenuList>
          <MenuItem onClick={() => navigate("/perfil_user")}>
  Editar Perfil
</MenuItem>
            <MenuItem onClick={handleLogout} icon={<FiLogOut />} >
              Cerrar sesión
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    )
  );
};

