import "./App.css";
import Header from "./components/common/Header.jsx";
import AnimRoutes from "./components/AnimRoutes.jsx";
import { BrowserRouter as Router } from "react-router-dom";

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
