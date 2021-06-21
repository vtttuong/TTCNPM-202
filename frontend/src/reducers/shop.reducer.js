import {
    ADD_PRODUCT_TO_CART,
    DECREMENT_CART_ITEM_QUANTITY,
    INCREMENT_CART_ITEM_QUANTITY,
    REMOVE_PRODUCT_FROM_CART
} from '../actions';
import { foods } from "../data/foods";
const initialState = {
    products: foods,
    cart: []
};


const shopReducer = (state = initialState, action,quantity=1) => {
    let updatedCart;
    let updatedItemIndex;

    switch (action.type) {
        case INCREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const incrementedItem = {
                ...updatedCart[updatedItemIndex]
            };
            incrementedItem.quantity++;

            updatedCart[updatedItemIndex] = incrementedItem;


            return { ...state, cart: updatedCart };

        case DECREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const decrementedItem = {
                ...updatedCart[updatedItemIndex]
            };

            decrementedItem.quantity--;

            updatedCart[updatedItemIndex] = decrementedItem;

            return { ...state, cart: updatedCart };

        case ADD_PRODUCT_TO_CART:
                console.log(action.payload,'alo')
                updatedCart = [...state.cart];
                updatedItemIndex = updatedCart.findIndex(item => item.id === action.payload[0].id);
                if (updatedItemIndex < 0) {
                    updatedCart.push({ ...action.payload[0], ...action.payload[1] });
                } else {
                    const updatedItem = {
                        ...updatedCart[updatedItemIndex]
                    };
                    updatedItem.quantity+=action.payload[1];
                    updatedCart[updatedItemIndex] = updatedItem;
                }

                return { ...state, cart: updatedCart };
                
        case REMOVE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            updatedCart.splice(updatedItemIndex, 1);

            return { ...state, cart: updatedCart };
        default:
            return state;

    }
};

export default shopReducer;
