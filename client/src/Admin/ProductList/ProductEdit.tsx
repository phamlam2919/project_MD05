import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

interface Tag {
    height: string;
    length: string;
    width: string;
}
interface Product {
    _id: any;
    name: string;
    price: string;
    sale: string;
    number: string;
    category_id: string;
    description: any;
    tag: Tag[];
    length: any;
    width: any;
    height: any;
    // sources: Array<{ url: string; media_id: number }>;
}

type Props = {};

const ProductEdit = (props: Props) => {
    const [product, setProduct] = useState<Product>({
        _id: "",
        name: "",
        price: "",
        sale: "",
        number: "",
        category_id: "",
        description: "",
        tag: [],
        length: "",
        width: "",
        height: "",
        // sources: [],
    });

    // console.log("product", product.sources);
    const navigate = useNavigate();
    const [productId, setId] = useState<string>("");
    const [tagId, setTagId] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [sale, setSale] = useState<string>("");
    const [stock, setStock] = useState<string>("");
    const [length, setLength] = useState<string>("");
    const [width, setWidth] = useState<string>("");
    const [height, setHeight] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const { id } = useParams<{ id: string }>();
    const [isEdit, setIsEdit] = useState(false);
    const [categories, setCategories] = useState<Product[]>([]);
    const [sources, setSources] = useState<any[]>([]);
    const [count, setCount] = useState<number>(0);

    let BASE_API = "http://localhost:8000/api/v1";

    const fetchProduct = async () => {
        try {
            let res = await fetch(BASE_API + `/products/${id}`);
            let data = await res.json();
            console.log(data);
            setProduct({ ...data });
            setId(data._id);
            setTagId(data.tag_id);
            setName(data.name);
            setPrice(data.price);
            setSale(data.sale);
            setStock(data.number);
            setCategory(data.category_id);
            setLength(data.length);
            setWidth(data.width);
            setHeight(data.height);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchCategories = async () => {
        try {
            let res = await fetch(BASE_API + `/categories`);
            let data = await res.json();
            setCategories(() => [...data]);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            let update = {
                id: productId,
                name,
                price,
                sale,
                stock,
                category_id: category,
                length,
                width,
                height,
                // sources: product.sources,
            };
            let res = await fetch(BASE_API + `/products/` + productId, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(update),
            });
            let data = await res.json();

            let tagRes = await fetch(BASE_API + `/tags/` + tagId, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(update),
            });

            let tagData = await tagRes.json();
            if (data.status === "Success" && tagData.status === "Success") {
                Swal.fire(data.status, data.message, "success")
                    .then(() => {
                        setCount(0);
                        setIsEdit(false);
                    })
                    .then(() => {
                        navigate("/admin/products");
                    });
            } else {
                Swal.fire("Error", "Update failed", "error");
            }
            console.log(data);
        } catch (error) {}
    };

    const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
        setCount((prev) => prev + 1);
    };

    useEffect(() => {
        fetchProduct();
        fetchCategories();
    }, []);

    useEffect(() => {
        if (count > 0) {
            setIsEdit(true);
        }
    }, [name, price, sale, stock, category, length, width, height]);

    const [isUploading, setIsUploading] = useState(false);

    const handleChange = async (e: any, id: number) => {
        setIsUploading(true);
        const file = e.target.files[0];

        if (!file) {
            return;
        }

        try {
            const formData = new FormData();
            formData.append("image", file);

            const cloudinaryResponse = await axios.post(
                `${BASE_API}/media/one`,
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            console.log("Cloudinary Response: ==========", cloudinaryResponse);

            // if (cloudinaryResponse.status === 201) {
            //     const findIdexSrc = product.sources.findIndex(
            //         (image) => image.media_id == id
            //     );

            //     setProduct((prev: any) => {
            //         return {
            //             ...prev,
            //             [prev.sources]: [
            //                 ...prev.sources,
            //                 (prev.sources[findIdexSrc].url =
            //                     cloudinaryResponse.data.imageList[0]),
            //             ],
            //         };
            //     });
            //     // Swal.fire("Success", "Image updated successfully", "success");
            // } else {
            //     // Swal.fire("Error", "Failed to update image source", "error");
            // }
        } catch (error) {
            console.error("Error updating image:", error);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div>
            <div className="min-h-screen">
                <div className="container mx-auto bg-white p-4 ">
                    <h3 className="text-2xl font-bold mb-4">Edit Product</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="flex">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <label className="font-bold block">
                                        Product ID:
                                    </label>
                                    <input
                                        disabled
                                        type="text"
                                        value={productId}
                                        onChange={(e) => {
                                            setId(e.target.value);
                                            setCount((prev) => prev + 1);
                                        }}
                                        className="w-full border border-gray-300 p-2 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold block">
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            setCount((prev) => prev + 1);
                                        }}
                                        className="w-full border border-gray-300 p-2 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold block">
                                        Length:
                                    </label>
                                    <input
                                        type="text"
                                        value={length}
                                        onChange={(e) => {
                                            setLength(e.target.value);
                                            setCount((prev) => prev + 1);
                                        }}
                                        className="w-full border border-gray-300 p-2 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold block">
                                        Width:
                                    </label>
                                    <input
                                        type="text"
                                        value={width}
                                        onChange={(e) => {
                                            setWidth(e.target.value);
                                            setCount((prev) => prev + 1);
                                        }}
                                        className="w-full border border-gray-300 p-2 rounded-md"
                                    />
                                </div>

                                <div>
                                    <label className="font-bold block">
                                        Height:
                                    </label>
                                    <input
                                        type="text"
                                        value={height}
                                        onChange={(e) => {
                                            setHeight(e.target.value);
                                            setCount((prev) => prev + 1);
                                        }}
                                        className="w-full border border-gray-300 p-2 rounded-md"
                                    />
                                </div>

                                <div>
                                    <label className="font-bold block">
                                        Price:
                                    </label>
                                    <input
                                        type="text"
                                        value={price}
                                        onChange={(e) => {
                                            setPrice(e.target.value);
                                            setCount((prev) => prev + 1);
                                        }}
                                        className="w-full border border-gray-300 p-2 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold block">
                                        Stock:
                                    </label>
                                    <input
                                        type="text"
                                        value={stock}
                                        onChange={(e) => {
                                            setStock(e.target.value);
                                            setCount((prev) => prev + 1);
                                        }}
                                        className="w-full border border-gray-300 p-2 rounded-md"
                                    />
                                </div>
                                {/* <div>
                                    <label className="font-bold block">
                                        Sale:
                                    </label>
                                    <input
                                        type="text"
                                        value={sale}
                                        onChange={(e) => {
                                            setSale(e.target.value);
                                            setCount((prev) => prev + 1);
                                        }}
                                        className="w-full border border-gray-300 p-2 rounded-md"
                                    />
                                </div> */}
                                <div>
                                    <label className="font-bold block">
                                        Category:
                                    </label>
                                    <select
                                        onChange={(e) => {
                                            setCategory(e.target.value);
                                            setCount((prev) => prev + 1);
                                        }}
                                        className="w-full border border-gray-300 p-2 rounded-md"
                                    >
                                        <option value="">
                                            Filter By Category
                                        </option>
                                        {categories.length > 0 &&
                                            categories.map((e, i) => (
                                                <option
                                                    selected={
                                                        category ===
                                                        e.category_id
                                                    }
                                                    key={i}
                                                    value={e.category_id}
                                                >
                                                    {e.description}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                            </div>
                            <div className="w-[60%]">
                                {/* <EditMedia /> */}
                                <h1 className="text-2xl font-semibold ml-[100px]">
                                    Edit Media:
                                </h1>
                                {isUploading && (
                                    <p className="ml-[100px]">
                                        <LoadingOutlined
                                            style={{
                                                fontSize: "50px",
                                                // marginBottom: "20px",
                                                marginTop: "20px",
                                            }}
                                        />
                                    </p>
                                )}

                                <div className="flex flex-wrap w-full justify-end">
                                    {/* {product?.sources.map(
                                        (e: any, index: number) => (
                                            <>
                                                <div
                                                    className="w-[30%]"
                                                    key={index}
                                                >
                                                    <img
                                                        className=""
                                                        src={e.url}
                                                        alt={`Image ${index}`}
                                                    />

                                                    <label
                                                        htmlFor={`image_${index}`}
                                                    >
                                                        <h1 className="w-[50px] h-[50px] rounded-[50px] border-[1px] border-[black] p-3 text-center text-white bg-black">
                                                            <i className="fa-solid fa-pen"></i>
                                                        </h1>
                                                    </label>
                                                    <input
                                                        id={`image_${index}`}
                                                        style={{
                                                            display: "none",
                                                        }}
                                                        type="file"
                                                        onChange={(event) =>
                                                            handleChange(
                                                                event,
                                                                e.media_id
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </>
                                        )
                                    )} */}
                                </div>
                            </div>
                        </div>

                        <div className=" mt-5">
                            {!isEdit ? (
                                <button
                                    disabled
                                    type="submit"
                                    className="bg-blue-200 text-white p-2 rounded-md mr-2"
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white p-2 rounded-md mr-2"
                                >
                                    Save
                                </button>
                            )}

                            <Link
                                to="/admin/products"
                                className="text-blue-500"
                            >
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default ProductEdit;
