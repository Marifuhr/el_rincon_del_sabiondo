

import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
//import  from "./components/";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DetailBook from './components/DetailBook/DetailBook';

export default function App() {
  return (
  <div>
    
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
          <Route path="/detailBook/:id" element={<DetailBook />}/>
          <Route path="/login" element={<Login />} />
          {/*<Route path="/admin" element={</>}/> 
          //rutas para carrusel Link
          <Route path="/a" element={<CarruselLink />} />
          <Route path="/ficcion" element={<BookPage category="Ficción" />} />
          <Route path="/misterio" element={<BookPage category="Misterio" />} />
          <Route path="/romance" element={<BookPage category="Romance" />} />
          <Route path="/fantasia" element={<BookPage category="Fantasía" />} />
           <Route path="/detail/:id" element={<DetailBook />} />
        */}
    </Routes>
    </div >
  )



}
