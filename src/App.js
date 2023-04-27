import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import TongueScrapper from "./pages/blog-article-pages/TongueScrapper";
import PushUpBars from "./pages/blog-article-pages/PushUpBars";
import Caps from "./pages/blog-article-pages/Caps";
import SmartWatch from "./pages/blog-article-pages/SmartWatch";
import Bag from "./pages/blog-article-pages/Bag";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/tongue-scrapper" element={<TongueScrapper />} />
        <Route path="/blog/push-up-bars" element={<PushUpBars />} />
        <Route path="/blog/bag" element={<Bag />} />
        <Route path="/blog/caps" element={<Caps />} />
        <Route path="/blog/smart-watch" element={<SmartWatch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
