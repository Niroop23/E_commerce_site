import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Product_Details from "./pages/Product_Details";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <div className=" px-2 sm:px-4  md:px-[7vw] lg:px-[9vw] bg-[#e3e6e6]">
        <Nav />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:prodId" element={<Product_Details />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <div className="  sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-[#7e8d8d] border-t-2  border-black">
        <Footer />
      </div>
    </div>
  );
}

export default App;

//https://youtu.be/7E6um7NGmeE?feature=shared
//https://youtu.be/yQimoqo0-7g?feature=shared
