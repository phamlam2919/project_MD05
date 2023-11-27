import React from "react";

const Footer = () => {
    return (
        <div
            className="flex justify-between items-center"
            style={{ padding: "75px 50px" }}
        >
            <div>
                <img
                    src="https://bizweb.dktcdn.net/100/361/830/theme_temp/903732/assets/logo-black-e51d0c45-90d3-40ca-8d8e-c1f009c156b2.png?1684944021113"
                    alt=""
                />
                <h3 className="text-lg text-[#232734] font-bold mt-5 mb-5">
                    Công Ty TNHH BLANC DECO
                </h3>
                <div>
                    <h4 className="text-sm text-[#232734] font-bold mb-2 ">
                        Showroom Tp. HCM
                    </h4>
                    <p className="font-medium text-[#4F525D] flex items-center gap-2">
                        <img
                            src="//bizweb.dktcdn.net/thumb/icon/100/361/830/themes/924241/assets/shop-location_1.png?1700106796496"
                            alt=""
                        />
                        Số 44 đường 34 (gần đường Trần Não), Phường Bình An,
                        Quận 2, TP. HCM
                    </p>
                    <p className="font-medium text-[#4F525D] flex items-center gap-2">
                        <img
                            src="//bizweb.dktcdn.net/thumb/icon/100/361/830/themes/924241/assets/settings_phone_1.png?1700106796496"
                            alt=""
                        />
                        0909 900 999 | 0866 584 794
                    </p>
                </div>
                <div className="mt-5">
                    <h4 className="text-sm text-[#232734] font-bold mb-2 ">
                        Showroom Hà Nội
                    </h4>
                    <p className="font-medium text-[#4F525D] flex items-center gap-2">
                        <img
                            src="//bizweb.dktcdn.net/thumb/icon/100/361/830/themes/924241/assets/shop-location_1.png?1700106796496"
                            alt=""
                        />
                        Tầng 5, 111 Nguyễn Xiển, Hạ Đình, Thanh Xuân, Hà Nội
                    </p>
                    <p className="font-medium text-[#4F525D] flex items-center gap-2">
                        <img
                            src="//bizweb.dktcdn.net/thumb/icon/100/361/830/themes/924241/assets/settings_phone_1.png?1700106796496"
                            alt=""
                        />
                        0867 328 396
                    </p>
                </div>
                <div className="flex items-center gap-4 mt-5">
                    <div>
                        <img
                            src="https://bizweb.dktcdn.net/thumb/icon/100/361/830/themes/924241/assets/youtube.png?1700106796496"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src="//bizweb.dktcdn.net/thumb/icon/100/361/830/themes/924241/assets/facebook.png?1700106796496"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src="https://bizweb.dktcdn.net/thumb/icon/100/361/830/themes/924241/assets/instagram.png?1700106796496"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="flex gap-[60px]">
                <div>
                    <h3 className="text-base font-bold text-[#232734] uppercase mb-3">
                        SẢN PHẨM
                    </h3>
                    <p className="text-[#7B7D85] mb-3 mt-2">Sofa</p>
                    <p className="text-[#7B7D85] mb-3 mt-2">Ghế</p>
                    <p className="text-[#7B7D85] mb-3 mt-2">Thảm trải sàn</p>
                    <p className="text-[#7B7D85] mb-3 mt-2">Bàn</p>
                    <p className="text-[#7B7D85] mb-3 mt-2">Đèn</p>
                    <p className="text-[#7B7D85] mb-3 mt-2">Trang trí</p>
                    <p className="text-[#7B7D85] mb-3 mt-2">Giường</p>
                </div>
                <div>
                    <h3 className="text-base font-bold text-[#232734] uppercase mb-3">
                        VỀ BLANC'
                    </h3>
                    <p className="text-[#7B7D85] mb-3 mt-2">Về chúng tôi</p>
                    <p className="text-[#7B7D85] mb-3 mt-2">
                        Hệ thống cửa hàng
                    </p>
                    <p className="text-[#7B7D85] mb-3 mt-2">Tuyển dụng</p>
                    <p className="text-[#7B7D85] mb-3 mt-2">Blog</p>
                </div>
                <div>
                    <h3 className="text-base font-bold text-[#232734] uppercase mb-3">
                        TRỢ GIÚP
                    </h3>
                    <p className="text-[#7B7D85] mb-3 mt-2">
                        Đặt hàng & Thanh toán
                    </p>
                    <p className="text-[#7B7D85] mb-3 mt-2">
                        Vận chuyển & Giao hàng
                    </p>
                    <p className="text-[#7B7D85] mb-3 mt-2">Đổi & Trả hàng</p>
                    <p className="text-[#7B7D85] mb-3 mt-2">
                        Hướng dẫn vệ sinh
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
