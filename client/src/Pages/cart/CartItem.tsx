import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formatCurrency } from "../../helpers";
import Swal from "sweetalert2";

interface CartItemProps {
    detail: any;
}
const CartItem = ({ detail }: CartItemProps) => {
    console.log("-----------", detail);

    const [quantity, setQuantity] = useState<number>(1);
    const dispatch = useDispatch();

    useEffect(() => {
        setQuantity(detail.clickNumber);
    }, [detail.clickNumber]);

    const handleIncrease = (id: number) => {
        setQuantity(quantity + 1);
        dispatch({ type: "INCREASE_CART_PRODUCT", payload: id });
    };

    const handleDown = (id: number) => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            dispatch({
                type: "DECREASE_CART_PRODUCT",
                payload: id,
            });
        }
    };

    // const deleteCart = (id: number) => {
    //     const cartItems = JSON.parse(localStorage.getItem("cart") as string);

    //     const itemIndex = cartItems.findIndex(
    //         (item: { _id: number }) => item._id === id
    //     );

    //     if (itemIndex !== -1) {
    //         cartItems.splice(itemIndex, 1);
    //         localStorage.setItem("cart", JSON.stringify(cartItems));
    //     }

    //     dispatch({
    //         type: "DELETE_CART",
    //         payload: cartItems,
    //     });
    // };
    const deleteCart = (id: number) => {
        Swal.fire({
            title: "Bạn có chắc không ?",
            text: "Bạn có muốn xóa sản phẩm khỏi giỏ hàng không ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Xóa",
        }).then((result) => {
            if (result.isConfirmed) {
                const cartItems = JSON.parse(
                    localStorage.getItem("cart") as string
                );

                const itemIndex = cartItems.findIndex(
                    (item: { _id: number }) => item._id === id
                );

                if (itemIndex !== -1) {
                    cartItems.splice(itemIndex, 1);
                    localStorage.setItem("cart", JSON.stringify(cartItems));
                }

                dispatch({
                    type: "DELETE_CART",
                    payload: cartItems,
                });

                Swal.fire({
                    title: "Thành công!",
                    text: "Mặt hàng của bạn đã bị xóa khỏi giỏ hàng .",
                    icon: "success",
                });
            }
        });
    };
    return (
        <div>
            <div
                style={{
                    padding: "0 24px",
                    border: "1px solid #E0E0E0",
                    height: "100%",
                }}
            >
                <div
                    className="flex items-center justify-between"
                    style={{
                        padding: "24px 0",
                        // borderBottom: "1px solid #E0E0E0",
                    }}
                >
                    <div className="flex w-[50%] gap-5">
                        <div>
                            {detail.image_shows &&
                                detail.image_shows.length > 0 && (
                                    <img
                                        className="w-[120px]"
                                        src={detail.image_shows[0].image}
                                        alt={`Product Image - ${detail.name}`}
                                    />
                                )}
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-[#232734] mb-2">
                                {detail.name}
                            </h1>
                            <p className="text-lg font-semibold text-[#B18979] mb-2">
                                {formatCurrency(Number(detail.price))}
                            </p>
                            {detail.tag.map((tag: any, index: any) => (
                                <p
                                    key={index}
                                    className="text-sm font-medium text-[#4F525D]"
                                >
                                    Kích thước: {tag.length} cm
                                </p>
                            ))}
                            {/* <p className="text-sm font-medium text-[#4F525D]">
                                Kích thước: 220 cm
                            </p> */}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="mt-2">Số lượng</span>
                        <div
                            className="flex items-center gap-3 mt-3 w-[118px] rounded"
                            style={{ border: "1px solid #D9D9D9" }}
                        >
                            <button
                                className="text-sm font-bold rounded cursor-pointer"
                                style={{
                                    padding: "7px 15px",
                                }}
                                onClick={() => handleDown(detail._id)}
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
                                    // border: "1px solid #B18979",
                                    padding: "7px 13px",
                                }}
                                onClick={() => handleIncrease(detail._id)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div
                        className="flex gap-3 text-[#4F525D] text-sm font-medium cursor-pointer"
                        onClick={() => deleteCart(detail._id)}
                    >
                        <img
                            src="//bizweb.dktcdn.net/100/361/830/themes/924241/assets/trash1.png?1700487202938"
                            alt=""
                        />
                        Xóa
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
