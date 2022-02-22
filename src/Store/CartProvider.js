import CartContext from "./cart-context";
import { useReducer } from "react";
const defCart = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
  if (action.identifier === "add_item") {
    const addedItemInCartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const addedItemInCart = state.items[addedItemInCartIndex];
    let updateItems;
    if (addedItemInCart) {
      const updateItem = {
        ...addedItemInCart,
        amount: addedItemInCart.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[addedItemInCartIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }

    const updatedPrice =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updateItems,
      totalAmount: updatedPrice,
    };
  }
  if (action.identifier === "remove_item") {
    const addedItemInCartIndex = state.items.findIndex(
      (item) => item.id === action.ID
    );
    const addedItemInCart = state.items[addedItemInCartIndex];
    console.log(addedItemInCart);
    const updatedPrice = state.totalAmount - addedItemInCart.price;
    let updateItems;
    if (addedItemInCart.amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.ID);
    } else {
      const updateItem = {
        ...addedItemInCart,
        amount: addedItemInCart.amount - 1,
      };
      updateItems = [...state.items];
      updateItems[addedItemInCartIndex] = updateItem;
    }
    return {
      items: updateItems,
      totalAmount: updatedPrice,
    };
  }
  if (action.identifier === "clear_cart") {
    return defCart;
  }
  return defCart;
}

function CartProvider(props) {
  const [cartState, dispatch] = useReducer(cartReducer, defCart);
  function addItemToCart(item) {
    dispatch({ identifier: "add_item", item: item });
  }
  function removeItemFromCart(id) {
    dispatch({ identifier: "remove_item", ID: id });
  }
  function clearItemsFromCart() {
    dispatch({ identifier: "clear_cart" });
  }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    clearCart: clearItemsFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartProvider;
