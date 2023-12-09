import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import PhotosPage from "./pages/PhotosPage";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Routes, Route 감싸야 함. */}
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />}></Route>
            <Route path="/photos" element={<PhotosPage />}></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
