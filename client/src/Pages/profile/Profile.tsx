import React from "react";
import Header from "../../Commons/header/Header";
import { Link } from "react-router-dom";
import { Input } from "antd";

const Profile = () => {
    return (
        <div className="bg-[#F5F5F5] h-[700px]">
            <Header />
            <div className="" style={{ padding: "0 50px" }}>
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
                                    Tài khoản của tôi
                                </Link>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div className="flex gap-5">
                    <div className="w-[30%] h-[300px] bg-[#fff] cursor-pointer">
                        <div
                            className="flex gap-5 items-center"
                            style={{
                                padding: "22px 14px 25px 27px",
                                borderBottom: "1px solid #EEEEEE",
                            }}
                        >
                            <div>
                                <img
                                    src="https://bizweb.dktcdn.net/100/361/830/themes/924241/assets/ellipse_19.png?1701071018847"
                                    alt=""
                                />
                            </div>
                            <div>
                                <p>Xin chào</p>
                                <p className="font-semibold text-xl">Lamm</p>
                            </div>
                        </div>
                        <div>
                            <ul className="" style={{ padding: "0 27px" }}>
                                <li
                                    style={{
                                        borderBottom: "1px solid #F5F5F5",
                                    }}
                                >
                                    <Link to="/profile-order">
                                        <div
                                            className="w-full text-sm text-[#4F525D] font-bold flex items-center gap-4"
                                            style={{ padding: "13px 0" }}
                                        >
                                            <img
                                                src="//bizweb.dktcdn.net/100/361/830/themes/924241/assets/group_1_-4.png?1701071018847"
                                                alt=""
                                            />{" "}
                                            Đơn hàng của tôi
                                        </div>
                                    </Link>
                                </li>
                                <li
                                    style={{
                                        borderBottom: "1px solid #F5F5F5",
                                    }}
                                >
                                    <div
                                        className="w-full text-sm text-[#4F525D] font-bold flex items-center gap-4"
                                        style={{ padding: "13px 0" }}
                                    >
                                        <img
                                            src="//bizweb.dktcdn.net/100/361/830/themes/924241/assets/group_1_-6.png?1701071018847"
                                            alt=""
                                        />{" "}
                                        Chỉnh sửa thông tin cá nhân
                                    </div>
                                </li>

                                {/* <li
                                    style={{
                                        borderBottom: "1px solid #F5F5F5",
                                    }}
                                >
                                    <div
                                        className="w-full text-sm text-[#4F525D] font-bold flex items-center gap-4"
                                        style={{ padding: "13px 0" }}
                                    >
                                        <img
                                            src="//bizweb.dktcdn.net/100/361/830/themes/924241/assets/group_1_-4.png?1701071018847"
                                            alt=""
                                        />{" "}
                                        Đơn hàng của tôi
                                    </div>
                                </li> */}

                                <li>
                                    <div
                                        className="w-full text-sm text-[#4F525D] font-bold flex items-center gap-4"
                                        style={{ padding: "13px 0" }}
                                    >
                                        <img
                                            src="//bizweb.dktcdn.net/100/361/830/themes/924241/assets/group_1_-9.png?1701071018847"
                                            alt=""
                                        />{" "}
                                        Đăng xuất
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="w-[70%] bg-[#fff] "
                        style={{ padding: "20px 30px" }}
                    >
                        <div className="mb-5">
                            <p className="mb-2">Họ và Tên*</p>
                            <Input
                                placeholder="Nhập tên của bạn"
                                className="h-[40px]"
                            />
                        </div>

                        <div className="mb-5">
                            <p className="mb-2">Email*</p>
                            <Input
                                disabled
                                placeholder="Email"
                                className="h-[40px]"
                            />
                        </div>

                        <div className="mb-5">
                            <p className="mb-2">Số điện thoại*</p>
                            <Input
                                placeholder="Nhập số điện thoại của bạn"
                                className="h-[40px]"
                            />
                        </div>

                        <div className="mb-5">
                            <p className="mb-2">Địa chỉ*</p>
                            <Input
                                placeholder="Nhập địa chỉ của bạn"
                                className="h-[40px]"
                            />
                        </div>

                        <button className="w-[200px] h-[45px] bg-[#f02b2b] text-[#fff] rounded-[50px] text-xl font-semibold">
                            Cập nhật
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
