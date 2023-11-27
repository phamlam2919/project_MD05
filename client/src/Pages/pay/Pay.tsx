import React from "react";
import Header from "../../Commons/header/Header";
import PayCheckOut from "./PayCheckOut";

const Pay = () => {
    return (
        <div>
            <div className="flex">
                <PayCheckOut />
                <div
                    className="w-[35%] bg-[#fafafa]"
                    style={{
                        boxShadow: "1px 0 0 #e1e1e1 inset",
                    }}
                >
                    <div className="pr-[120px]">
                        <h1
                            className="text-lg text-[#333] font-semibold p-6"
                            style={{ borderBottom: "1px solid #e1e1e1" }}
                        >
                            Đơn hàng của bạn
                        </h1>
                        <div
                            className="flex justify-between items-center p-5"
                            style={{ borderBottom: "1px solid #e1e1e1" }}
                        >
                            <div className="flex gap-3">
                                <img
                                    className="rounded-lg relative"
                                    src="//bizweb.dktcdn.net/thumb/thumb/100/361/830/products/sofa-blogger-2.jpg?v=1696047606320"
                                    alt=""
                                />{" "}
                                <span className="absolute text-white bg-[#969383] text-[10px] w-4 h-4 rounded-full text-center right-[454px] top-[90px]">
                                    1
                                </span>
                                <div>
                                    <p className="font-medium text-[#333]">
                                        Ghế sofa Blogger
                                    </p>
                                    <p className="text-xs text-[#969696]">
                                        220 cm
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h5>26.990.000 VND</h5>
                            </div>
                        </div>
                        <div
                            className="p-5 flex gap-3 text-[#717171]"
                            style={{ borderBottom: "1px solid #e1e1e1" }}
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
                            style={{ borderBottom: "1px solid #e1e1e1" }}
                        >
                            <p>Tạm tính</p>
                            <p>42.680.000 VND</p>
                        </div>
                        <div
                            className="text-[#717171] flex justify-between p-5 items-center"
                            // style={{ borderBottom: "1px solid #e1e1e1" }}
                        >
                            <p>Tổng cộng</p>
                            <p className="text-[#969383] text-xl">
                                42.680.000 VND
                            </p>
                        </div>
                        {/* <button className="bg-[#d7c5b9] h-[44px] w-[120px] rounded p-2 text-sm font-medium">
                            ĐẶT HÀNG
                        </button> */}
                    </div>{" "}
                </div>
            </div>
        </div>
    );
};

export default Pay;
