import React, { useEffect, useState } from "react";
import Header from "../../Commons/header/Header";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import { formatCurrency } from "../../helpers";
import Footer from "../../Commons/footer/Footer";
import { Link } from "react-router-dom";
const Shop = () => {
    const [selectedLabel, setSelectedLabel] = useState("Mới nhất");
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
    const [sortOrder, setSortOrder] = useState("");
    const sortProducts = (products: any, sortOrder: string) => {
        const sortedProducts = [...products];

        sortedProducts.sort((a, b) => {
            const priceA = a.sale
                ? a.price - a.price * (a.sale / 100)
                : a.price;
            const priceB = b.sale
                ? b.price - b.price * (b.sale / 100)
                : b.price;

            if (sortOrder === "asc") {
                return priceA - priceB;
            } else {
                return priceB - priceA;
            }
        });

        return sortedProducts;
    };

    useEffect(() => {
        const sortedLoudspeakerProducts = sortProducts(productsSofa, sortOrder);
        setProductsSofa(sortedLoudspeakerProducts);
    }, [sortOrder]);

    const items: MenuProps["items"] = [
        {
            key: "1",
            label: "Mới nhất",
        },
        {
            key: "2",
            label: "Thứ tự theo giá: thấp đến cao",
        },
        {
            key: "3",
            label: "Thứ tự theo giá: cao xuống thấp",
        },
    ];
    return (
        <div>
            <div className="relative ">
                <div className="z-10 absolute w-full">
                    <Header />
                </div>
                <img
                    className="w-full"
                    src="//bizweb.dktcdn.net/100/361/830/themes/924241/assets/collection_sofa.png?1700487202938"
                    alt=""
                />
                <div className="absolute left-[50px] top-1/2 z-50">
                    <h1 className="text-[#ffffff] text-[100px] font-bold">
                        Sofa
                    </h1>
                </div>
            </div>
            <div style={{ padding: "0 50px" }} className="mt-[33px] mb-[33px] ">
                <div
                    style={{ borderBottom: "1px solid #D4C6BB" }}
                    className="flex"
                >
                    <h1 className="text-[#232734] text-[40px] font-semibold w-[30%]">
                        Sofa
                    </h1>
                    <ul className="flex gap-[120px]">
                        <li className="text-center">
                            <img
                                src="//bizweb.dktcdn.net/thumb/medium/100/361/830/collections/icon-sofa.png?v=1689146903053"
                                alt=""
                            />
                            <p>Sofa</p>
                        </li>
                        <li className="text-center">
                            <img
                                className="ml-[60px]"
                                src="//bizweb.dktcdn.net/thumb/medium/100/361/830/collections/icon-sofa-modul.png?v=1686888983757"
                                alt=""
                            />
                            <p>Sofa modular/ Sofa góc</p>
                        </li>

                        <li className="text-center">
                            <img
                                className="ml-[25px]"
                                src="//bizweb.dktcdn.net/thumb/medium/100/361/830/collections/icon-sofa-thu-gian.png?v=1686889002437"
                                alt=""
                            />
                            <p>Sofa giường</p>
                        </li>

                        <li className="text-center">
                            <img
                                className="ml-11px"
                                src="//bizweb.dktcdn.net/thumb/medium/100/361/830/collections/icon-armchair.png?v=1686889032520"
                                alt=""
                            />
                            <p>Armchair</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-[90px]" style={{ padding: "0 50px" }}>
                <div className="w-[20%]">
                    <h3 className="flex justify-between items-center text-lg font-semibold">
                        Danh mục sản phẩm{" "}
                        <i className="fa-solid fa-chevron-up"></i>
                    </h3>
                    <ul className="cursor-pointer">
                        <li className="text-base font-medium text-[#232734] mb-5 mt-3">
                            <i className="fa-solid fa-plus mr-2"></i>Sofa
                        </li>
                        <li className="text-base font-medium text-[#232734] mb-5">
                            <i className="fa-solid fa-plus mr-2"></i>Ghế
                        </li>
                        <li className="text-base font-medium text-[#232734] mb-5">
                            <i className="fa-solid fa-plus mr-2"></i>Thảm trải
                            sàn
                        </li>
                        <li className="text-base font-medium text-[#232734] mb-5">
                            <i className="fa-solid fa-plus mr-2"></i>Bàn
                        </li>
                        <li className="text-base font-medium text-[#232734] mb-5">
                            <i className="fa-solid fa-plus mr-2"></i>Đèn
                        </li>
                        <li className="text-base font-medium text-[#232734] mb-5">
                            <i className="fa-solid fa-plus mr-2"></i>Đồ Decor
                        </li>
                    </ul>
                </div>
                <div className="w-[80%]">
                    <div className="flex justify-between mb-7">
                        <h4 className="text-2xl text-[#232734] font-semiboldt">
                            Sofa
                        </h4>
                        <div className="flex items-center gap-3">
                            <p className="text-base font-semibold text-[#232734]">
                                Sắp xếp theo
                            </p>
                            <Dropdown
                                trigger={["click"]}
                                menu={{
                                    items: items.map((item: any) => ({
                                        key: item.key,
                                        label: (
                                            <a
                                                onClick={() => {
                                                    setSelectedLabel(
                                                        item.label
                                                    );
                                                    if (item.key === "2") {
                                                        setSortOrder("asc");
                                                    } else if (
                                                        item.key === "3"
                                                    ) {
                                                        setSortOrder("desc");
                                                    }
                                                }}
                                            >
                                                {item.label}
                                            </a>
                                        ),
                                    })),
                                }}
                                placement="bottomLeft"
                            >
                                <Button>
                                    {selectedLabel}
                                    <i className="fa-solid fa-chevron-down text-sm ml-3"></i>
                                </Button>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap gap-12 text-center">
                        {productsSofa &&
                            productsSofa.map((product, index) => (
                                <Link to={`/detail/${product._id}`}>
                                    <div key={index} className="">
                                        {product.image_shows.length > 0 && (
                                            <img
                                                className="w-[322px]"
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
                                            className="ml-[145px] mt-3"
                                            src="https://bizweb.dktcdn.net/thumb/icon/100/361/830/themes/924241/assets/tuy_chon.png?1700106796496"
                                            alt=""
                                        />
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Shop;
