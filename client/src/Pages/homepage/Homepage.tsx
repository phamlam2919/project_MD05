import Header from "../../Commons/header/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import Footer from "../../Commons/footer/Footer";
import { formatCurrency } from "../../helpers";
import { Link } from "react-router-dom";
const Homepage = () => {
    const [productsSofa, setProductsSofa] = useState<any[]>([]);
    const fetchProducts = async () => {
        let responseSofa = await fetch(
            `http://localhost:8000/api/v1/products?category=1`
        );
        let dataSofa = await responseSofa.json();
        console.log(dataSofa);

        setProductsSofa(dataSofa);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (productsSofa && currentIndex + 3 < productsSofa.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (productsSofa && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div>
            <div className="relative ">
                <div className="z-10 absolute w-full">
                    <Header />
                </div>
                <img
                    className="w-full"
                    src="https://bizweb.dktcdn.net/thumb/2048x2048/100/361/830/theme_temp/924241/assets/subtract-c6136c18-7614-40c7-984a-2559f1173b00-1-bcc66359-01f8-451e-996f-e0de8ef87391.png?1696691336418"
                    alt=""
                />
                <div className="absolute top-0 left-0 z-[4]">
                    <img
                        src="https://bizweb.dktcdn.net/thumb/2048x2048/100/361/830/theme_temp/924241/assets/light-decor-80935d28-c1d4-42c4-a572-bbd5e8d32579-9afaf662-fe72-40c1-8cd1-d0f3f06f678c.png?1696691038160"
                        alt=""
                    />
                </div>
                <div className="absolute top-0 right-0 text-right flex z-[2]">
                    <img
                        src="https://bizweb.dktcdn.net/thumb/grande/100/361/830/theme_temp/924241/assets/decor-line-7e33ca33-5d04-4376-b16d-8875b5ab49ca-1-d7848be5-6af3-4c3b-8b74-61357de62a3a.png?1696691405758"
                        alt=""
                    />
                </div>
                <div className="absolute top-[15%] right-[80px] flex z-[3]">
                    <img
                        src="https://bizweb.dktcdn.net/thumb/medium/100/361/830/theme_temp/924241/assets/group-163-4f6d0486-6a16-4df2-8179-bdc2d3f119f3-1-4f115bea-52b6-48bc-8d53-4cda941e300a.png?1696691405758"
                        alt=""
                    />
                </div>
                <div className=" absolute top-[138px] right-[12%]">
                    <div>
                        <img
                            src="https://bizweb.dktcdn.net/thumb/grande/100/361/830/theme_temp/924241/assets/1-b6901af8-1db4-497a-a110-ff809933ab81-e358d6d4-75fd-4f08-a3e9-fce29a02327d.png?1696689885618"
                            alt=""
                        />
                    </div>
                </div>
                <div className="absolute top-[210px] left-[3%] z-10">
                    <h1 className="text-[54px] font-extrabold text-[#fff]">
                        Nội thất cao cấp <br />
                        cho phong cách sống hiện đại
                    </h1>
                    <p className="text-[20px] font-medium text-[#fff]">
                        Trải nghiệm không gian sống tối giản và sang trọng cùng
                        nội thất BLANC'
                    </p>
                    <div className="mt-[70px] ">
                        <button className="w-[200px] h-[56px] text-[#FFFFFF] bg-[#B18979] text-xl font-bold rounded-[56px]">
                            KHÁM PHÁ
                        </button>
                        <button
                            className="w-[200px] h-[56px] text-[#B18979] bg-[#B18979] text-xl font-bold rounded-[56px] bg-[transparent] ml-5"
                            style={{ border: "1px solid #B18979" }}
                        >
                            {" "}
                            <i className="fa-solid fa-play text-white w-[26px] h-[26px] p-[3px] rounded-full bg-[#B18979] text-sm mr-2"></i>
                            Xem video
                        </button>
                    </div>
                </div>
            </div>
            <div
                style={{ padding: "0 50px" }}
                className="mt-[180px] flex justify-between gap-3"
            >
                <div
                    className="w-[400px] h-[300px] overflow-hidden relative bg-[#F5F5F5] cursor-pointer"
                    style={{ padding: "26px 33px" }}
                >
                    <h3 className="text-[36px] text-[#232734] font-bold">
                        Thảm trải sàn
                    </h3>
                    <span className="text-lg font-medium text-[#4F525D]">
                        Xem tất cả <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <div className="absolute top-[30px] right-[38px]">
                        <img
                            className="w-full"
                            src="https://bizweb.dktcdn.net/thumb/medium/100/361/830/theme_temp/924241/assets/artboard-1-e4216a02-f416-4c35-acb1-a4df28ce1e68-a0695233-54d3-4d70-8efd-7f4efb5aba9e.png?1696691515717"
                            alt=""
                        />
                    </div>
                </div>

                <div
                    className="w-[600px] h-[300px] overflow-hidden relative bg-[#FDFAF4] cursor-pointer"
                    style={{ padding: "26px 33px" }}
                >
                    <div className="absolute z-[11]">
                        <h3 className="text-[36px] text-[#232734] font-bold z-10">
                            Sofa
                        </h3>
                        <span className="text-lg font-medium text-[#4F525D]">
                            Xem tất cả
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                    <div className="absolute top-[95px] right-[8px]">
                        <img
                            className="w-full"
                            src="https://bizweb.dktcdn.net/thumb/grande/100/361/830/theme_temp/924241/assets/artboard-2-38bc5ecd-7323-4d77-a097-d3785b3270a4-b459e350-be1a-4d65-99f2-ed11059a9606.png?1696691515717"
                            alt=""
                        />
                    </div>
                </div>

                <div
                    className="w-[400px] h-[300px] overflow-hidden relative bg-[#F5F5F5] cursor-pointer"
                    style={{ padding: "26px 33px" }}
                >
                    <h3 className="text-[36px] text-[#232734] font-bold">
                        Bàn
                    </h3>
                    <span className="text-lg font-medium text-[#4F525D]">
                        Xem tất cả <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <div className="absolute top-[0px] right-[10px]">
                        <img
                            className="w-full"
                            src="https://bizweb.dktcdn.net/thumb/large/100/361/830/theme_temp/924241/assets/banner-web1-3-938a9fd6-c198-450a-aa19-9a3e5316242f-bd90928f-ddca-495c-8415-cb05668c1111.png?1696691515717"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div
                style={{ padding: "0 50px" }}
                className="flex justify-between gap-3 mt-3"
            >
                <div
                    className="w-[520px] h-[300px] relative bg-[#FDFAF4] cursor-pointer"
                    style={{ padding: "26px 33px" }}
                >
                    <div className="absolute z-[11] w-[450px] text-right">
                        <h3 className="text-[36px] text-[#232734] font-bold z-10">
                            Ghế
                        </h3>
                        <span className="text-lg font-medium text-[#4F525D]">
                            Xem tất cả
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                    <div className="absolute top-[60px] ">
                        <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/361/830/theme_temp/924241/assets/artboard-3-a2774527-bfdc-4f2d-a483-63df5449725a-5525d8af-b03b-406d-b607-bd2384fbca78.png?1696691515717"
                            alt=""
                        />
                    </div>
                </div>

                <div
                    className="w-[380px] h-[300px] relative bg-[#F5F5F5] cursor-pointer"
                    style={{ padding: "26px 33px" }}
                >
                    <div className="absolute z-[11] w-[300px] text-right">
                        <h3 className="text-[36px] text-[#232734] font-bold z-10">
                            Trang trí
                        </h3>
                        <span className="text-lg font-medium text-[#4F525D]">
                            Xem tất cả
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                    <div className="absolute top-[-15px] left-[2px] ">
                        <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/361/830/theme_temp/924241/assets/artboard-6-2d619493-f928-4f17-8b8c-a2fab9ec16b2-2e846c07-350d-41c9-acdb-d9cc2d4a5551.png?1696691515717"
                            alt=""
                        />
                    </div>
                </div>

                <div
                    className="w-[520px] h-[300px] relative bg-[#FDFAF4] cursor-pointer"
                    style={{ padding: "26px 33px" }}
                >
                    <div className="absolute z-[11] w-[450px] text-right">
                        <h3 className="text-[36px] text-[#232734] font-bold z-10">
                            Đèn
                        </h3>
                        <span className="text-lg font-medium text-[#4F525D]">
                            Xem tất cả
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                    <div className="absolute top-[100px]">
                        <img
                            src="https://bizweb.dktcdn.net/thumb/medium/100/361/830/theme_temp/924241/assets/artboard-5-242fc7b9-93ce-40a9-964d-6c63b906e6ef-6d519aae-2d29-40ab-b925-ed4427de7178.png?1696691515717"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div
                style={{ padding: "0 145px" }}
                className="flex justify-between items-center mt-16 mb-16"
            >
                <div className="text-center ">
                    <img
                        className="ml-[56px]"
                        src="//bizweb.dktcdn.net/100/361/830/theme_temp/903732/assets/icon-1-90cf1734-5049-406e-a60d-4518db69f73a.png?1686883931059"
                        alt=""
                    />
                    <p className="text-base font-bold text-[#232734]">
                        Miễn phí vận chuyển <br />
                        thảm toàn quốc
                    </p>
                </div>
                <div className="text-center">
                    <img
                        className="ml-[56px]"
                        src="https://bizweb.dktcdn.net/100/361/830/theme_temp/903732/assets/image-18-f48f0ad1-8381-4936-9476-ec37f5a614ea.png?1684939843793"
                        alt=""
                    />
                    <p className="text-base font-bold text-[#232734]">
                        Miễn phí đổi trả thảm <br />
                        trong 7 ngày
                    </p>
                </div>
                <div className="text-center">
                    <img
                        className="ml-[36px]"
                        src="https://bizweb.dktcdn.net/100/361/830/theme_temp/903732/assets/image-19-98264b30-8e77-4956-ae17-51cafb5a1207.png?1684939843793"
                        alt=""
                    />
                    <p className="text-base font-bold text-[#232734]">
                        Tuỳ ý điều chỉnh <br />
                        vải bọc ghế sofa
                    </p>
                </div>
                <div className="text-center">
                    <img
                        className="ml-[56px]"
                        src="//bizweb.dktcdn.net/100/361/830/theme_temp/903732/assets/icon-1-90cf1734-5049-406e-a60d-4518db69f73a.png?1686883931059"
                        alt=""
                    />
                    <p className="text-base font-bold text-[#232734]">
                        Miễn phí vận chuyển <br />
                        nội thất nội thành
                    </p>
                </div>
            </div>

            <div style={{ padding: "0 50px" }} className="flex justify-center">
                <img
                    src="https://bizweb.dktcdn.net/100/361/830/theme_temp/924241/assets/banner-desktop-c219712c-3eee-4fc7-9035-993686fcada4-1-f42b97e9-045c-4893-b3d5-8b793b7d98a3.png?1696691760254"
                    alt=""
                />
            </div>

            <div style={{ padding: "0 50px" }}>
                <div
                    className="flex justify-between mt-10 pb-10 items-center"
                    style={{ borderBottom: "1px solid #D4C6BB" }}
                >
                    <h2 className="text-[40px] font-semibold">Sản phẩm</h2>
                    <div className="flex gap-24 text-center">
                        <div>
                            <img
                                src="https://bizweb.dktcdn.net/100/361/830/theme_temp/903732/assets/image-2-0c88551a-a336-4dc6-befe-5c3718dd151f.png?1684941240966"
                                alt=""
                            />
                            <p className="text-lg font-medium">Sofa</p>
                        </div>
                        <div>
                            <img
                                src="https://bizweb.dktcdn.net/100/361/830/theme_temp/903732/assets/image-3-da1beb29-be9a-47f2-8453-776b801c6022.png?1684941240966"
                                alt=""
                            />
                            <p className="text-lg font-medium">Ghế</p>
                        </div>
                        <div>
                            <img
                                className="ml-[32px]"
                                src="https://bizweb.dktcdn.net/100/361/830/theme_temp/903732/assets/image-4-d7e4383b-91c4-4953-8fd0-cc8f2d87bdc0.png?1684941240966"
                                alt=""
                            />
                            <p className="text-lg font-medium">Thảm trải sàn</p>
                        </div>
                        <div>
                            <img
                                className="ml-[16px]"
                                src="https://bizweb.dktcdn.net/100/361/830/theme_temp/903732/assets/image-5-79ac7e14-39e5-4e71-ac7c-b79edfaf1094.png?1684941240966"
                                alt=""
                            />
                            <p className="text-lg font-medium">Trang trí</p>
                        </div>
                    </div>
                </div>
                <div className="mt-[60px] flex gap-10 items-center">
                    <div
                        className="w-[50px] h-[38px] rounded-[40px] text-[#E8D3B8] bg-[#fff] text-center p-[6px] mb-[130px]"
                        style={{ border: "1px solid #E8D3B8" }}
                        onClick={handlePrev}
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                    {productsSofa &&
                        productsSofa
                            .slice(currentIndex, currentIndex + 3)
                            .map((product, index) => (
                                <Link to={`/detail/${product._id}`}>
                                    <div key={index} className="text-center">
                                        {product.image_shows.length > 0 && (
                                            <img
                                                src={
                                                    product.image_shows[0].image
                                                }
                                                alt={`${product.name} - Image 1`}
                                            />
                                        )}
                                        <h3 className="text-2xl font-bold mb-3 mt-3 text-[#4F525D]">
                                            {product.name}
                                        </h3>
                                        <p className="text-base font-medium text-[#7B7D85]">
                                            {formatCurrency(
                                                Number(product.price)
                                            )}
                                        </p>
                                        <img
                                            className="ml-[175px] mt-3 mb-10"
                                            src="https://bizweb.dktcdn.net/thumb/icon/100/361/830/themes/924241/assets/tuy_chon.png?1700106796496"
                                            alt=""
                                        />
                                    </div>
                                </Link>
                            ))}
                    <div
                        className="w-[50px] h-[38px] rounded-[40px] text-[#E8D3B8] bg-[#fff] text-center p-[6px] mb-[130px]"
                        style={{ border: "1px solid #E8D3B8" }}
                        onClick={handleNext}
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
                <div className="text-center mb-20">
                    <button
                        className="text-[#fff] bg-[#B18979] font-bold text-base rounded-[50px]"
                        style={{ padding: "9px 37px" }}
                    >
                        Xem thêm <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <div>
                    <img
                        src="https://bizweb.dktcdn.net/100/361/830/theme_temp/903732/assets/banner-web-611c8a9b-18d8-4d38-a928-b3debe536d93.png?1686111660823"
                        alt=""
                    />
                </div>
            </div>

            <div style={{ padding: "0 50px" }}>
                <div className="text-center mt-8 mb-8">
                    <h1 className="text-[40px] font-semibold text-[#232734]">
                        Review quý giá từ khách hàng
                    </h1>
                </div>
                <div className="flex justify-between">
                    <div
                        className="w-[348px] rounded-md"
                        style={{
                            padding: "27px 24px",
                            border: "1px solid #D4C6BB",
                        }}
                    >
                        <div className="overflow-hidden relative rounded pt-[100%]">
                            <img
                                className="object-cover absolute top-0 left-0 h-full w-full"
                                src="https://bizweb.dktcdn.net/thumb/large/100/361/830/themes/924241/assets/review_4_img.png?1700106796496"
                                alt=""
                            />
                        </div>
                        <div className="mt-4 flex gap-3 mb-4">
                            <div>
                                <img
                                    className="w-[50px] h-[50px]"
                                    src="https://bizweb.dktcdn.net/100/361/830/themes/924241/assets/review_4_avatar.png?1700106796496"
                                    alt=""
                                />
                            </div>
                            <div>
                                <b>Anh Bảo Quốc</b>
                                <p className="flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                            fill="#343839"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                            fill="#343839"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                            fill="#343839"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                            fill="#343839"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                            fill="#343839"
                                        />
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base text-[#B18979] font-medium mb-1 uppercase">
                                Thảm dệt Bakin
                            </h3>
                            <p>
                                Thảm đúng như mô tả tư vấn, thảm mềm và cao cấp
                                hơn mong đợi. Rất hài lòng với chất lượng và
                                dịch vụ.
                            </p>
                        </div>
                    </div>

                    <div
                        className="w-[348px] rounded-md"
                        style={{
                            padding: "27px 24px",
                            border: "1px solid #D4C6BB",
                        }}
                    >
                        <div className="overflow-hidden relative rounded pt-[100%]">
                            <img
                                className="object-cover absolute top-0 left-0 h-full w-full"
                                src="https://bizweb.dktcdn.net/thumb/large/100/361/830/themes/924241/assets/review_6_img.png?1700106796496"
                                alt=""
                            />
                        </div>
                        <div className="mt-4 flex gap-3 mb-4">
                            <div>
                                <img
                                    className="w-[50px] h-[50px]"
                                    src="https://bizweb.dktcdn.net/100/361/830/themes/924241/assets/review_4_avatar.png?1700106796496"
                                    alt=""
                                />
                            </div>
                            <div>
                                <b>Chị Mỹ Ngọc</b>
                                <p className="flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                            fill="#343839"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                            fill="#343839"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                            fill="#343839"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                            fill="#343839"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                            fill="#343839"
                                        />
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base text-[#B18979] font-medium mb-1 uppercase">
                                Thảm dệt Manw
                            </h3>
                            <p>
                                Shop chuyên về thảm nên có rất nhiều dòng thảm
                                và chất lượng khác nhau, phù hợp mọi nhu cầu của
                                khách hàng.
                            </p>
                        </div>
                    </div>

                    <div
                        className="w-[348px] rounded-md"
                        style={{
                            padding: "27px 24px",
                            border: "1px solid #D4C6BB",
                        }}
                    >
                        <div className="overflow-hidden relative rounded pt-[100%]">
                            <img
                                className="object-cover absolute top-0 left-0 h-full w-full"
                                src="https://bizweb.dktcdn.net/thumb/large/100/361/830/themes/924241/assets/review_7_img.png?1700106796496"
                                alt=""
                            />
                        </div>
                        <div className="mt-4 flex gap-3 mb-4">
                            <div>
                                <img
                                    className="w-[50px] h-[50px]"
                                    src="https://bizweb.dktcdn.net/100/361/830/themes/924241/assets/review_4_avatar.png?1700106796496"
                                    alt=""
                                />
                            </div>
                            <div>
                                <b>Chị Trúc Hạnh</b>
                                <p className="flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                            fill="#343839"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                            fill="#343839"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                            fill="#343839"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                            fill="#343839"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                            fill="#343839"
                                        />
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base text-[#B18979] font-medium mb-1 uppercase">
                                Thảm Camden và Ghế Moby
                            </h3>
                            <p>
                                Nhân viên tư vấn rất nhiệt tình, hỗ trợ đổi trả
                                ngay để khách chọn đúng thảm vừa ý.
                            </p>
                        </div>
                    </div>

                    <div
                        className="w-[348px] rounded-md"
                        style={{
                            padding: "27px 24px",
                            border: "1px solid #D4C6BB",
                        }}
                    >
                        <div className="overflow-hidden relative rounded pt-[100%]">
                            <img
                                className="object-cover absolute top-0 left-0 h-full w-full"
                                src="https://bizweb.dktcdn.net/thumb/large/100/361/830/themes/924241/assets/review_8_img.png?1700106796496"
                                alt=""
                            />
                        </div>
                        <div className="mt-4 flex gap-3 mb-4">
                            <div>
                                <img
                                    className="w-[50px] h-[50px]"
                                    src="https://bizweb.dktcdn.net/100/361/830/themes/924241/assets/review_4_avatar.png?1700106796496"
                                    alt=""
                                />
                            </div>
                            <div>
                                <b>Anh Minh Trần</b>
                                <p className="flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                            fill="#343839"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                            fill="#343839"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                            fill="#343839"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                            fill="#343839"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
                                            fill="#343839"
                                        />
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base text-[#B18979] font-medium mb-1 uppercase">
                                Thảm Litus
                            </h3>
                            <p>
                                Cửa hàng có rất nhiều mẫu có sẵn. Mình đang cần
                                gấp để trang trí nhà, nên qua trực tiếp showroom
                                mua luôn.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ padding: "0 50px" }}>
                <div className="text-center mt-10 mb-7">
                    <h3 className="text-[40px] font-semibold text-[#232734]">
                        Bài viết được quan tâm nhất
                    </h3>
                </div>
                <div className="flex gap-7 justify-center">
                    <div className="w-1/2">
                        <img
                            className="w-full h-[400px]"
                            src="https://bizweb.dktcdn.net/thumb/1024x1024/100/361/830/theme_temp/903732/assets/tham-trai-san-6-052026e3-2615-4234-898b-ba21e7017531.jpeg?1689008204190"
                            alt=""
                        />
                        <h4 className="text-lg font-bold text-[#B18979] mt-4 ">
                            Thảm trải sàn phòng khách
                        </h4>
                        <p className="text-[28px] font-semibold text-[#232734] mt-1 ">
                            Những điều cần biết khi mua thảm trải sàn
                        </p>
                        <p className="text-sm font-normal text-[#7B7D85] mt-3">
                            Thảm trải sàn được xem là món đồ không thể thiếu
                            trong công cuộc trang trí nhà cửa ngày nay. Với sự
                            phát triển của các thiết bị máy móc, cùng với công
                            nghệ dệt thảm tiên tiến mà các loại thảm trải sàn
                            cũng đa dạng hơn về mẫu mã, màu sắc, chất liệu.{" "}
                        </p>
                    </div>
                    <div className="w-1/2">
                        <div className="flex gap-3 mb-7">
                            <div className="w-[80%] flex">
                                <img
                                    className="w-full h-[152px] object-cover"
                                    src="https://bizweb.dktcdn.net/thumb/large/100/361/830/theme_temp/903732/assets/tham-det-augar-10-67b2c505-0dc0-460c-a4ca-11d6411c9d02.jpg?1689059880630"
                                    alt=""
                                />
                            </div>
                            <div>
                                <h4 className="text-[22px] font-semibold text-[#232734]">
                                    6 cách vệ sinh thảm trải sàn tại nhà cực đơn
                                    giản
                                </h4>
                                <p className="text-sm font-normal text-[#7B7D85]">
                                    Thảm trải sàn là một món đồ nội thất được sử
                                    dụng ngày càng phổ biến. Cũng như sofa, sau
                                    một thời gian dài sử dụng, dù muốn hay không
                                    thảm vẫn sẽ b...
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 mb-7">
                            <div className="w-[70%] flex">
                                <img
                                    className="w-[100%] h-[152px] object-cover"
                                    src="https://bizweb.dktcdn.net/thumb/large/100/361/830/theme_temp/903732/assets/sofa-bellini-26-a04e5e05-7025-4b7d-b74c-ad6a82593814.jpg?1689059880630"
                                    alt=""
                                />
                            </div>
                            <div>
                                <h4 className="text-[22px] font-semibold text-[#232734]">
                                    Tips chọn thảm lót sàn phòng khách theo màu
                                    sofa cực đơn giản
                                </h4>
                                <p className="text-sm font-normal text-[#7B7D85]">
                                    Thảm lót sàn là một trong những món đồ nội
                                    thất giúp không gian trở nên ấm cúng, sang
                                    trọng và tôn lên vẻ đẹp đẳng cấp của bộ
                                    sofa.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <div className="w-[130%] flex">
                                <img
                                    className="w-[100%] h-[152px] object-cover"
                                    src="https://bizweb.dktcdn.net/thumb/large/100/361/830/theme_temp/903732/assets/squidy12-c313120c-c5cb-42d9-93b0-91e804fa6e5c.jpg?1689059880630"
                                    alt=""
                                />
                            </div>
                            <div>
                                <h4 className="text-[22px] font-semibold text-[#232734]">
                                    Tips chọn sofa phòng khách - Bạn đã biết?
                                </h4>
                                <p className="text-sm font-normal text-[#7B7D85]">
                                    Sofa là một phần quan trọng và không thể
                                    thiếu trong việc hoàn thiện vẻ đẹp không
                                    gian tổ ấm nói chung và phòng khách nói
                                    riêng. Tuy nhiên, để lựa chọn được mẫu sofa
                                    phòng khách tinh tế, hài hoà và sang trọng
                                    lại khiến người mua vô cùng đau đầu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ padding: "0 50px" }}>
                <div className="text-center mt-7 mb-7">
                    <button
                        className="text-base font-bold text-[#fff] bg-[#B18979] rounded-[50px] uppercase mb-10"
                        style={{ padding: "9px 37px" }}
                    >
                        Đọc thêm <i className="fa-solid fa-chevron-right"></i>
                    </button>
                    <h3 className="text-[40px] font-semibold text-[#232734]">
                        Chia sẻ khoảnh khắc cùng Blanc’
                    </h3>
                </div>
                <div className="flex gap-1">
                    <div
                        className="w-[410px] h-[237px] bg-[#FFFBF6] flex flex-wrap content-center"
                        style={{ padding: "0 44px" }}
                    >
                        <h1 className="font-bold text-[26px] text-[#B18979] mb-4">
                            Follow Blanc’ <br />
                            on Instagram
                        </h1>
                        <button
                            className="uppercase text-[#B18979] text-base font-bold rounded-[50px]"
                            style={{
                                border: "1px solid #B18979",
                                padding: "9px 38px",
                            }}
                        >
                            Instagram
                        </button>
                    </div>
                    <div className="flex gap-5">
                        <div>
                            <img
                                src="https://bizweb.dktcdn.net/thumb/medium/100/361/830/themes/924241/assets/section_instagram_1.png?1700106796496"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://bizweb.dktcdn.net/thumb/medium/100/361/830/themes/924241/assets/section_instagram_6.png?1700106796496"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://bizweb.dktcdn.net/thumb/medium/100/361/830/themes/924241/assets/section_instagram_3.png?1700106796496"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://bizweb.dktcdn.net/thumb/medium/100/361/830/themes/924241/assets/section_instagram_4.png?1700106796496"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="h-[386px] mt-[74px] flex w-full"
                style={{
                    backgroundImage:
                        "url(//bizweb.dktcdn.net/100/361/830/themes/924241/assets/group166.png?1700106796496)",
                    padding: "45px 50px",
                }}
            >
                <div className="w-1/2">
                    <h1 className="font-bold text-3xl text-[#fff] mb-5">
                        Hệ thống Showroom của Blanc’
                    </h1>
                    <button
                        className="text-lg font-bold text-[#232734] bg-[#fff] rounded-[50px] w-[280px] mb-7"
                        style={{ padding: "20px 0 20px 0px" }}
                    >
                        Showroom TP.HCM{" "}
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>{" "}
                    <br />
                    <button
                        className="text-lg font-bold text-[#232734] bg-[#fff] rounded-[50px] w-[280px]"
                        style={{ padding: "20px 0 20px 0px" }}
                    >
                        Showroom Hà Nội{" "}
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <div className="w-1/2">
                    <h3 className="font-bold text-3xl text-[#fff] mb-3">
                        Liên hệ với Blanc’
                    </h3>
                    <p className="font-semibold text-base text-[#fff] mb-3">
                        Đừng ngần ngại nhắn tin cho Blanc’ để nhận được tư vấn
                        nhiệt tình về <br /> các sản phẩm của chúng mình nhé!
                    </p>
                    <button
                        className="font-bold text-base text-[#fff] bg-[#B18979] rounded-[50px] mb-3"
                        style={{ padding: "9px 47px" }}
                    >
                        Nhắn tin
                    </button>
                    <h3 className="font-bold text-3xl text-[#fff] mb-3">
                        Đăng ký nhận bản tin
                    </h3>
                    <p className="font-semibold text-base text-[#fff] mb-3">
                        Đăng ký để nhận được những khuyến mãi và cập nhật mới
                        nhất từ Blanc'{" "}
                    </p>
                    <div className="relative w-[430px]">
                        <input
                            className="w-full h-[50px] bg-transparent rounded-[50px] text-[#fff]"
                            style={{
                                padding: "0 20px",
                                border: "1px solid #fff",
                            }}
                            type="text"
                            placeholder="Nhập email của bạn"
                        />
                        <button className="absolute top-[2px] right-[2px] rounded-[50px] text-base w-[80px] h-[46px] font-bold text-[#fff] bg-[#B18979]">
                            Gửi
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Homepage;
