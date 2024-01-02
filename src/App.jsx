import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage/ProductPage";
import HomePage from "./components/homePage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productpage/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
