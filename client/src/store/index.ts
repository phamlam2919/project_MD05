import { legacy_createStore as createStore } from "redux";

interface CartItem {
    user_id: number;
    _id: number;
    clickNumber: number;
}

interface RootState {
    cart: CartItem[];
}

let initialState: RootState = {
    cart: JSON.parse(localStorage.getItem("cart") as string) || [],
};
// console.log("Initial State:", initialState);

const store = createStore((state: RootState = initialState, action: any) => {
    // console.log("cart cu", state.cart);
    if (action.type === "ADD_TO_CART") {
        let cart = [...state.cart];
        let { payload } = action;
        let findIndex = cart.findIndex(
            (e) => e._id === payload._id && e.user_id === payload.user_id
        );
        if (findIndex > -1) {
            cart[findIndex].clickNumber =
                cart[findIndex].clickNumber + payload.clickNumber;
        } else {
            cart.push(payload);
        }
        localStorage.setItem("cart", JSON.stringify(cart));

        return {
            ...state,
            cart: [...cart],
        };
    }

    if (action.type === "INCREASE_CART_PRODUCT") {
        let cart = [...state.cart];
        const id = action.payload.id;
        const user_id = action.payload.user_id;

        let findIndex = cart.findIndex(
            (e) => e._id === id && e.user_id == user_id
        );
        cart[findIndex].clickNumber = cart[findIndex].clickNumber + 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        return {
            ...state,
            cart: [...cart],
        };
    }
    if (action.type === "DECREASE_CART_PRODUCT") {
        let cart = [...state.cart];
        const id = action.payload.id;
        const user_id = action.payload.user_id;

        let findIndex = cart.findIndex(
            (e) => e._id === id && e.user_id == user_id
        );
        cart[findIndex].clickNumber = cart[findIndex].clickNumber - 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        return {
            ...state,
            cart: [...cart],
        };
    }
    if (action.type === "ORDER_TO_CART") {
        let { payload } = action;
        return {
            ...state,
            cart: [...payload],
        };
    }

    if (action.type === "CLEAR_CART") {
        console.log(action);
        let payload = action.payload;

        return {
            ...state,
            cart: [...payload],
        };
    }

    if (action.type === "DELETE_CART") {
        let { payload } = action;
        return {
            ...state,
            cart: [...payload],
        };
    }

    return state;
});

export default store;
