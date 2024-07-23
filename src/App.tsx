import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import UserLayout from "./layout/userLayout";
import Homepage from "./components/homepage/main";
import Contact from "./components/contact/contact";
import MenSection from "./components/men/main";
import WomenSection from "./components/women/main";
import OrdersPage from "./components/orders/main";
import AccessoriesLayout from "./components/accessories/main";
import LoginAdmin from "./components/admin/login/main";
import RegisterAdmin from "./components/admin/register/main";
import AdminAdd from "./components/admin/addProduct/main";
import Notfound from "./components/not-found";
import CartComponent from "./components/cart/main";
import AdminPanel from "./components/admin/handle/main";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index path="/" element={<Homepage />} />
            <Route index path="/*" element={<Notfound />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/men" element={<MenSection />} />
            <Route path="/women" element={<WomenSection />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/accessories" element={<AccessoriesLayout />} />
            <Route path="/admin/login" element={<LoginAdmin />} />
            <Route path="/admin/register" element={<RegisterAdmin />} />
            <Route path="/admin/add" element={<AdminAdd />} />
            <Route path="/cart" element={<CartComponent />} />
            <Route path="/admin/data" element={<AdminPanel />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
