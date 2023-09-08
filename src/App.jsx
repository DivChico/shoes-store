import "./App.css";
import Landing from "./comonents/landing";
import Navbar from "./comonents/navbar.jsx";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Products from "./comonents/products";
import { v4 as uuidv4 } from "uuid";
import Cart from "./comonents/cart";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff3d68",
    },
  },
});
function App() {
  const [filterData, setFilterData] = useState({
    brand: "all",
    person: "all",
    size: "all",
    price: "all",
  });
  const [products, setproducts] = useState([
    {
      title: "CLOUDNOVA FORM",
      img: "https://i8.amplience.net/i/jpl/jd_663491_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      brand: "nike",
      person: "man",
      size: "lg",
      price: 40,
      id: uuidv4(),
      cart: true,
      fav: false,
      quantity: 2,
    },
    {
      title: "Cloudmonster",
      img: "https://i8.amplience.net/i/jpl/jd_663721_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      brand: "nike",
      person: "man",
      size: "md",
      price: 50,
      id: uuidv4(),
      cart: false,
      fav: false,
      quantity: 1,
    },
    {
      title: "Cloudmonster blue",
      img: "https://i8.amplience.net/i/jpl/jd_663515_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      brand: "adidas",
      person: "weman",
      size: "md",
      price: 70,
      id: uuidv4(),
      cart: false,
      fav: false,
      quantity: 1,
    },
    {
      title: "Cloudvista Waterproof",
      img: "https://i8.amplience.net/i/jpl/jd_662399_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      brand: "adidas",
      person: "weman",
      size: "sm",
      price: 80,
      id: uuidv4(),
      cart: false,
      fav: false,
      quantity: 1,
    },
    {
      title: "Nike Air VaporMax 2023",
      img: "https://i8.amplience.net/i/jpl/jd_668669_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      brand: "nike",
      person: "man",
      size: "md",
      price: 210,
      id: uuidv4(),
      cart: false,
      fav: false,
      quantity: 1,
    },
    {
      title: "Nike Air Force 1 Low Women's",
      img: "https://i8.amplience.net/i/jpl/jd_156845_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      brand: "nike",
      person: "weman",
      size: "sm",
      price: 115,
      id: uuidv4(),
      cart: false,
      fav: false,
      quantity: 1,
    },
    {
      title: "Vans Old Skool Junior",
      img: "https://i8.amplience.net/i/jpl/jd_288469_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      brand: "adidas",
      person: "man",
      size: "sm",
      price: 170,
      id: uuidv4(),
      cart: false,
      fav: false,
      quantity: 1,
    },
    {
      title: "Nike Air Max 270 Children",
      img: "https://i8.amplience.net/i/jpl/jd_109824_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      brand: "nike",
      person: "men",
      size: "sm",
      price: 250,
      id: uuidv4(),
      cart: false,
      fav: false,
      quantity: 1,
    },
    {
      title: "Cloudswift 3 AD Women's",
      img: "https://i8.amplience.net/i/jpl/jd_662363_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      brand: "nike",
      person: "weman",
      size: "md",
      price: 180,
      id: uuidv4(),
      cart: false,
      fav: false,
      quantity: 1,
    },
  ]);
  function handleBrand(e) {
    let newObj = { ...filterData };
    newObj.brand = e.target.value;
    setFilterData(newObj);
  }
  function handlePerson(e) {
    let newObj = { ...filterData };
    newObj.person = e.target.value;
    setFilterData(newObj);
  }
  function handleSize(e) {
    let newObj = { ...filterData };
    newObj.size = e.target.value;

    setFilterData(newObj);
  }
  function handlePrice(e) {
    let newObj = { ...filterData };
    newObj.price = e.target.value;
    setFilterData(newObj);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleCart(e) {
    let productId = e.target.parentElement.parentElement.parentElement.id;
    let newObj = [...products];
    newObj = newObj.map((obj) => {
      if (obj.id === productId) {
        obj.cart === true ? (obj.cart = false) : (obj.cart = true);
        return obj;
      } else {
        return obj;
      }
    });
    setproducts(newObj);
  }
  function handleCart2(e) {
    let productId =
      e.target.parentElement.parentElement.parentElement.parentElement.id;
    let newObj = [...products];
    newObj = newObj.map((obj) => {
      if (obj.id === productId) {
        obj.cart === true ? (obj.cart = false) : (obj.cart = true);
        return obj;
      } else {
        return obj;
      }
    });
    setproducts(newObj);
  }
  function handleQuantity(e) {
    if (e.target.value >= 1) {
      let productId =
        e.target.parentElement.parentElement.parentElement.parentElement
          .parentElement.id;
      let newObj = [...products];

      newObj = newObj.map((obj) => {
        if (obj.id === productId) {
          obj.quantity = e.target.value;
          return obj;
        } else {
          return obj;
        }
      });
      setproducts(newObj);
    }
  }
  function handleFav() {}
  return (
    <ThemeProvider theme={theme}>
      <>
        <div
          style={{
            background:
              " linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,61,104,1) 100%)",
          }}
        >
          <Container maxWidth="lg" className="h-screen ">
            <Navbar />
            <Routes>
              <Route
                path="/*"
                element={
                  <Landing
                    filterData={filterData}
                    handleBrand={handleBrand}
                    handlePerson={handlePerson}
                    handleSize={handleSize}
                    handlePrice={handlePrice}
                    handleSubmit={handleSubmit}
                  />
                }
              />
              <Route
                path="/products"
                element={
                  <Products
                    filterData={filterData}
                    handleBrand={handleBrand}
                    handlePerson={handlePerson}
                    handleSize={handleSize}
                    handlePrice={handlePrice}
                    handleSubmit={handleSubmit}
                    products={products}
                    handleCart={handleCart}
                    handleFav={handleFav}
                  />
                }
              />
              <Route
                path="/cart"
                element={
                  <Cart
                    products={products}
                    handleCart={handleCart2}
                    handleQuantity={handleQuantity}
                  />
                }
              />
            </Routes>
            <div className="flex  w-full justify-center">
              <a
                href="https://github.com/DivChico"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                Coded by Abdullah hamdy Alatawwna
              </a>
            </div>
          </Container>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
