export function getAllCartItems() {
    if (localStorage.cartItems) {
        return JSON.parse(localStorage.cartItems);
    } else {
        return [];
    }
}

export function addCartItem(shoppingItem) {
    let allCartItems = getAllCartItems();
    if (allCartItems.includes(cartItem => cartItem.key === shoppingItem.key) == false) {
        allCartItems.push(shoppingItem);
        //now update localStorage
        localStorage.cartItems = JSON.stringify(allCartItems);
    }
}

export function removeCartItem(shoppingItemKey) {
    const allCartItems = getAllCartItems();
    const allBut = allCartItems.filter(x => x.key != shoppingItemKey);
    //now update localStorage
    localStorage.cartItems = JSON.stringify(allBut);
}

export function clearCart() {
    delete localStorage.cartItems;
}