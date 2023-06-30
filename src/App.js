import Home from "./pages/home";
import About from "./pages/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/nav/nav";
import ProductDetails from "./pages/productDetails";

function App() {
  return (
      <Router>
        <Navigation />
        <main>
          <Routes>
            <Route index element={<Home />} />{'landing page'}
            <Route path="/about" element={<About />} />
            <Route path="/details/:id" element={<ProductDetails />}/>
          </Routes>
        </main>
        <footer></footer>
      </Router>
  );
}

export default App;
