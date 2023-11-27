import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage.jsx";
import AboutPage from "./Pages/About/AboutPage.jsx";
import CustomerPage from "./Pages/Customer/CustomerPage.jsx";
import CategoryPage from "./Pages/Category/CategoryPage.jsx";
import ProductsPage from "./Pages/Products/ProductsPage.jsx";
import Login from "./Pages/User/UserPage.jsx";
import RouteNotFound from "./Pages/Route-not-found/RouteNotFound.jsx";
import Layout from "./components/layout/Layout.jsx";

function App() {
  const is_dashboard = window.location.pathname.includes("dashboard");
  return (
    <BrowserRouter>
      {!is_dashboard && (
        <>
          <Layout />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/product" element={<ProductsPage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/customer" element={<CustomerPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<RouteNotFound />} />
          </Routes>
        </>
      )}

      {is_dashboard && (
        <>
          <Routes>
            <Route path="dashboard">
              <Route path="" element={<h1>Dashboard</h1>} />
              <Route path="user" element={<h1>Dashboard User</h1>} />
            </Route>
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
