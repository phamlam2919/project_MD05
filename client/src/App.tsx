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
import Profile from "./Pages/profile/Profile";
import ProfileOrder from "./Pages/profile/ProfileOrder";
import AdminPage from "./Admin/AdminPage";
import Users from "./Admin/Users/Users";
import ProductList from "./Admin/ProductList/ProductList";
import ShopChair from "./Pages/shop/ShopChair";
import AddProduct from "./Admin/ProductList/AddProduct";
import ProductEdit from "./Admin/ProductList/ProductEdit";
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
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile-order" element={<ProfileOrder />} />
                <Route path="/" element={<Homepage />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/shop-sofa" element={<Shop />} />
                <Route path="/shop-chair" element={<ShopChair />} />
                <Route path="/pay" element={<Pay />} />
                <Route path="/admin" element={<AdminPage />}>
                    <Route path="user" element={<Users />} />
                    <Route path="products">
                        <Route index element={<ProductList />} />
                        <Route path="edit/:id" element={<ProductEdit />} />
                        <Route path="addproduct" element={<AddProduct />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
