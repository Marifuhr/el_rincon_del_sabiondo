import { useAuth0 } from "@auth0/auth0-react";
import { Button, Image, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import styles from './Profile.module.css';
import { clearStorageCart } from "../../Redux/Action/Index";
import { useUserInfo } from "../../context/ProviderUser";
import { Link } from "react-router-dom";

export const Profile = () => {
  const { isAuthenticated, logout } = useAuth0();
  const { user } = useUserInfo();

  const handleLogout = () => {
    clearStorageCart();
    // Hacer logout
    logout({ returnTo: window.location.origin });

  };

  const isAdmin = user && user.role === "admin";

  return (
    isAuthenticated && user && (
      <div className={styles.profile_zlksadaskj}>
        <Menu>
          <MenuButton as={Button} variant="flat" colorScheme="gray" size="sm">
            <Image
              src={user.picture}
              alt={`profile_${user.name}`}
              borderRadius="full"
              boxSize={8}
              objectFit="cover"
            />
          </MenuButton>
          <MenuList>
            <MenuItem as={Link} to="/profile">
              Perfil
            </MenuItem>
            {isAdmin && <MenuItem as={Link} to="/admin/usuariosAdmin">dashboard</MenuItem>}
            <MenuItem onClick={handleLogout} icon={<FiLogOut />} >
              Cerrar sesión
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    )
  );
};
