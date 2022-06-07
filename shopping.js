//============== TO STORE THE INFORMATION IN UI FOR FOREVER ===================
const displayLocalStrogeCart = () => {
    const cart = getCart();      // cart ti ase kina tar jonno check
    for (const productName in cart){
        displayProducts(productName);
    }
}

const addItem = () => {
    const nameField = document.getElementById("product-name");
    const name = nameField.value;
    if(!name){
        return;
    }

    // DISPLAY IN THE UI 
    displayProducts(name);

    // ADD TO LOCAL STORAGE IN BACKEND
    addProductToCart(name)
    //======================= DATA CLEAR 
    nameField.value = '';
}

const displayProducts = nameParameter => {
    const ul = document.getElementById("products");
    const li = document.createElement('li');
    li.innerText = nameParameter;
    ul.appendChild(li);
}


//========================== ADD VALUE IN LOCAL STORAGE ==================
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }
    else{
        cartObj = {};
    }
    return cartObj;
}

const addProductToCart = nameParameter2 => {
    const cart = getCart();     // ai jinish ta ai khan a keno likha holo??
    // cart[nameParameter2] = 1;
    if(cart[nameParameter2]){
        cart[nameParameter2] = cart[nameParameter2] + 1;
    }
    else{
        cart[nameParameter2] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    // console.log(cartStringified);
    localStorage.setItem('cart', cartStringified);
    // console.log(cart);
    
}

    const placeOrder = () => {
        document.getElementById('products').textContent = '';
        localStorage.removeItem('cart');
    }


displayLocalStrogeCart();