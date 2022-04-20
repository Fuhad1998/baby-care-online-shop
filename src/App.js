import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Component/HomePage/Footer/Footer";
import Header from "./Component/HomePage/Header/Header";
import Homes from "./Component/HomePage/Homes/Homes";
import AllMilks from "./Component/HomePage/Products/AllMilks/AllMilks";
import Milks from "./Component/HomePage/Products/Milks/Milks";
import Login from "./Component/Login/Login";
import ProductDetail from "./Component/ProductDetail/ProductDetail";
import Register from "./Component/Register/Register";

function App() {
  return (
    <div className="App bg-light">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/allMilks" element={<AllMilks />}></Route>

          <Route path="/productDetail" element={<ProductDetail />}></Route>

          <Route path="/milks" element={<Milks />}></Route>

          <Route path="/homes" element={<Homes />}></Route>
          <Route path="/" element={<Homes />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
