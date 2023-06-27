import React from 'react'
import NavBar from '../NavBar/NavBar';
import { Link } from'react-router-dom'
import Footer from '../Footer/Footer';

export default function contacto() {
  return (
    <div>
          <NavBar />
          <button className="btn-back">
              <Link to="/home">
                  Volver
              </Link>
          </button>
          <Footer />
    </div>
  )
}
