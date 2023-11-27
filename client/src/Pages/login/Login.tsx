import React, { useState } from "react";
import Header from "../../Commons/header/Header";
import { Button, Checkbox, Form, Input } from "antd";
import Footer from "../../Commons/footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
const Login = () => {
    type NewUser = {
        email: string;
        password: string;
    };

    const navigate = useNavigate();

    const [newUsers, setNewUser] = useState<NewUser>({
        email: "",
        password: "",
    });

    const [formErrors, setFormErrors] = useState({
        email: "",
        password: "",
    });

    const handleCreat = (e: any) => {
        const { name, value } = e.target;
        setNewUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleCreateUser = (e: any) => {
        e.preventDefault();

        const errors: any = {};

        if (!newUsers.email) {
            errors.email = "Email không được để trống";
        } else if (!/\S+@\S+\.\S+/.test(newUsers.email)) {
            errors.email = "Email không hợp lệ";
        }

        if (!newUsers.password) {
            errors.password = "Mật khẩu không được để trống";
        } else if (newUsers.password.length < 6) {
            errors.password = "Mật khẩu phải có ít nhất 6 ký tự";
        }

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            axios
                .post(`http://localhost:8000/api/v1/auth/login`, newUsers)
                .then((res: any) => {
                    console.log(res);

                    if (res.status === 200) {
                        if (res.data.user.role === 1) {
                            navigate("/admin");
                            localStorage.setItem(
                                "tokenAdmin",
                                JSON.stringify(res.data.result.info)
                            );
                        } else {
                            Swal.fire({
                                icon: "success",
                                title: "Đăng nhập thành công",
                                showConfirmButton: false,
                                timer: 2000,
                            }).then(() => {
                                navigate("/");
                                localStorage.setItem(
                                    "email",
                                    JSON.stringify(res.data.user.email)
                                );
                                localStorage.setItem(
                                    "token",
                                    JSON.stringify(res.data.accsets_token)
                                );
                            });
                        }
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Đăng nhập thất bại...",
                            text: "Tài khoản hoặc mật khẩu không chính xác",
                        });
                    }
                })
                .catch((err) => console.log(err));
        }
    };
    return (
        <div>
            <Header />
            <div
                className="bg-no-repeat	bg-cover bg-center h-[865px] relative"
                style={{
                    backgroundImage:
                        "url(https://bizweb.dktcdn.net/100/361/830/themes/924241/assets/rectangle_114.png)",
                }}
            >
                <div
                    className="bg-[#fff] w-[590px] absolute top-[20%] right-[15%]"
                    style={{ padding: "27px 38px 20px 38px" }}
                >
                    <div className="text-center text-2xl font-bold">
                        <h1>Đăng nhập</h1>
                    </div>
                    <div>
                        <Form name="basic" autoComplete="off">
                            <Form.Item<NewUser> className="text-2xl">
                                Email:
                                <Input
                                    type="text"
                                    name="email"
                                    onChange={handleCreat}
                                />{" "}
                                {formErrors.email && (
                                    <span
                                        className="error-message"
                                        style={{ color: "red" }}
                                    >
                                        {formErrors.email}
                                    </span>
                                )}
                            </Form.Item>

                            <Form.Item<NewUser>>
                                Password:
                                <Input.Password
                                    type="password"
                                    name="password"
                                    onChange={handleCreat}
                                />
                                {formErrors.password && (
                                    <span
                                        className="error-message"
                                        style={{ color: "red" }}
                                    >
                                        {formErrors.password}
                                    </span>
                                )}
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    className="bg-[#B18979] text-[#fff] w-full h-[54px] text-base font-bold uppercase rounded-[50px] hover:text-white border-none"
                                    htmlType="submit"
                                    onClick={handleCreateUser}
                                >
                                    Đăng nhập
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="text-center">
                        <p>hoặc</p>
                    </div>
                    <div>
                        <button
                            className="w-full h-[44px] bg-[#fff] text-sm font-medium rounded relative mt-5"
                            style={{ border: "1px solid #F0F0F0" }}
                        >
                            <img
                                className="absolute top-[24%] left-[14px] w-6"
                                src="https://bizweb.dktcdn.net/100/361/830/themes/924241/assets/logo-facebook_1.png?1700487202938"
                                alt=""
                            />
                            Đăng nhập qua Facebook
                        </button>
                        <button
                            className="w-full h-[44px] bg-[#fff] text-sm font-medium rounded relative mt-5"
                            style={{ border: "1px solid #F0F0F0" }}
                        >
                            <img
                                className="absolute top-[24%] left-[14px] w-6"
                                src="https://bizweb.dktcdn.net/100/361/830/themes/924241/assets/google_1.png?1700487202938"
                                alt=""
                            />
                            Đăng nhập qua Google
                        </button>
                    </div>
                    <div className="text-center mt-5 cursor-pointer">
                        <p>
                            Chưa có tài khoản?{" "}
                            <Link to="/register">
                                <b>Đăng ký tại đây!</b>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
