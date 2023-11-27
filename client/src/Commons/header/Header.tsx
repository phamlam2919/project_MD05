import { Dropdown, Space } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
    let cart = useSelector((state: any) => state.cart);
    const email = JSON.parse(localStorage.getItem("email") as string) || "";
    const [user_id, setUserId] = useState();
    const token = JSON.parse(localStorage.getItem("token") as string) || "";
    const findCart = cart.filter(
        (item: any) => item.user_id === Number(user_id)
    );
    console.log(findCart);
    const getUser = () => {
        axios
            .get(`http://localhost:8000/api/v1/users/email/${email}`)
            .then((res) => {
                setUserId(res.data.user_id);
                setUserName(res.data.name);
            })
            .catch((err) => console.log(err));
    };
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        // console.log(name);
        if (email) {
            setLoggedIn(true);
            getUser();
        }
    }, [email]);

    const handleLogout = () => {
        // dispatch({ type: "CLEAR_CART" });
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        // localStorage.removeItem("cart");
        setLoggedIn(false);
        setUserName("");
        navigate("/login");
    };
    const items = loggedIn
        ? [
              {
                  key: "1",
                  label: <span>{userName}</span>,
              },
              {
                  key: "2",
                  label: (
                      <a onClick={handleLogout} style={{ cursor: "pointer" }}>
                          Đăng xuất
                      </a>
                  ),
              },
          ]
        : [
              {
                  key: "1",
                  label: <Link to="/login">Đăng nhập</Link>,
              },
              {
                  key: "2",
                  label: <Link to="/register">Đăng ký</Link>,
              },
          ];
    return (
        <div className="w-full" style={{ padding: "15px 50px" }}>
            <div className="flex justify-between items-center">
                <div>
                    <Link to="/">
                        <img
                            src="//bizweb.dktcdn.net/thumb/medium/100/361/830/themes/924241/assets/logo_black.png?1700487202938"
                            alt=""
                            className="cursor-pointer"
                        />
                    </Link>
                </div>
                <div className="">
                    <ul className="text-[#BF9F83] text-base font-bold font-['Manrope', sans-serif] flex gap-10 ">
                        <Link to="/shop">
                            <li className="cursor-pointer">Sofa</li>
                        </Link>
                        <li className="cursor-pointer">Ghế</li>
                        <li className="cursor-pointer">Thảm trải sàn</li>
                        <li className="cursor-pointer">Bàn</li>
                        <li className="cursor-pointer">Đèn</li>
                        <li className="cursor-pointer">Trang trí</li>
                        <li className="cursor-pointer">Giường</li>
                        <li className="cursor-pointer">Blog</li>
                    </ul>
                </div>

                <div className="flex gap-3">
                    <div className="relative">
                        <i className="fa-solid fa-magnifying-glass absolute top-[10px] left-3 text-[#C09972]"></i>
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            className="w-[145px] h-[34px] rounded-[40px] text-[12px] text-[#C09972] "
                            style={{
                                border: "1px solid #C09972",
                                padding: "9px 20px 9px 32px",
                            }}
                        />
                    </div>
                    <Link to="/cart">
                        <div className="cursor-pointer w-[34px] h-[34px] rounded-[34px] bg-[#B18979] text-[10px] text-center p-3 text-white relative">
                            <svg
                                className="absolute left-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="12"
                                viewBox="0 0 11 12"
                                fill="none"
                            >
                                <path
                                    d="M10.6205 10.253L9.81448 5.418C9.79504 5.30108 9.7347 5.19487 9.64422 5.11831C9.55374 5.04175 9.439 4.99982 9.32048 5H1.32048C1.20212 5.00006 1.08763 5.04209 0.997354 5.11863C0.907081 5.19517 0.846886 5.30125 0.827476 5.418L0.0204763 10.253C-0.0154224 10.468 -0.00401761 10.6883 0.0538964 10.8985C0.11181 11.1087 0.214842 11.3037 0.355816 11.47C0.496789 11.6363 0.672317 11.7698 0.870176 11.8614C1.06803 11.9529 1.28347 12.0002 1.50148 12H9.13948C9.3574 12.0001 9.57272 11.9527 9.77046 11.8611C9.96819 11.7695 10.1436 11.6359 10.2845 11.4696C10.4253 11.3033 10.5283 11.1083 10.5861 10.8982C10.644 10.6881 10.6554 10.4679 10.6195 10.253H10.6205Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M4.07031 4V2.75C4.07031 2.41848 4.20201 2.10054 4.43643 1.86612C4.67085 1.6317 4.98879 1.5 5.32031 1.5C5.65183 1.5 5.96978 1.6317 6.2042 1.86612C6.43862 2.10054 6.57031 2.41848 6.57031 2.75V4H8.07031V2.75C8.07031 2.02065 7.78058 1.32118 7.26486 0.805456C6.74913 0.289731 6.04966 0 5.32031 0C4.59097 0 3.89149 0.289731 3.37577 0.805456C2.86004 1.32118 2.57031 2.02065 2.57031 2.75V4H4.07031Z"
                                    fill="white"
                                ></path>
                            </svg>
                            <span className="absolute top-[10px] left-6">
                                {cart.length > 0 &&
                                    findCart.reduce(
                                        (pre: number, cur: any) =>
                                            (pre += cur.clickNumber),
                                        0
                                    )}
                            </span>
                        </div>
                    </Link>
                    <Dropdown menu={{ items }}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <div className="cursor-pointer w-[34px] h-[34px] rounded-[34px] bg-[#B18979] text-[15px] text-center p-3">
                                    <img
                                        className="lazy"
                                        src="//bizweb.dktcdn.net/100/361/830/themes/924241/assets/profile_1.png?1699878652322"
                                        alt=""
                                    />
                                </div>
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};

export default Header;
