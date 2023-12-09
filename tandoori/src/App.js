import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Order from "./pages/Order/Order";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import DelieverType from "./pages/Deliever/Delivery";
import Confirm from "./pages/Confirm/Confirm";
import Error from "./pages/Error/Error";
import {Provider} from 'react-redux'
import { store } from "./store/store";


const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Provider store={store}>
          <Rat />
        </Provider>
      </Router>
    </React.Fragment>
  );
};


function Rat() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/Contact" element={<Contact />} />
      <Route exact path="/Order" element={<Order />} />
      <Route exact path="/Order/Deliver" element={<DelieverType />} />
      <Route exact path = '/Order/Admin' element={<Admin />} />
      <Route exact path="/order/Deliver/Confirm" element={<Confirm />} />
      <Route exact path = "*" element = {<Error />} />

    </Routes>
  );
}

export default App;
