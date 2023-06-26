

import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';


//import Detail from "./components/";
//import Login from "./components/";
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
     
      {/*<Route path="/login" element={<Login />} />
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/admin" element={</>}/> 
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
