import "./App.css";
import Header from "./components/common/Header.jsx";
// import Button from "./components/common/Button.jsx";
// import ButtonHeader from "./components/common/ButtonHeader.jsx";
import AnimRoutes from "./components/AnimRoutes.jsx";
import { BrowserRouter as Router } from "react-router-dom";
// import { motion } from "framer-motion";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <AnimRoutes></AnimRoutes>
      </Router>
    </>
  );
}

export default App;
