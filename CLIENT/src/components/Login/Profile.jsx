import { useAuth0 } from "@auth0/auth0-react";
import styles from './Profile.module.css';

export const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className={styles.profile_zlksadaskj}>
        <img src={user.picture} alt={`profile_${user.name}`}/>
        <p>{user.name}</p>
      </div>
    )
  );
};
