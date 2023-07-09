// import { useAuth0 } from "@auth0/auth0-react";
// import styles from './Profile.module.css';

// export const Profile = () => {
//   const { user, isAuthenticated } = useAuth0();

//   return (
//     isAuthenticated && (
//       <div className={styles.profile_zlksadaskj}>
//         <img src={user.picture} alt={`profile_${user.name}`}/>
        
//       </div>
//     )
//   );
// };
// import { useAuth0 } from "@auth0/auth0-react";
// import styles from './Profile.module.css';

// export const Profile = () => {
//   const { user, isAuthenticated, logout } = useAuth0();

//   const handleLogout = () => {
//     // Aquí puedes agregar la lógica que necesites antes de hacer logout
//     logout({ returnTo: window.location.origin });
//   };

//   return (
//     isAuthenticated && (
//       <div className={styles.profile_zlksadaskj}>
//         <button onClick={handleLogout}>
//           <img src={user.picture} alt={`profile_${user.name}`} />
//         </button>
//       </div>
//     )
//   );
// };
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Image, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import styles from './Profile.module.css';
import { clearStorageCart } from "../../Redux/Action/Index";
import { Link } from "react-router-dom";


export const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth0();

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
            <MenuItem as={Link} to="/profile">Perfil</MenuItem>
            <MenuItem onClick={handleLogout} icon={<FiLogOut />} command="⌘L">
              Cerrar sesión
            </MenuItem>
            {/* Agrega aquí más opciones de menú si las necesitas */}
          </MenuList>
        </Menu>
      </div>
    )
  );
};

