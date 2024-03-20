import "./App.css";
import "./assets/vendors/bootstrap/css/bootstrap.min.css";
import "./assets/vendors/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./assets/vendors/animate/animate.min.css";
import "./assets/vendors/animate/custom-animate.css";
import "./assets/vendors/fontawesome/css/all.min.css";
import "./assets/vendors/hostup-icons/style.css";
import "./assets/vendors/owl-carousel/owl.carousel.min.css";
import "./assets/vendors/owl-carousel/owl.theme.default.min.css";
import "./assets/css/hostup.css";
import "./assets/css/hostup-responsive.css";
import {BrowserRouter as Router } from "react-router-dom";
import Route from "./Routes/Main";

function App() {
  return (
    <Router>
      <Route />
    </Router>
  );
}

export default App;
