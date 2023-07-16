import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetailBooks } from "../../Redux/Action/Index";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ButtonVolver from "../../elements/ButtonVolver";
import WalletMercadoPago from "../WalletMercadoPago/WalletMercadoPago";
import ButtonAddBookCart from "../ShoppingCart/ButtonAddBookCart";
import Loader from "../Loader/Loader";
// import { GET_DETAIL_BOOKS } from "../../Redux/Action/Actions.types";
import { Button, Flex } from "@chakra-ui/react";
import { useUserInfo } from "../../context/ProviderUser";
import CreateReview from "../CreateReview/CreateReview";

function DetailBook() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const book = useSelector((state) => state.detailBooks);
  const [products, setProducts] = useState([]);
  const [loaderBooks, setLoaderBooks] = useState(true);
  const { user } = useUserInfo();
  const [userBuy, setUserBuy] = useState(null);
  const [userReview, setUserReview] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [mostrarTodasReviews, setMostrarTodasReviews] = useState(false);

  // useEffect(() => {
  //   dispatch({
  //     type: GET_DETAIL_BOOKS,
  //     payload: {},
  //   });
  // }, []);

  useEffect(() => {
    dispatch(getDetailBooks(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (book?.title) {
      setLoaderBooks(false);
      setProducts([
        {
          title: book.title,
          description: book.description.slice(0, 120),
          unit_price: Number(book.price),
          quantity: 1,
          picture_url: book.image,
        },
      ]);
    }
    Userbuy(id, user);
    setReviews(book.Reviews);
    if (reviews) {
      setUserReview(mapReviews(reviews, user));
    }
    console.log(userReview);
  }, [book, userBuy]);

  const author =
    book.Authors && book.Authors.length > 0
      ? book.Authors[0].name
      : "Unknown Author";
  const category =
    book.Categories && book.Categories.length > 0
      ? book.Categories[0].name
      : "Unknown Category";

  const Userbuy = async (id, user) => {
    if (user) {
      const response = await axios.get(
        `${import.meta.env.VITE_URL_ENDPOINT}/sellings/`
      );
      const sellings = response.data.sellingsTotals;
      console.log(sellings);
      const usersellings = sellings?.filter((selling) => {
        return selling.IdUser === user.IdUser;
      });
      console.log(usersellings);
      const productbuy = usersellings.filter((selling) => {
        const products = selling.products.filter((product) => {
          return product.IdProduct === id;
        });
        return products.length > 0;
      });
      console.log(productbuy);
      setUserBuy(productbuy.length > 0);
    }
  };

  // async function getReviews(id) {
  //   try {
  //     const response = await axios.get(
  //       `${import.meta.env.VITE_URL_ENDPOINT}/books/${id}`
  //     );
  //     setReviews(response.data.);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  function mapReviews(reviews, user) {
    const filteredReviews = reviews.filter((review) => {
      return review.IdUser === user.IdUser;
    });
    return filteredReviews.length > 0 || false;
  }

  const handleMostrarTodosClick = () => {
    setMostrarTodasReviews(true);
  };

  return (
    <div>
      <button className="btn-back">
        <ButtonVolver />
      </button>
      {loaderBooks ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="row justify-content-center">
            <div
              style={{ position: "relative" }}
              className="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn"
            >
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
              <ButtonAddBookCart
                book={book}
                attributesStyles={{
                  position: "absolute",
                  top: "-3",
                  right: "4",
                }}
              />
            </div>
            <div className="col-lg-8">
              <div className="ps-lg-1-6 ps-xl-5">
                <div className="mb-5 wow fadeIn">
                  <div className="text-start mb-1-6 wow fadeIn">
                    <h2 className="mb-0 text-primary">Descripción del Libro</h2>
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
                      {userBuy && !userReview && (
                        <div style={{ marginTop: "1rem" }}>
                          <CreateReview />
                        </div>
                      )}
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
          {book.Reviews && book.Reviews.length > 0 && (
            <div className="row mt-5">
              <div className="col-lg-8 offset-lg-2">
                <h2 className="mb-4 text-primary">Reviews</h2>
                {mostrarTodasReviews
                  ? book.Reviews.map((review) => (
                      <div key={review.id}>
                        <h4>{review.rate}</h4>
                        <p>{review.description}</p>
                        <hr />
                      </div>
                    ))
                  : book.Reviews.slice(0, 2).map((review) => (
                      <div key={review.id}>
                        <h4>{review.rate}</h4>
                        <p>{review.description}</p>
                        <hr />
                      </div>
                    ))}
                {!mostrarTodasReviews && (
                  <button onClick={handleMostrarTodosClick}>
                    Mostrar todos
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DetailBook;
