import React, { useEffect, useState } from "react";
import Header from "../../Commons/header/Header";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Commons/footer/Footer";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import CartItem from "./CartItem";
import { formatCurrency } from "../../helpers";
import axios from "axios";

interface CartItem {
    _id: number;
    clickNumber: number;
    price: number;
    sale: number;
}

interface RootState {
    cart: CartItem[];
}
const Cart = () => {
    const cart = useSelector((state: RootState) => state.cart);
    const email = JSON.parse(localStorage.getItem("email") as string) || "";
    const [user_id, setUserId] = useState();
    const getEmail = () => {
        axios
            .get(`http://localhost:8000/api/v1/users/email/${email}`)
            .then((res) => setUserId(res.data.user_id))
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        if (email) {
            getEmail();
        }
    }, []);
    const findCart = cart.filter(
        (item: any) => item.user_id === Number(user_id)
    );
    const navigate = useNavigate();

    const handleCheckout = (e: React.MouseEvent) => {
        e.preventDefault();
        if (cart.length > 0) {
            navigate("/pay");
        } else {
            Swal.fire(
                "Không Thành Công",
                "Chưa có sản phẩm nào trong giỏ hàng",
                "warning"
            );
        }
    };
    return (
        <div>
            <Header />
            <div style={{ padding: "0 50px" }}>
                <nav
                    className="flex mt-[30px] mb-[30px]"
                    aria-label="Breadcrumb"
                >
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <Link
                                to="/"
                                className="inline-flex items-center text-base font-medium text-gray-700"
                            >
                                Trang chủ
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg
                                    className="rtl:rotate-180 w-3 h-3 text-gray-700 mx-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                                <Link
                                    to=""
                                    className="ms-1 text-base font-medium text-gray-700 "
                                >
                                    Giỏ hàng của bạn
                                </Link>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div>
                    <h1 className="text-[36px] font-bold text-[#232734] mb-7">
                        Giỏ hàng (
                        {cart.length > 0 &&
                            findCart.reduce(
                                (pre: number, cur: any) =>
                                    (pre += cur.clickNumber),
                                0
                            )}{" "}
                        sản phẩm)
                    </h1>
                </div>
                <div className="flex gap-5">
                    <div className="w-[70%]">
                        {cart.length > 0 ? (
                            findCart.map((item) => (
                                <CartItem key={item._id} detail={item} />
                            ))
                        ) : (
                            <p
                                style={{
                                    textAlign: "center",
                                    fontSize: "25px",
                                    fontWeight: "600",
                                    padding: "30px",
                                }}
                            >
                                Chưa có sản phẩm nào trong giỏ hàng
                            </p>
                        )}
                    </div>
                    <div className="w-[30%]">
                        <div
                            style={{
                                padding: "21px 30px",
                                border: "1px solid #E0E0E0",
                            }}
                        >
                            <div className="flex items-center justify-between mb-7">
                                <b className="text-[#232734] text-lg font-semibold">
                                    Tạm tính
                                </b>
                                <span className="text-[#B18979] text-2xl font-semibold">
                                    {formatCurrency(
                                        findCart.reduce((pre, cur) => {
                                            return (pre +=
                                                cur.price * cur.clickNumber);
                                        }, 0)
                                    )}
                                </span>
                            </div>

                            <div className="flex items-center justify-between mb-7">
                                <b className="text-[#232734] text-lg font-semibold">
                                    Giảm giá
                                </b>
                                <span className="text-[#B18979] text-2xl font-semibold">
                                    0 VND
                                </span>
                            </div>

                            <div className="flex items-center justify-between mb-7">
                                <b className="text-[#232734] text-lg font-semibold">
                                    Giá vận chuyển <br /> (Tạm tính)
                                </b>
                                <span className="text-[#B18979] text-2xl font-semibold">
                                    0 VND
                                </span>
                            </div>

                            <div className="flex items-center justify-between mb-7">
                                <b className="text-[#232734] text-lg font-semibold">
                                    Tổng cộng
                                </b>
                                <span className="text-[#B18979] text-2xl font-semibold">
                                    {formatCurrency(
                                        findCart.reduce((pre, cur) => {
                                            return (pre +=
                                                cur.price * cur.clickNumber);
                                        }, 0)
                                    )}
                                </span>
                            </div>
                            <div className="flex items-center justify-between mb-7">
                                <b className="text-[#232734] text-lg font-semibold">
                                    Nhập mã giảm giá (nếu có)
                                </b>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full h-[44px] rounded"
                                    style={{ border: "1px solid #D9D9D9" }}
                                />
                                <button className="w-[75px] h-[36px] absolute top-[8%] right-[5px] bg-[#B18979] text-sm font-semibold rounded text-[#fff]">
                                    {" "}
                                    Áp dụng
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={handleCheckout}
                            className="w-full h-[70px] text-lg font-bold bg-[#B18979] text-[#fff] mt-5"
                        >
                            Thanh toán{" "}
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
