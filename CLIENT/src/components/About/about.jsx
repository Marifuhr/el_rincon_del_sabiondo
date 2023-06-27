import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './about.css';
import Footer from '../Footer/Footer';



export default function about() {
  return (
      <div>
          <NavBar />
          <button className="btn-back">
              <Link to="/home">
                  Volver
              </Link>
          </button>
          <h1 className="h1">
              Sobre Nosotros
          </h1>
          <h3 className="resumen">
              "En nuestra empresa, creemos que la calidad y la excelencia son la base del éxito. Por eso, nos esforzamos por ofrecer productos y servicios de alta calidad que satisfagan las necesidades de nuestros clientes. Nos enorgullece contar con un equipo de profesionales altamente capacitados y comprometidos, que trabajan en conjunto para garantizar que nuestros clientes obtengan la mejor experiencia posible.

              Desde nuestros comienzos, nos hemos comprometido a mantenernos a la vanguardia de la tecnología y las últimas tendencias del mercado, para poder ofrecer a nuestros clientes soluciones innovadoras y eficientes. Nos dedicamos a escuchar atentamente las necesidades de nuestros clientes, para poder brindar soluciones personalizadas y adaptadas a sus necesidades.

              Además, en nuestra empresa, nos esforzamos por mantener una cultura de trabajo inclusiva, donde cada miembro del equipo se sienta valorado y respetado. Creemos que la diversidad es una de nuestras mayores fortalezas, y fomentamos un ambiente de trabajo colaborativo y creativo.

              En resumen, en nuestra empresa nos dedicamos a ofrecer productos y servicios de alta calidad, con un equipo altamente capacitado y comprometido, y una cultura de trabajo inclusiva y colaborativa. ¡Gracias por confiar en nosotros!"
          </h3>
          <>
              <img src="https://d2qc4bb64nav1a.cloudfront.net/cdn/13/images/libreriagrande01.jpg" className="img-about" alt="" />
          </>
          <Footer />
    </div>
  )
}
