var inStock;
var shiipping;

inStock = true;
shiipping = false;

inStock = false;
shiipping = true;

var elStock = document.getElementById('stock');
elStock.className = inStock;

var elShip = document.getElementById('shipping');
elShip.className = shiipping;