import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Layout/Header";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";
import VehicleShop from "./components/VehicleShop";
import AddVehicle from "./components/vehicle/AddVehicle";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<VehicleShop />}></Route>
            <Route
              exact
              path="/createVehicleForm"
              element={<AddVehicle />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
