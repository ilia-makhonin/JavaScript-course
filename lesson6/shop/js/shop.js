var productName = [];
var productPrice = [];
var fullPrice = 0;

function shop() {
    var buy = document.getElementsByClassName('buy');
    var name = document.getElementsByClassName('product-name');
    var price = document.getElementsByClassName('price');

    for (var i = 0; i < buy.length; i++) {
        buy[i].onclick = buyProduct;
        buy[i].id = i;
        productName.push(name[i].textContent);
        productPrice.push(price[i].textContent);
    }
}

function buyProduct(event) {
    var list = document.getElementById('list');
    var li = document.createElement('li');
    var price = document.getElementById('full-price');
    var a = event.target.id;
    a = parseInt(a);
    li.innerText = productName[a];
    list.appendChild(li);

    var sum = parseInt(productPrice[a]);
    fullPrice += sum;
    price.innerText = ' ';
    price.innerText = fullPrice + '$';
}

window.onload = shop();