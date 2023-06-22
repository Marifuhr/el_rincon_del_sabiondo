import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
//import Home from "./components/";
//import Detail from "./components/";
//import Login from "./components/";
//import  from "./components/";


function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        {/*<Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/admin" element={</>}/> */}
      </Routes>
    </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
