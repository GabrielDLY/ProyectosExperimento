const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailCard = document.querySelector('.product-detail-card')
const productDetailCloseIcon = document.querySelector('.product-detail-close')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', toggleCloseProductDetailAside);

function toggleCloseProductDetailAside(){
    productDetailCard.classList.toggle('inactive');
}


function toggleDesktopMenu(){
    const isAsideOpenClose = aside.classList.contains('inactive');

    if (!isAsideOpenClose) {
        aside.classList.add('inactive');
    }

    console.log('Click');
    desktopMenu.classList.toggle('inactive');
    productDetailCard.classList.add('inactive')
}
function toggleMobileMenu() {
    const isAsideOpenClose = aside.classList.contains('inactive');

    if (!isAsideOpenClose) {
        aside.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
    productDetailCard.classList.add('inactive');
}
function toggleCarritoAside() {
    const isMobileMenuOpenClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = desktopMenu.classList.contains('inactive');

    if (!isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClose = productDetailCard.classList.contains('inactive');
    if (!isProductDetailClose){
        productDetailCard.classList.add('inactive')
    }

    if (!isMobileMenuOpenClose) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}


function openProductDetailAside(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive')
    aside.classList.add('inactive')
    productDetailCard.classList.remove('inactive')
}
const productList = []; 
productList.push({
    name: 'Display',
    price: "220,00",
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Phone ',
    price: "620,00",
    image: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4195325.jpg&fm=jpg'
})
productList.push({
    name: 'Computer',
    price: "1.200,00",
    image: 'https://i.pinimg.com/564x/62/7d/8b/627d8b59bd00006d7c7bc333c9a51d36.jpg'
})
productList.push({
    name: 'Car',
    price: "57.000,00",
    image: 'https://i.pinimg.com/564x/1d/c5/57/1dc557be9c75524f7468744a2afd3b10.jpg'
})
productList.push({
    name: 'Motorcycle',
    price: "25.000,00",
    image: 'https://i.pinimg.com/564x/ba/10/15/ba101581244ee80fd0107a6b2d262672.jpg'
})
productList.push({
    name: 'Keyboard and Mouse',
    price: "15,00",
    image: 'https://i.pinimg.com/564x/a6/ce/20/a6ce20ffbbf7d195ee0c6408d9ce47df.jpg'
})
productList.push({
    name: 'HDD',
    price: "50,00",
    image: 'https://i.pinimg.com/564x/9c/62/78/9c6278b178d9117ba5afd86ff1c98476.jpg'
})
productList.push({
    name: 'RAM',
    price: "60",
    image: 'https://i.pinimg.com/564x/d9/e3/27/d9e3273f9fbc2988daa2e4d6494d62c5.jpg'
})

function renderProducts(arr) {
for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo); 

    cardsContainer.appendChild(productCard);
};
}

renderProducts(productList)