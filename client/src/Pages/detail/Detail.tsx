import React, { useEffect, useState } from "react";
import Header from "../../Commons/header/Header";
import Footer from "../../Commons/footer/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { formatCurrency } from "../../helpers";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

interface Tag {
    height: string;
    length: string;
    width: string;
}

interface ImageShow {
    image_id: string;
    image: string;
}

interface Category {
    description: string;
    banner: string;
    name: string;
}
interface Product {
    name: string;
    price: number;
    sale: number;
    image: string;
    // description: any;
    // banner: any;
    tag: Tag[];
    category: Category[];
    image_shows: ImageShow[];
}
const Detail = () => {
    const email = JSON.parse(localStorage.getItem("email") as string) || "";
    const [user_id, setUserId] = useState();
    const getEmail = () => {
        axios
            .get(`http://localhost:8000/api/v1/users/email/${email}`)
            .then((res) => setUserId(res.data.user_id))
            .catch((err) => console.log(err));
    };

    const [quantity, setQuantity] = useState(1);
    let [product, setProduct] = useState<Product>({
        name: "",
        price: 0,
        sale: 0,
        image: "",
        // description: "",
        // banner: "",
        tag: [],
        category: [],
        image_shows: [],
    });
    let { id } = useParams();

    const fetchProduct = async () => {
        try {
            let response = await axios.get(
                `http://localhost:8000/api/v1/products/${id}`
            );
            let data = response.data;
            setProduct(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProduct();
        if (email) {
            getEmail();
        }
    }, []);

    let dispatch = useDispatch();
    const handleAddToCart = () => {
        let buyProduct = {
            user_id: Number(user_id),
            ...product,
            clickNumber: quantity,
        };
        console.log(buyProduct);

        dispatch({ type: "ADD_TO_CART", payload: buyProduct });
        setQuantity(() => 1);
        Swal.fire(
            "Thành Công",
            "Sản phẩm đã được thêm vào giỏ hàng!",
            "success"
        );
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    const showItems = () => {
        if (!product.image_shows) {
            return null;
        }

        return product.image_shows
            .slice(currentIndex, currentIndex + 5)
            .map((image: any, index: any) => (
                <div key={index} className="text-center">
                    <img src={image.image} alt={`Ảnh ${index}`} />
                </div>
            ));
    };

    const handleNext = () => {
        if (currentIndex + 5 < product.image_shows.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    return (
        <div>
            <Header />
            <div style={{ padding: "0 50px" }}>
                <nav
                    className="flex mt-[80px] mb-[30px]"
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
                                    Sofa
                                </Link>
                            </div>
                        </li>
                        <li aria-current="page">
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
                                <span className="ms-1 text-base font-medium text-gray-700 md:ms-2 ">
                                    {product.name}
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div className="flex gap-10">
                    <div className="w-1/2 bg-cover	bg-center bg-no-repeat">
                        {/* <img
                            src="https://bizweb.dktcdn.net/100/361/830/products/sofa-blogger-2.jpg?v=1696047606320"
                            alt=""
                        /> */}
                        {product.image_shows.length > 0 && (
                            <img
                                src={product.image_shows[0].image}
                                alt={`${product.name} - Image 1`}
                            />
                        )}
                        <div className="relative mt-3">
                            <div
                                className="w-[38px] h-[38px] rounded-full text-[#E8D3B8] bg-[#fff] text-center p-[6px] absolute top-[50px] left-[-18px]"
                                style={{ border: "1px solid #E8D3B8" }}
                                onClick={handlePrev}
                            >
                                <i className="fa-solid fa-chevron-left"></i>
                            </div>
                            <div className="flex gap-3">{showItems()}</div>
                            <div
                                className="w-[38px] h-[38px] rounded-full text-[#E8D3B8] bg-[#fff] text-center p-[6px] absolute top-[50px] right-[-18px]"
                                style={{ border: "1px solid #E8D3B8" }}
                                onClick={handleNext}
                            >
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-4xl font-bold mb-5">
                            {product.name}
                        </h1>
                        <h3 className="text-[28px] text-[#B18979] font-bold">
                            Giá: {formatCurrency(Number(product.price))}
                        </h3>
                        <h4 className="text-lg font-bold text-[#232734] mt-5">
                            Kích thước
                        </h4>
                        <div className="flex items-center gap-3 mt-3">
                            {product.tag.map((tag, index) => (
                                <p
                                    key={index}
                                    className="text-sm font-bold rounded cursor-pointer "
                                    style={{
                                        border: "1px solid #B18979",
                                        padding: "9px 30px",
                                    }}
                                >
                                    {tag.length} cm
                                </p>
                            ))}
                            <p
                                className="text-sm font-bold rounded cursor-pointer "
                                style={{
                                    border: "1px solid #D9D9D9",
                                    padding: "9px 30px",
                                }}
                            >
                                Tùy chọn
                            </p>
                        </div>
                        <h4 className="text-lg font-bold text-[#232734] mt-5">
                            Số lượng:
                        </h4>
                        <div
                            className="flex items-center gap-3 mt-3 w-[118px] rounded"
                            style={{ border: "1px solid #D9D9D9" }}
                        >
                            <button
                                className="text-sm font-bold rounded cursor-pointer"
                                style={{
                                    padding: "7px 15px",
                                }}
                                onClick={() => {
                                    if (quantity > 1) setQuantity(quantity - 1);
                                }}
                            >
                                -
                            </button>
                            <p
                                className="text-sm font-bold"
                                style={{
                                    padding: "7px 5px",
                                }}
                            >
                                {quantity}
                            </p>
                            <button
                                className="text-sm font-bold rounded cursor-pointer"
                                style={{
                                    padding: "7px 13px",
                                }}
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                        <div className="text-center mt-[37px]">
                            <button
                                className="w-full h-[70px] bg-[#9BCCB3] font-bold text-lg text-white"
                                style={{ border: "1px solid #9BCCB3" }}
                                onClick={handleAddToCart}
                            >
                                Thêm vào giỏ
                            </button>
                            <p className="text-base font-normal text-[#4F525D] mt-3">
                                Sản phẩm có sẵn! BLANC' sẽ ship ngay đến bạn!
                            </p>
                        </div>
                        <div className="mt-[37px]">
                            <h3 className="text-lg font-bold text-[#232734] mb-3">
                                Mô tả
                            </h3>
                            <p className="text-lg font-normal text-[#4F525D] mb-3">
                                Hãy cùng BLANC' trang hoàng không gian nhà ở,
                                căn hộ, hay văn phòng làm việc của bạn bằng mẫu
                                ghế sofa Blogger hiện đại này bạn nhé!
                            </p>
                            <p className="text-lg font-normal text-[#4F525D] mb-3">
                                Khung làm từ gỗ tự nhiên cùng sự kết hợp của vải
                                bọc chắc chắn sẽ mang lại cho bạn cảm giác thoải
                                mái nhất.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-[80px]" style={{ padding: "0px 90px" }}>
                    <div className="text-center mb-10">
                        <h2 className="text-xl font-bold text-[#232734] uppercase">
                            Thông số sản phẩm
                        </h2>
                    </div>
                    <div className="flex">
                        {product.tag.map((tag, index) => (
                            <div key={index} className="w-[40%]">
                                <p
                                    className="text-lg font-semibold flex justify-between mb-5 text-[#4F525D]"
                                    style={{
                                        padding: "19px 0",
                                        borderBottom: "1px solid #E0E0E0",
                                    }}
                                >
                                    Dài (cm):
                                    <strong className="font-medium">
                                        {" "}
                                        {tag.length}
                                    </strong>
                                </p>
                                <p
                                    className="text-lg font-semibold flex justify-between mb-5 text-[#4F525D]"
                                    style={{
                                        padding: "19px 0",
                                        borderBottom: "1px solid #E0E0E0",
                                    }}
                                >
                                    Rộng/ sâu (cm):
                                    <strong className="font-medium">
                                        {" "}
                                        {tag.width}
                                    </strong>
                                </p>
                                <p
                                    className="text-lg font-semibold flex justify-between mb-5 text-[#4F525D]"
                                    style={{
                                        padding: "19px 0",
                                        borderBottom: "1px solid #E0E0E0",
                                    }}
                                >
                                    Cao / dày (cm):
                                    <strong className="font-medium">
                                        {" "}
                                        {tag.height}
                                    </strong>
                                </p>
                                <p
                                    className="text-lg font-semibold flex justify-between mb-5 text-[#4F525D]"
                                    style={{
                                        padding: "19px 0",
                                        borderBottom: "1px solid #E0E0E0",
                                    }}
                                >
                                    Khối lượng (g):
                                    <strong className="font-medium">
                                        {" "}
                                        N/A
                                    </strong>
                                </p>
                                <p
                                    className="text-lg font-semibold flex justify-between mb-5 text-[#4F525D]"
                                    style={{
                                        padding: "19px 0",
                                        borderBottom: "1px solid #E0E0E0",
                                    }}
                                >
                                    Chiều cao phần ngồi (tính từ bề mặt
                                    phẳng-cm):
                                    <strong className="font-medium">
                                        {" "}
                                        N/A
                                    </strong>
                                </p>
                                <p
                                    className="text-lg font-semibold flex justify-between mb-5 text-[#4F525D]"
                                    style={{
                                        padding: "19px 0",
                                        borderBottom: "1px solid #E0E0E0",
                                    }}
                                >
                                    Kích thước phần ngồi (cm):
                                    <strong className="font-medium">
                                        {" "}
                                        N/A
                                    </strong>
                                </p>
                            </div>
                        ))}
                        <div className="w-[60%] pl-[90px]">
                            <img
                                src="https://bizweb.dktcdn.net/100/361/830/products/blogger.jpg?v=1696320639650"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-center mb-10">
                        <h2 className="text-xl font-bold text-[#232734] uppercase">
                            Mô tả sản phẩm
                        </h2>
                    </div>
                    <div className="flex justify-center gap-5 flex-wrap">
                        <div
                            className="flex justify-between items-center w-[480px] h-[64px]"
                            style={{
                                padding: "10px 18px",
                                border: "1px solid #E0E0E0",
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src="//bizweb.dktcdn.net/100/361/830/themes/924241/assets/image59.png?1700487202938"
                                    alt=""
                                />
                                <span className="text-base font-semibold text-[#232734]">
                                    Chất liệu vải bọc
                                </span>
                            </div>
                            <div className="text-base font-semibold text-[#232734]">
                                {" "}
                                Vải lưới
                            </div>
                        </div>

                        <div
                            className="flex justify-between items-center w-[480px] h-[64px]"
                            style={{
                                padding: "10px 18px",
                                border: "1px solid #E0E0E0",
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src="//bizweb.dktcdn.net/100/361/830/themes/924241/assets/image62.png?1700487202938"
                                    alt=""
                                />
                                <span className="text-base font-semibold text-[#232734]">
                                    Chất liệu khung ghế
                                </span>
                            </div>
                            <div className="text-base font-semibold text-[#232734]">
                                Gỗ
                            </div>
                        </div>

                        <div
                            className="flex justify-between items-center w-[480px] h-[64px]"
                            style={{
                                padding: "10px 18px",
                                border: "1px solid #E0E0E0",
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src="//bizweb.dktcdn.net/100/361/830/themes/924241/assets/image61.png?1700487202938"
                                    alt=""
                                />
                                <span className="text-base font-semibold text-[#232734]">
                                    Loại đệm mút
                                </span>
                            </div>
                            <div className="text-base font-semibold text-[#232734]">
                                Foam
                            </div>
                        </div>

                        <div
                            className="flex justify-between items-center w-[480px] h-[64px]"
                            style={{
                                padding: "10px 18px",
                                border: "1px solid #E0E0E0",
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src="//bizweb.dktcdn.net/100/361/830/themes/924241/assets/image63.png?1700487202938"
                                    alt=""
                                />
                                <span className="text-base font-semibold text-[#232734]">
                                    Chất liệu chân ghế
                                </span>
                            </div>
                            <div className="text-base font-semibold text-[#232734]">
                                Nhựa
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="flex items-center mt-14 mb-14"
                    style={{
                        backgroundImage:
                            "url(https://bizweb.dktcdn.net/100/361/830/themes/924241/assets/background-dem.png?1699878461219)",
                        padding: "20px 23px",
                    }}
                >
                    <img
                        className="mr-[41px] rounded-[10px] overflow-hidden"
                        src="//bizweb.dktcdn.net/100/361/830/themes/924241/assets/banner_nem_mut.jpg?1700487202938"
                        alt=""
                    />
                    <div>
                        <h3 className="text-2xl font-bold">Đệm DOUX</h3>
                        <p className="text-xl font-medium w-[620px]">
                            {" "}
                            Mật độ của mút đệm đạt 38kg/m3 - tính đàn hồi của
                            nệm luôn dao động ở ngưỡng tỉ lệ vàng, giúp cho sofa
                            không bị quá cứng hay quá mềm, cơ thể sẽ luôn được
                            nâng đỡ thật nhẹ nhàng!
                        </p>
                    </div>
                </div>

                <div style={{ padding: "0 90px" }}>
                    <div className="text-center mb-10">
                        <h2 className="text-xl font-bold text-[#232734] uppercase">
                            Thông tin khác
                        </h2>
                    </div>
                    <div className="flex">
                        <ul className="text-xl font-medium w-1/2">
                            <li className="flex items-center gap-2 mb-4">
                                <i className="fa-solid fa-circle text-[8px]"></i>
                                Tùy chọn màu sắc: Liên hệ page/hotline
                            </li>
                            <li className="flex items-center gap-2 mb-4">
                                <i className="fa-solid fa-circle text-[8px]"></i>
                                Tuỳ chọn kích thước: Không
                            </li>
                            <li className="flex items-center gap-2 mb-4">
                                <i className="fa-solid fa-circle text-[8px]"></i>
                                Tháo rời vải bọc: Không
                            </li>
                        </ul>
                        <ul className="w-1/2 ml-[260px] text-base font-medium">
                            <li className="flex items-center gap-2 mb-4">
                                {" "}
                                <i className="fa-solid fa-chevron-right text-[10px]"></i>
                                Cách đặt hàng
                            </li>
                            <li className="flex items-center gap-2 mb-4">
                                {" "}
                                <i className="fa-solid fa-chevron-right text-[10px]"></i>
                                Hướng dẫn bảo quản & vệ sinh sản phẩm
                            </li>
                            <li className="flex items-center gap-2 mb-4">
                                {" "}
                                <i className="fa-solid fa-chevron-right text-[10px]"></i>
                                Chính sách đổi trả
                            </li>
                        </ul>
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
                <Footer />
            </div>
        </div>
    );
};

export default Detail;
