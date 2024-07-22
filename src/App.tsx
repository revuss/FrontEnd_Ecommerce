import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import UserLayout from "./layout/userLayout";
import Homepage from "./components/homepage/main";
import Contact from "./components/contact/contact";
import MenSection from "./components/men/main";
import WomenSection from "./components/women/main";
import OrdersPage from "./components/orders/main";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index path="/" element={<Homepage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/men" element={<MenSection />} />
            <Route path="/women" element={<WomenSection />} />
            <Route path="/orders" element={<OrdersPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
