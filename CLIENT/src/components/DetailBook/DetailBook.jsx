//-------------- cambio con autentificacion--------------

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetailBooks } from "../../Redux/Action/Index";
import { useParams } from "react-router-dom";

import ButtonVolver from "../../elements/ButtonVolver";
import WalletMercadoPago from "../WalletMercadoPago/WalletMercadoPago";
import ButtonAddBookCart from "../ShoppingCart/ButtonAddBookCart";

function DetailBook() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const book = useSelector((state) => state.detailBooks);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(getDetailBooks(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (book?.title) {
      setProducts(
        [
          {
            title: book.title,
            description: book.description.slice(0, 120),
            unit_price: Number(book.price),
            quantity: 1,
            picture_url: book.image
          }
        ]
      )
    }
  }, [book]);

  const author =
    book.Authors && book.Authors.length > 0
      ? book.Authors[0].name
      : "Unknown Author";
  const category =
    book.Categories && book.Categories.length > 0
      ? book.Categories[0].name
      : "Unknown Category";

  return (
    <div>
      <button className="btn-back">
        <ButtonVolver />
      </button>
      <div className="container">
        <div className="row justify-content-center">
          <div style={{position:'relative'}} className="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
            <div className="card border-0 shadow">
              <img src={book.image} alt="..." />
              <div className="card-body p-1-9 p-xl-5">
                <div className="mb-4">
                  <h3 className="h4 mb-0">Autor: {author}</h3>
                  <br />
                  <h3 className="h4 mb-0">Libro:{book.title}</h3>
                </div>
                <WalletMercadoPago products={products} />
              </div>
            </div>
            <ButtonAddBookCart book={book} attributesStyles={{position:"absolute", top:"-3", right:"4"}} />
          </div>
          <div className="col-lg-8">
            <div className="ps-lg-1-6 ps-xl-5">
              <div className="mb-5 wow fadeIn">
                <div className="text-start mb-1-6 wow fadeIn">
                  <h2 className="mb-0 text-primary">Descripcion Libro</h2>
                </div>
                <p>{book.description}</p>
              </div>
              <div className="mb-5 wow fadeIn">
                <div className="text-start mb-1-6 wow fadeIn">
                  <h2 className="mb-0 text-primary">Ficha técnica</h2>
                </div>
                <div className="row mt-n4">
                  <div className="col-sm-6 col-xl-4 mt-4">
                    <div className="card text-center border-0 rounded-3">
                      <div className="card-body">
                        <i className="ti-bookmark-alt icon-box medium rounded-3 mb-4"></i>
                        <h3 className="h5 mb-3">Idioma</h3>
                        <p className="mb-0">{book.language}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4 mt-4">
                    <div className="card text-center border-0 rounded-3">
                      <div className="card-body">
                        <i className="ti-pencil-alt icon-box medium rounded-3 mb-4"></i>
                        <h3 className="h5 mb-3">Numero de Paginas</h3>
                        <p className="mb-0">{book.numberPages}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4 mt-4">
                    <div className="card text-center border-0 rounded-3">
                      <div className="card-body">
                        <i className="ti-medall-alt icon-box medium rounded-3 mb-4"></i>
                        <h3 className="h5 mb-3">Categorias {category}</h3>
                        <p className="mb-0"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailBook;