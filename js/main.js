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
        document.getElementById('button-fast-time').style.backgroundColor = "#ff7500"

    } else {
        document.getElementById('time').disabled = true;
        document.getElementById('button-fast-time').style.backgroundColor = "#00a0ff"
    }
}         // change color fast time button


let d = document,
    itemBox = d.querySelectorAll('.item'), // div for items
    price = d.getElementById('price');   // total price block
cartView = d.getElementsByClassName('cart-view')[0];
if (localStorage.getItem('cart')) { // set total when page loaded. if null - ignore
    totalJson = JSON.parse(localStorage.getItem('cart')).total;
    price.innerHTML = totalJson + ' руб.';
}

function cartDec(e) {
    let namePizza = e.parentNode.parentNode.querySelector('td');
    let cartData = getCartData(); // get data and create obj if cart is empty
    for (let key in cartData) {
        console.log(cartData[key][0]);
    }
}

function getCartData() {
    console.log("Local store loaded")
    return JSON.parse(localStorage.getItem('cart'));
}

function setCartData(o) {
    console.log("Local store write")
    localStorage.setItem('cart', JSON.stringify(o));
    return false;
}

function addToCart(e) {
    console.log("Add to cart function")
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
    if (cartData.hasOwnProperty(itemId)) { // if item in cart add +1 to value
        cartData[itemId][2] += 1;
    } else { // if this item don't in cart
        cartData[itemId] = [itemTitle, itemPrice, 1];
    }
    setCartData(cartData);
    return false;
}

function openCart(showBaskset) {
    console.log("Open cart")
    let cartData = getCartData(),
        finalCartList = '';
    // show pop
    d.getElementsByClassName('b-popup')[0].style.visibility = "visible";
    if (cartData) d.getElementById('price-pop').innerHTML = cartData.total + ' руб.';
    //
    // if smth in cart form list
    if (cartData) {
        finalCartList = '<table class="shopping_list"><tr><th>Заказ</th><th>Цена</th><th>Кол-во</th><th></th></tr>';
        for (let items in cartData) { // form table with result
            if (items !== 'total') { // When we have end of the table items = total
                finalCartList += '<tr>';
                for (let i = 0; i < cartData[items].length; i++) {
                    finalCartList += '<td>' + cartData[items][i] + '</td>';
                }
                finalCartList += '<td>' + '<img src="img/minus-box-outline.svg" alt="" onclick="cartDec(this)"/>' + '</td>';
                finalCartList += '</tr>';
            }
        }
        finalCartList += '</table>';

        cartView.innerHTML = finalCartList;
        if (showBaskset) {

        }
    } else {
        cartView.innerHTML = 'Не выбран ни один из пунктов меню :(';
    }
    return false;
}

function closePop() {
    d.getElementsByClassName('b-popup')[0].style.visibility = "hidden";
}

function clearCart() {
    localStorage.removeItem('cart');
    price.innerHTML = '0 руб.';
    cartView.innerHTML = '';
    d.getElementById('price-pop').innerHTML = '0 руб.';
    console.log("clear");
}

