function colorChange(param) {
    document.getElementById("m_" + param.toString()).style.filter = "invert(1)";
    document.getElementById("img_" + param.toString()).style.borderBottom = "3px solid #00a0ff";
    document.getElementById("img_" + param.toString()).style.color = "#ffffff";
} // change color in visual choosing menu
function colorBack(param) {
    document.getElementById("m_" + param.toString()).style.filter = "invert(0)";
    document.getElementById("img_" + param.toString()).style.borderBottom = "3px solid #ff6c00";
    document.getElementById("img_" + param.toString()).style.color = "#b4b4b4";
}   // back color in visual choosing menu
function fastTime() {
    if (document.getElementById('time').disabled === true) {
        document.getElementById('time').disabled = false;
        document.getElementById('button-fast-time').style.backgroundColor="#ff7500"

    }
    else {
        document.getElementById('time').disabled = true;
        document.getElementById('button-fast-time').style.backgroundColor="#00a0ff"
    }
}         // change color fast time button

let d = document,
    itemBox = d.querySelectorAll('.item'), // div for items
    price = d.getElementById('price');    // total price block
    price.innerHTML = JSON.parse( localStorage.getItem('cart')).total + ' руб.'; // set total when page loaded

function getCartData() {
    console.info("Local store loaded")
    return JSON.parse(localStorage.getItem('cart'));
}

function setCartData(o) {
    console.info("Local store write")
    localStorage.setItem('cart', JSON.stringify(o));
    return false;
}

function addToCart(e) {
    console.info("Add to cart function")
    let cartData = getCartData() || {total: 0}, // get data and create obj if cart is empty
        parentBox = e.parentNode.parentNode, // parent button "+"
        itemId = e.getAttribute('data-id'), // info about pizza
        itemTitle = parentBox.querySelector('.item-name').innerHTML,
        itemPrice = parentBox.querySelector('.item-price').innerHTML;

    // total
    cartData.total += +itemPrice;
    price.innerHTML = cartData.total + " руб.";
    //

    console.log(itemId, itemTitle, itemPrice + " - added to cart");
    if (cartData.hasOwnProperty(itemId)) { // if in cart add +1 to value
        cartData[itemId][2] += 1;
    } else { // if this item don't in cart
        cartData[itemId] = [itemTitle, itemPrice, 1];
    }
    setCartData(cartData);
    return false;
}

function openCart(e) {
    console.info("Open cart")
    let cartData = getCartData(),
        totalItems = '';
    console.log(JSON.stringify(cartData));
    // if smth in cart form list
    if (cartData !== null) {
        totalItems = '<table class="shopping_list"><tr><th>Заказ</th><th>Цена</th><th>Кол-во</th></tr>';
        for (let items in cartData) { // form table with result
            totalItems += '<tr>';
            for (let i = 0; i < cartData[items].length; i++) {
                totalItems += '<td>' + cartData[items][i] + '</td>';
            }
            totalItems += '</tr>';
        }
        totalItems += '</table>';
        // price.innerHTML = totalItems; // Change to popUp view
    } else {
        price.innerHTML = 'Не выбран ни один пункт меню :(';
    }
    return false;
}

function clearCart(e) {
    localStorage.removeItem('cart');
    price.innerHTML = '0 руб.';
    console.log("clear");
}


/*
1. Total price.
2. Modal window (order)
3. Modal window (auth)
 */
