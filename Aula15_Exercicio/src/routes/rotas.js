import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductPage";
import { Auth, URL_BASE } from "../services/api";

export default function Routing() {
  const [listProducts, setListProducts] = useState([]);
  const [listCart, setListCart] = useState([]);

  const removeProduct = (product) => {

    const verificarQuantidade = product.quantity > 1;

    if (verificarQuantidade) {
      const removeQuantityProduct = listCart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item;
        }
      });
      setListCart(removeQuantityProduct);
    } else {
      const remove = listCart.filter((item) => item.id !== product.id);
      setListCart(remove);
    }
  };

  const addProductToCart = (product) => {
    const verificarExistencia = listCart.find((item) => item.id === product.id);

    if (verificarExistencia) {
      const addQuantityProduct = listCart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
      setListCart(addQuantityProduct);
    } else {
      const moreOne = {
        ...product,
        quantity: 1,
      };
      setListCart((oldValue) => [...oldValue, moreOne]);
    }
  };

  const getProducts = async () => {
    await axios
      .get(`${URL_BASE}/search?query=carne`, Auth)
      .then((res) => {
        setListProducts(res.data.photos);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);
  
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route
        exact
        path="/products"
        element={
          <ProductsPage
            listaProdutos={listProducts}
            adicionar={addProductToCart}
          />
        }
      />
      <Route
        exact
        path="/cart"
        element={<CartPage listaCart={listCart} remover={removeProduct} />}
      />
    </Routes>
  );
}
