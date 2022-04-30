import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./Component/AboutUs/AboutUs";
import AddAProduct from "./Component/AddAProduct/AddAProduct";
import AddToCart from "./Component/AddToCart/AddToCart";
import ClintSays from "./Component/ClintSays/ClintSays";
import Delivery from "./Component/Delivery/Delivery";
import Footer from "./Component/HomePage/Footer/Footer";
import Header from "./Component/HomePage/Header/Header";
import Homes from "./Component/HomePage/Homes/Homes";
import AllCloths from "./Component/HomePage/Products/AllCloths/AllCloths";
import AllMilks from "./Component/HomePage/Products/AllMilks/AllMilks";
import AllToys from "./Component/HomePage/Products/AllToys/AllToys";
import Cloths from "./Component/HomePage/Products/Cloths/Cloths";
import Milks from "./Component/HomePage/Products/Milks/Milks";
import Toys from "./Component/HomePage/Products/Toys/Toys";
import Login from "./Component/Login/Login";
import MakeAdmin from "./Component/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./Component/ManageAllOrders/ManageAllOrders";
import MyOrders from "./Component/MyOrders/MyOrders";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import ProductDetail from "./Component/ProductDetail/ProductDetail";
import Purchase from "./Component/Purchase/Purchase";
import Register from "./Component/Register/Register";
import Reviews from "./Component/Reviews/Reviews";
import SimilarProducts from "./Component/SimilarProducts/SimilarProducts";
import Terms from "./Component/Terms/Terms";
import AuthProvider from "./Context/AuthProvider/AuthProvider";

function App() {
  return (
    <div className="App bg-light">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          
          <Route path="/purchase" element={<PrivateRoute><Purchase/></PrivateRoute>}></Route>
          <Route path="/allToys" element={<AllToys />}></Route>
          <Route path="/clintSays" element={<ClintSays />}></Route>
          <Route path="/similarProducts" element={<SimilarProducts />}></Route>
          
          <Route path="/makeAdmin" element={<MakeAdmin />}></Route>
          <Route path="/addAProduct" element={<AddAProduct />}></Route>
          <Route path="/manageAllOrders" element={<ManageAllOrders />}></Route>
          <Route path="/myOrders" element={<MyOrders />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/addToCart" element={<AddToCart />}></Route>
          <Route path="/allCloths" element={<AllCloths />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="/delivery" element={<Delivery />}></Route>
          <Route path="/toys/:id" element={<Toys />}></Route>
          <Route path="/cloths/:id" element={<Cloths />}></Route>
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
      </AuthProvider>
    </div>
  );
}

export default App;
