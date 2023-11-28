import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="bg-gray-900 text-white w-64 h-screen">
            <div className="p-4 flex items-center gap-3">
                <img
                    src="https://bizweb.dktcdn.net/100/361/830/themes/924241/assets/ellipse_19.png?1701073101584"
                    alt=""
                />
                <h1 className="text-3xl font-semibold">ADMIN</h1>
            </div>
            <ul className="py-4">
                <li className="px-4 py-2 text-xl mb-4">
                    <Link
                        to="/admin/user"
                        className="block text-gray-300 hover:text-white transition duration-300"
                    >
                        <i className="fa-solid fa-user mr-3"></i>
                        Users
                    </Link>
                </li>
                <li className="px-4 py-2 text-lg mb-4">
                    <Link
                        to="/admin/products"
                        className="block text-gray-300 hover:text-white transition duration-300"
                    >
                        <i className="fa-solid fa-store mr-3"></i>
                        Products
                    </Link>
                </li>
                <li className="px-4 py-2 text-lg">
                    <Link
                        to=""
                        className="block text-gray-300 hover:text-white transition duration-300"
                    >
                        <i className="fa-solid fa-cart-shopping mr-3"></i>
                        Orders
                    </Link>
                </li>
                {/* <li className="px-4 py-2 text-lg">
                    <Link
                        to=""
                        className="block text-gray-300 hover:text-white transition duration-300"
                    >
                        Dashboard
                    </Link>
                </li> */}
            </ul>
        </div>
    );
};

export default Sidebar;
