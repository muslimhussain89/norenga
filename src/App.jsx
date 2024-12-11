import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import RatiosPage from "./Pages/RatiosPage/RatiosPage";
import InvoicePage from "./Pages/Modules/SalesModule/InvoicePage/InvoicePage";
import SingleInvoice from "./Pages/Modules/SalesModule/SingleInvoice/SingleInvoice";
import OrderPage from "./Pages/Modules/SalesModule/OrderPage/OrderPage";
import OfferPage from "./Pages/Modules/SalesModule/OfferPage/OfferPage";
import Login from "./Pages/Login_Singup/Login";
import SignUp from "./Pages/Login_Singup/SignUp";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  // Hide Navbar if the path is "/"
  const shouldShowNavbar = !["/", "/signup"].includes(location.pathname);

  return (
    <>
      {/* Render Navbar conditionally */}
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="landing" element={<LandingPage />}>
          <Route index element={<RatiosPage />} />
          <Route path="sales/invoice" element={<InvoicePage />} />
          <Route path="sales/order" element={<OrderPage />} />
          <Route path="sales/offer" element={<OfferPage />} />
          <Route path="sales/invoice/:id" element={<SingleInvoice />} />
          <Route path="sales/order/:id" element={<SingleInvoice />} />
          <Route path="sales/offer/:id" element={<SingleInvoice />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
