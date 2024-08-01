let standAlone = false;
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ScrollToAnchor from "./components/ScrollToAnchor";
import Home from "./pages/home/Home";
import Elements from "./pages/elements/Elements";
import Display from "./pages/display/Display";
import Info from "./pages/info/Info";
import Page404 from "./pages/page404/Page404";
import "./App.css";

function Appx() {
  const location = useLocation();

  // Paths where Navbar and Footer should not be displayed
  const xPaths = ["/display"]; // Example: pages where Footer is excluded
  // Determine if Navbar and Footer should be shown
  standAlone = xPaths.some((v) => location.pathname.startsWith(v));

  return (
    <>
      <ScrollToAnchor />
      {!standAlone && <NavBar />}
      <Routes>
        <Route exact index path="/" element={<Home />} />
        <Route exact path="/elements" element={<Elements />} />
        <Route exact path="/info" element={<Info />} />
        <Route
          exact
          path="/display/:username/:name/:index"
          element={<Display />}
        />
        <Route exact path="*" element={<Page404 />} />
        {/*<Route exact path="/" element={<Home />} />*/}
      </Routes>
      {!standAlone && <Footer />}
    </>
  );
}
const App = () => (
  <Router>
    <Appx />
  </Router>
);

export default App;
