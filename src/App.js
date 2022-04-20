import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./Component/AboutUs/AboutUs";
import AddToCart from "./Component/AddToCart/AddToCart";
import Delivery from "./Component/Delivery/Delivery";
import Footer from "./Component/HomePage/Footer/Footer";
import Header from "./Component/HomePage/Header/Header";
import Homes from "./Component/HomePage/Homes/Homes";
import AllCloths from "./Component/HomePage/Products/AllCloths/AllCloths";
import AllMilks from "./Component/HomePage/Products/AllMilks/AllMilks";
import Cloths from "./Component/HomePage/Products/Cloths/Cloths";
import Milks from "./Component/HomePage/Products/Milks/Milks";
import Toys from "./Component/HomePage/Products/Toys/Toys";
import Login from "./Component/Login/Login";
import ProductDetail from "./Component/ProductDetail/ProductDetail";
import Register from "./Component/Register/Register";
import Terms from "./Component/Terms/Terms";

function App() {
  return (
    <div className="App bg-light">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/addToCart" element={<AddToCart />}></Route>
          <Route path="/allCloths" element={<AllCloths />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="/delivery" element={<Delivery />}></Route>
          <Route path="/toys" element={<Toys />}></Route>
          <Route path="/cloths" element={<Cloths />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/allMilks" element={<AllMilks />}></Route>

          <Route path="/productDetail/:id" element={<ProductDetail />}></Route>

          <Route path="/milks/:id" element={<Milks />}></Route>

          <Route path="/homes" element={<Homes />}></Route>
          <Route path="/" element={<Homes />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
