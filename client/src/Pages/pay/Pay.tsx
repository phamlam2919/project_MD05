import React, { useEffect, useState } from "react";
import Header from "../../Commons/header/Header";
import PayCheckOut from "./PayCheckOut";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { formatCurrency } from "../../helpers";

interface Product {
    productId: string;
    name: string;
    clickNumber: number;
    stock: number;
    price: number;
    sale: number;
}

interface Order {
    orderId: string;
    orderName: string;
    phone: string;
    email: string;
    ward: string;
    district: string;
    province: string;
    products: Product[];
}
const Pay = () => {
    const [order, setOrder] = useState<Order>({
        orderId: "",
        orderName: "",
        phone: "",
        email: "",
        ward: "",
        district: "",
        province: "",
        products: [],
    });
    const [searchParams] = useSearchParams();

    const cart = useSelector((state: any) => state.cart);

    const email = JSON.parse(localStorage.getItem("email") as string) || "";
    const [user_id, setUserId] = useState();
    const getEmail = () => {
        axios
            .get(`http://localhost:8000/api/v1/users/email/${email}`)
            .then((res) => setUserId(res.data.user_id))
            .catch((err) => console.log(err));
    };
    let queryString = searchParams.get("id");
    let BASE_API = "http://localhost:8000/api/v1";
    const dispatch = useDispatch();
    const findCart = cart.filter(
        (item: any) => item.user_id === Number(user_id)
    );
    // console.log("-----", findCart);

    const fetchOrder = async () => {
        try {
            let res = await fetch(BASE_API + `/orders/${queryString}`);
            let data = await res.json();
            let fetchOrder: Order = {
                orderId: data.row[0].order_id,
                orderName: data.row[0].order_name,
                phone: data.row[0].phone,
                email: data.row[0].email,
                ward: data.row[0].ward,
                district: data.row[0].district,
                province: data.row[0].province,
                products: [],
            };
            data.row.forEach((element: any) => {
                fetchOrder.products.push({
                    productId: element.product_id,
                    name: element.name,
                    clickNumber: element.number,
                    stock: element.stock,
                    price: element.price,
                    sale: element.sale,
                });
                setOrder({ ...fetchOrder });
                dispatch({
                    type: "ORDER_TO_CART",
                    payload: fetchOrder.products,
                });
            });
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (queryString) {
            fetchOrder();
        }
        if (email) {
            getEmail();
        }
    }, [queryString]);
    return (
        <div>
            <div className="flex">
                <PayCheckOut cart={findCart} />
                <div
                    className="w-[35%] bg-[#fafafa]"
                    style={{
                        boxShadow: "1px 0 0 #e1e1e1 inset",
                    }}
                >
                    <div className="pr-[120px]">
                        <h1
                            className="text-lg text-[#333] font-semibold p-6"
                            style={{
                                borderBottom: "1px solid #e1e1e1",
                            }}
                        >
                            Đơn hàng của bạn
                        </h1>
                        {cart.length > 0 &&
                            findCart.map((e: any) => (
                                <div
                                    className="flex justify-between items-center p-5"
                                    style={{
                                        borderBottom: "1px solid #e1e1e1",
                                    }}
                                >
                                    <div className="flex gap-3">
                                        <div className="relative">
                                            <img
                                                className="rounded-lg w-[80px]"
                                                src={e.image_shows[0].image}
                                                alt=""
                                            />{" "}
                                            <span className="absolute text-white bg-[#969383] text-[10px] w-4 h-4 rounded-full text-center top-[-6px] right-0">
                                                {e.clickNumber}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#333]">
                                                {e.name}
                                            </p>
                                            <p className="text-xs text-[#969696]">
                                                {e.tag[0].length} cm
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <h5>
                                            {formatCurrency(Number(e.price))}
                                        </h5>
                                    </div>
                                </div>
                            ))}

                        <div
                            className="p-5 flex gap-3 text-[#717171]"
                            style={{
                                borderBottom: "1px solid #e1e1e1",
                            }}
                        >
                            <input
                                placeholder="Nhập mã giảm giá"
                                type="text"
                                className="w-full rounded h-[44px] bg-[#fff] border-[#d5d5d5]"
                                style={{
                                    padding: "0.94em 0.8em",
                                    border: "1px #d9d9d9 solid",
                                }}
                            />
                            <button className="bg-[#d7c5b9] h-[44px] w-[120px] rounded p-2 text-sm">
                                Áp dụng
                            </button>
                        </div>
                        <div
                            className="text-[#717171] flex justify-between p-5 items-center"
                            style={{
                                borderBottom: "1px solid #e1e1e1",
                            }}
                        >
                            <p>Tạm tính</p>
                            <p>
                                {cart.length > 0 &&
                                    formatCurrency(
                                        findCart.reduce(
                                            (pre: any, cur: any) => {
                                                return (pre +=
                                                    cur.price *
                                                    cur.clickNumber);
                                            },
                                            0
                                        )
                                    )}
                            </p>
                        </div>
                        <div
                            className="text-[#717171] flex justify-between p-5 items-center"
                            // style={{ borderBottom: "1px solid #e1e1e1" }}
                        >
                            <p>Tổng cộng</p>
                            <p className="text-[#969383] text-2xl font-bold">
                                {cart.length > 0 &&
                                    formatCurrency(
                                        findCart.reduce(
                                            (pre: any, cur: any) => {
                                                return (pre +=
                                                    cur.price *
                                                    cur.clickNumber);
                                            },
                                            0
                                        )
                                    )}{" "}
                            </p>
                        </div>
                        {/* <button className="bg-[#d7c5b9] h-[44px] w-[120px] rounded p-2 text-sm font-medium">
                            ĐẶT HÀNG
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pay;
