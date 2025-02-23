let cart = [];
let cartPopup = document.getElementById('cart-popup');

function addToCart(item, price) {
    cart.push({ item, price });
    updateBasket();
}

function updateBasket() {
    let basket = document.querySelector('.basket');
    basket.textContent = `Basket (${cart.length})`;
}

function showCartPopup() {
    cartPopup.style.display = 'block';
    let cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((cartItem, index) => {
        let cartItemDiv = document.createElement('div');
        cartItemDiv.textContent = `${cartItem.item} - ${cartItem.price}`;
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-item';
        removeButton.onclick = () => removeFromCart(index);
        cartItemDiv.appendChild(removeButton);
        cartItems.appendChild(cartItemDiv);
        total += cartItem.price;
    });
    let cartTotal = document.querySelector('.cart-total');
    cartTotal.textContent = `Total: ${total}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateBasket();
    showCartPopup();
}

function closeCartPopup() {
    cartPopup.style.display = 'none';
}

