import React from 'react'
import logo from '../../assets/image/Logo historia.jpg'
import SearchBar from '../SearchBar/SearchBar'

export default function NavBar() {
  return (
    <div>
          <img src={logo} alt="" />
          <h1>El Rincón del Sabiondo</h1>
          <SearchBar />
          <div>
              <Link to='/home'>Inicio
              </Link>
          </div>
          <div>
              <Link to='/login'>
                  Registrarse
          </Link>
          </div>
          <div>

          </div>
      </div>
      
  )
}
