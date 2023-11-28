import React, { useState } from "react";
import Header from "../../Commons/header/Header";
import { Link } from "react-router-dom";
import { Button, Modal } from "antd";

const ProfileOrder = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
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
                                </li>
                                <li
                                    style={{
                                        borderBottom: "1px solid #F5F5F5",
                                    }}
                                >
                                    <Link to="/profile">
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
                                    </Link>
                                </li>

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
                        <h1 className="text-2xl font-bold mb-5">
                            Đơn hàng của tôi
                        </h1>

                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm rtl:text-right text-black dark:text-gray-400 text-center">
                                <thead className="text-xs text-black uppercase bg-gray-200 ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Mã đơn hàng
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            THời gian đặt hàng
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Trạng thái
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Giá
                                        </th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-[#fff]">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black"
                                        >
                                            #3456_768
                                        </th>
                                        <td className="px-6 py-4 text-black">
                                            October 17, 2023
                                        </td>
                                        <td className="px-6 py-4 text-black">
                                            Đang giao
                                        </td>
                                        <td className="px-6 py-4 text-black">
                                            $2999
                                        </td>
                                        <td>
                                            <>
                                                <Button
                                                    className="bg-blue-500 "
                                                    style={{ color: "white" }}
                                                    // type="primary"
                                                    onClick={showModal}
                                                >
                                                    <i className="fa-solid fa-eye"></i>
                                                </Button>
                                                <Modal
                                                    // title="Chi tiết đơn hàng"
                                                    open={isModalOpen}
                                                    onOk={handleOk}
                                                    onCancel={handleCancel}
                                                    okButtonProps={{
                                                        className:
                                                            "bg-blue-500 text-white",
                                                    }}
                                                >
                                                    <h1 className="text-2xl font-semibold mb-5">
                                                        Chi tiết đơn hàng
                                                    </h1>
                                                    <p className="mb-3">
                                                        Họ và Tên:{" "}
                                                    </p>
                                                    <p className="mb-3">
                                                        Email:{" "}
                                                    </p>
                                                    <p className="mb-3">
                                                        Số điện thoại:{" "}
                                                    </p>
                                                    <p className="mb-3">
                                                        Địa chỉ:{" "}
                                                    </p>
                                                    <p className="mb-3">
                                                        Sản phẩm:{" "}
                                                        <div
                                                            className="flex justify-between items-center "
                                                            style={{
                                                                padding:
                                                                    "10px 0",
                                                                borderBottom:
                                                                    "1px solid #e1e1e1",
                                                            }}
                                                        >
                                                            <div className="flex gap-3 items-center">
                                                                <div className="relative">
                                                                    <img
                                                                        className="rounded-lg w-[80px]"
                                                                        src="//bizweb.dktcdn.net/thumb/thumb/100/361/830/products/sofa-blogger-2.jpg?v=1696047606320"
                                                                        alt=""
                                                                    />{" "}
                                                                    <span className="absolute text-white bg-[#969383] text-[10px] w-4 h-4 rounded-full text-center top-[-6px] right-[-6px]">
                                                                        0
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <p className="font-medium text-[#333]">
                                                                        Ghế sofa
                                                                        Blogger
                                                                    </p>
                                                                    <p className="text-xs text-[#969696]">
                                                                        220 cm
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h5>
                                                                    26.990.000VND
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between items-center mt-3">
                                                            <p className="text-xl font-medium">
                                                                Tổng cộng{" "}
                                                            </p>
                                                            <p className="text-xl font-medium">
                                                                26.990.000 VND
                                                            </p>
                                                        </div>
                                                    </p>
                                                </Modal>
                                            </>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileOrder;
