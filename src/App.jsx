import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Elements from "./pages/elements/Elements";
import Display from "./pages/display/Display";
import Info from "./pages/info/Info";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/elements" element={<Elements />} />
        <Route exact path="/display" element={<Display />} />
        <Route exact path="/info" element={<Info />} />
        {/*<Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<Home />} />*/}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
