import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import OrderHistory from "./features/bookings/OrderHistory";
import TrackingDetails from "./features/bookings/TrackingDetails";
import Account from "./features/settings/Account";
import CoffeeDetails from "./features/shopping/CoffeeDetails";
import CategoryBox from "./hooks/CategoryBox";
import SearchBox from "./hooks/SearchBox";
import About from "./pages/About";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";

import Shopping from "./pages/Shopping";
import ThankYouPage from "./pages/ThankYouPage";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    // <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="search" element={<SearchBox />} />
          <Route path="category" element={<CategoryBox />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="shopping" element={<Shopping />} />
          <Route path="about" element={<About />} />
          <Route path="account" element={<Account />} />
          <Route path="thankyou" element={<ThankYouPage />} />
          <Route path="orderHistory" element={<OrderHistory />} />
          <Route path="tracking" element={<TrackingDetails />} />
          <Route path="coffeeDetail" element={<CoffeeDetails />} />
        </Route>
      </Routes>
    // </BrowserRouter>
  );
}

export default App;
