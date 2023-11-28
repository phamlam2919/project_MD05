import React, { useEffect, useState } from "react";
import { formatCurrency } from "../../helpers";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import Pagination from "../shared/Pagination";
import { Button, Modal } from "antd";
import Pagination from "../shared/Pagination";
import Swal from "sweetalert2";
// import ProductDetail from "./ProductDetail";

interface Category {
    category_id: number;
    name: string;
    description: any;
    banner: string;
}

interface Product {
    _id: number;
    name: string;
    price: number;
    number: number;
    sale: number;
    category: Category[];
}

type Props = {};

const ProductList = (props: Props) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [categories, setCategories] = useState<any[]>([]);
    const [categoryFilter, setCategoryFilter] = useState<string>("");

    const BASE_API = "http://localhost:8000/api/v1";

    const fetchProducts = async () => {
        try {
            const res = await fetch(
                `${BASE_API}/products?page_index=1&page_number=5`
            );
            const data = await res.json();
            console.log(data);

            setProducts([...data]);
            setTotal(data.length);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchCategories = async () => {
        try {
            const res = await fetch(`${BASE_API}/categories`);
            const data = await res.json();
            setCategories([...data]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    const handleChangePage = async (pageIndex: any) => {
        try {
            const res = await fetch(
                `${BASE_API}/products?${
                    categoryFilter ? `category=${categoryFilter}&` : ""
                }page_index=${pageIndex}&page_number=5`
            );
            const data = await res.json();
            setProducts([...data.data]);
            setCurrentPage(pageIndex);
        } catch (error) {
            console.log(error);
        }
    };

    const handleFilterByCategory = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setCategoryFilter(e.target.value);
    };

    const fetchProductByCategory = async (filter: string) => {
        try {
            if (filter) {
                const res = await fetch(
                    `${BASE_API}/products?category=${filter}&page_index=1&page_number=5`
                );
                const data = await res.json();
                console.log(data);

                setProducts([...data]);
                setTotal(data.length);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        setCurrentPage(1);
        if (categoryFilter) {
            fetchProductByCategory(categoryFilter);
        } else {
            fetchProducts();
        }
    }, [categoryFilter]);

    // const handleDelete = (id: number) => {
    //     axios
    //         .delete(`http://localhost:8000/api/v1/products/${id}`)
    //         .then((res) => {
    //             setProducts((prevProducts) =>
    //                 prevProducts.filter((product) => product._id !== id)
    //             );
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    const handleDelete = (id: any) => {
        // Hiển thị hộp thoại xác nhận xóa
        Swal.fire({
            title: "Bạn có chắc không ?",
            text: "Bạn có muốn xóa sản không ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Xóa",
        }).then((result) => {
            // Nếu người dùng xác nhận xóa
            if (result.isConfirmed) {
                // Gửi yêu cầu xóa đến server
                axios
                    .delete(`http://localhost:8000/api/v1/products/${id}`)
                    .then(() => {
                        // Cập nhật danh sách sản phẩm sau khi xóa thành công
                        setProducts((prevProducts) =>
                            prevProducts.filter((product) => product._id !== id)
                        );

                        // Hiển thị thông báo xóa thành công
                        Swal.fire({
                            title: "Deleted!",
                            text: "Xóa thành công.",
                            icon: "success",
                        });
                    })
                    .catch((err) => {
                        console.log(err);

                        // Hiển thị thông báo lỗi nếu có lỗi xóa
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete the file.",
                            icon: "error",
                        });
                    });
            }
        });
    };
    const handleEdit = (id: number) => {
        navigate("/admin/products/edit/" + id);
    };

    const [selectedProductId, setSelectedProductId] = useState<number | null>(
        null
    );

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = (productId: number) => {
        setSelectedProductId(productId);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setSelectedProductId(null);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="p-4 w-full">
            <h3 className="text-3xl font-bold mb-4">Product List</h3>
            <div className="mb-4">
                <div className="flex items-center space-x-2">
                    <select
                        style={{ height: "45px", width: "50%" }}
                        onChange={handleFilterByCategory}
                        className="border rounded px-2 py-1"
                        aria-label="Filter By Category"
                    >
                        <option value="">Filter By Category</option>
                        {categories.length > 0 &&
                            categories.map((e, i) => (
                                <option key={i} value={e.name}>
                                    {e.description}
                                </option>
                            ))}
                    </select>

                    <button className="bg-red-500 text-white rounded px-4 py-2">
                        <Link to="/admin/products/addproduct">Add Product</Link>
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full table-auto text-center">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">#</th>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Price</th>
                            <th className="border px-4 py-2">Category</th>
                            <th className="border px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 &&
                            products.map((e, i) => (
                                <tr key={i}>
                                    <td className="border px-4 py-2">
                                        {i + 1}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {e.name}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {formatCurrency(Number(e.price))}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {e.category.description}
                                    </td>
                                    <td className="border px-4 py-2">
                                        <Button
                                            type="primary"
                                            onClick={() => showModal(e._id)}
                                            className="bg-blue-500 rounded px-2 py-1"
                                        >
                                            <i className="fa-solid fa-eye"></i>
                                        </Button>

                                        <button
                                            onClick={() => handleEdit(e._id)}
                                            className="bg-green-500 text-white rounded px-2 py-1 ml-2"
                                        >
                                            <i className="fa-solid fa-wrench"></i>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(e._id)}
                                            className="bg-red-500 text-white rounded px-2 py-1 ml-2"
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <Pagination
                total={total}
                pageNumber={5}
                handleChangePage={handleChangePage}
                currentPage={currentPage}
            />
            {/* <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{ className: "bg-blue-500" }}
            >
                {selectedProductId !== null && (
                    <ProductDetail productId={selectedProductId} />
                )}
            </Modal> */}
        </div>
    );
};

export default ProductList;
