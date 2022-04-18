import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import './App.css';
import Footer from "./Component/HomePage/Footer/Footer";
import Header from "./Component/HomePage/Header/Header";
import Homes from "./Component/HomePage/Homes/Homes";
import Milks from "./Component/HomePage/Products/Milks/Milks";
import ProductDetail from "./Component/ProductDetail/ProductDetail";


function App() {
  return (
    <div className="App bg-light">
     <Router>
       <Header></Header>
       <Switch>
          <Route path="/productDetail">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="/milks">
            <Milks></Milks>
          </Route>
          <Route path="/homes">
            <Homes></Homes>
          </Route>
          <Route  path="/">
            <Homes></Homes>
          </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
