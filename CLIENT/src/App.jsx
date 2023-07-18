import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import { LoginButton } from "./components/Login/Login";
// import LogoutButton from "./components/Login/Logout.jsx";
import FormCreate from "./components/FormCreate/form";
import About from "./components/About/about";
import Contacto from "./components/Contacto/contacto";
import NavBar from "./components/NavBar/NavBar";

import UserPage from "./components/UserPage/UserPage";
import UserPageInfo from "./components/UserPage/UserPageInfo";
import EditProfile from "./components/UserPage/EditProfile";
import EditProfileAdmin from "./components/UsuariosAdmin/EditProfileAdmin";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DetailBook from "./components/DetailBook/DetailBook";
import CartPayPage from "./components/CartPayPage/CartPayPage";
import NotFound from "./components/Error404/NotFound";
import CreateReview from "./components/CreateReview/CreateReview";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MyReviews from "./components/UserPage/MyReviews";
import AdminPage from "./components/AdminPage/AdminPage"
import UsuariosAdmin from "./components/UsuariosAdmin/UsuariosAdmin";
export default function App() {
  const location = useLocation();
  const hideNavBarRoutes = [
    "/profile",
    "/profile/myProfile",
    
    "/profile/myReviews",
    "/profile/billing",
    "/admin",
    "/admin/myProfile",
    "/admin/usuariosAdmin",
    "/admin/create",
  ];
  return (
    <div className="App">
      {!hideNavBarRoutes.includes(location.pathname) && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<DetailBook />} />
        {/* <Route path="/buy/:id" element={<Buy />} /> */}
        <Route path="/login" element={<LoginButton />} />
        {/* <Route path="/logout" element={<LogoutButton />} /> */}

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        >
          <Route path="" element={<UserPageInfo />} />
          <Route path="myProfile" element={<EditProfile />} />
          
          <Route path="myReviews" element={<MyReviews />} />
          {/* <Route path="billing" element={< />} />  */}
        </Route>

        <Route path="/admin" element={<AdminPage />}>
          <Route path="myProfile" element={<EditProfileAdmin />} />
          <Route path="usuariosAdmin" element={<UsuariosAdmin />} />
          <Route path="create" element={<FormCreate />} />
        </Route>
        
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/cart_pay" element={<CartPayPage />} />
        <Route path="/createreview/:id" element={<CreateReview />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </div>
  );
}
