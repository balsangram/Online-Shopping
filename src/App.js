import "./App.css";
import "./Media.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  BigCard,
  Cart,
  CategoriesPage,
  Error,
  Footer,
  Home,
  Login_Reg,
  Nav,
} from "./Root";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CategoriesPage" element={<CategoriesPage />} />
            <Route path="/Login_Reg" element={<Login_Reg />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/BigCard" element={<BigCard />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
