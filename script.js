// Handle UI
const btnNext = document.querySelector('.carousel-control-next');
const btnPrevious = document.querySelector('.carousel-control-prev');
const carOne = document.querySelector('.car-1');
const carTwo = document.querySelector('.car-2');

const planetImg = document.querySelectorAll('#planetImg');

const textNextToPlanet = document.querySelectorAll('.text__next__to__planet');

btnNext.addEventListener('click', () => {
    carOne.classList.toggle('d-flex');
    carTwo.classList.toggle('d-flex');
})
btnPrevious.addEventListener('click', () => {
    carOne.classList.toggle('d-flex');
    carTwo.classList.toggle('d-flex');
})

function adjustLayout() {
    if (window.matchMedia(`(max-width: 1540px)`).matches) {
        planetImg.forEach(img => {
            img.classList.remove('w-75');
            img.classList.add('w-100', 'opacity-50');
        });
        textNextToPlanet.forEach(text => {
            text.classList.add('position-absolute', 'top-50', 'start-0', 'w-100');
        });
    }
    if (window.matchMedia(`(min-width: 1540px)`).matches) {
        planetImg.forEach(img => {
            img.classList.add('w-75');
            img.classList.remove('w-100', 'opacity-50');
        });
        textNextToPlanet.forEach(text => {
            text.classList.remove('position-absolute', 'top-50', 'start-0', 'w-100');
        });
    }
}
// Call the function on page load
window.addEventListener('load', adjustLayout);

// Call the function when the window is resized
window.addEventListener('resize', adjustLayout);


// // Functionalities
//Purchase && adding what has been purchesed to an obj

const purchaseBtns = document.querySelectorAll('.purchase__btn');
let cartItemsNumber = document.querySelector('.cart__items__number');
//define the total price + items in cart so if needed it data can be displayed from the object
const itemsInCart = {
    totalItems: 0,
    enceladusNormal: [],
    enceladusDark: []
}
//on each click increase total number of products + add the product in the above obj
function addItemToCart(e) {
    itemsInCart.totalItems += 1;
    cartItemsNumber.textContent = itemsInCart.totalItems;
    //correlated the purchase btn id with the price
    if (e.target.id === 'purchase-prod-1') {
        itemsInCart.enceladusNormal.push(+document.getElementById('price-1').textContent.split(' ')[0]);
    }
    if (e.target.id === 'purchase-prod-2') {
        itemsInCart.enceladusDark.push(+document.getElementById('price-2').textContent.split(' ')[0]);
    }
    const total = document.querySelector('.total');
    //calculate total price for one item from the array for the respective item
    const totalEnceladusNormal = itemsInCart.enceladusNormal.reduce((acc, no) => { return acc += no }, 0);
    //calculate total price for 2nd item from the array for the respective item
    const totalEnceladusDark = itemsInCart.enceladusDark.reduce((acc, no) => { return acc += no }, 0);
    //calculate total price
    const priceTotal = +totalEnceladusNormal + +totalEnceladusDark;
    //display total price
    total.textContent = `Total: ` + priceTotal.toFixed(2) + " €";
}
purchaseBtns.forEach(btn => btn.addEventListener('click', addItemToCart));
