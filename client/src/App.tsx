import "./App.css";
import Cart from "./Pages/cart/Cart";
import Detail from "./Pages/detail/Detail";
import Homepage from "./Pages/homepage/Homepage";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import { Routes, Route, useLocation } from "react-router-dom";
import Shop from "./Pages/shop/Shop";
import { useEffect } from "react";
import Pay from "./Pages/pay/Pay";
function App() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Homepage />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/pay" element={<Pay />} />
            </Routes>
        </>
    );
}

export default App;
