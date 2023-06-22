import React from 'react'
import img1 from '../../assets/image/images-libro.jpg'
import img2 from '../../assets/image/libro-22.jpg'
import img3 from '../../assets/image/libro-abierto.jpg'
import style from '../CardLanding/CardLanding.module.css'

export default function CardLanding() {
  return (
    <div className={style.container}>
      <div className={style.card1}>
        <img src={img1} alt="Not Found" />
        <p>Importancia de la lectura</p>
        <div className={style.card2}>
          <img src={img2} alt="Img not found" />
          <p>Leer hace bien</p>
          <div className={style.card3}>
            <img src={img3} alt="Not Found" />
            <p>Los niños deben crecer leyendo</p>
          </div>
        </div>
      </div>
    </div>
  )
}
