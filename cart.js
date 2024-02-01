const toggleNav = document.querySelector('.toggle-nav');
const navlist = document.querySelector('.navlist');
const cartSection = document.querySelector('.cart-section .cart-items');
const totalprice = document.getElementById('totalprice');

toggleNav.addEventListener('click',()=>{
    navlist.classList.toggle('show');
})

function cartItems(){
    let cartItems = JSON.parse(window.localStorage.getItem("cartItems"));
    if(!cartItems || cartItems.length == 0){
        cartItems = [];
        cartSection.innerHTML = `<h2 style="text-align:center">Cart is Empty</h2>`
        return;
    }
    let total = 0;
    let html = cartItems.map(item => {
        total = total + (item.price*item.quantity);
        return `
        <article>
            <h4>${item.name}</h4>
            <div class="item-img">
                <img src="${item.src}" alt="earbud">
            </div>
            <div>
                <div class="cart-btns">
                    <button id="dec" onclick="dec('${item.id}')"><i class="fa-solid fa-minus"></i></button>
                    <p class="numberOfItems">${item.quantity}</p>
                    <button id="inc" onclick="inc('${item.id}')"><i class="fa-solid fa-plus"></i></button>
                </div>
                <h4 class="item-price">$ ${item.price * item.quantity}</h4>
                <button onclick="removeitem('${item.id}')" class="remove-btn">Remove</button>
            </div>
        </article>
        `
    }).join('');
    totalprice.textContent = `$ ${total}`
    cartSection.innerHTML = html;
}

function dec(id){
    let cartItems = JSON.parse(window.localStorage.getItem("cartItems"));
    if(!cartItems || cartItems.length == 0){
        cartItems = [];
        cartSection.innerHTML = `<h2 style="text-align:center">Cart is Empty</h2>`
        return;
    }
    let total = 0;
    cartItems = cartItems.map(item => {
        if(item.id === id){
            if(item.quantity <= 0){
                
            }
            else{
                item.quantity = item.quantity-1;
            }
        }
        total = total + (item.price*item.quantity);
        return item;
    })
    totalprice.textContent = `$ ${total}`
    window.localStorage.setItem("cartItems",JSON.stringify(cartItems));
    window.location.reload()
}
function inc(id){
    let cartItems = JSON.parse(window.localStorage.getItem("cartItems"));
    if(!cartItems || cartItems.length == 0){
        cartItems = [];
        cartSection.innerHTML = `<h2 style="text-align:center">Cart is Empty</h2>`
        return;
    }
    let total = 0;
    cartItems = cartItems.map(item => {
        if(item.id === id){
            item.quantity = item.quantity+1;
        }
        total = total + (item.price*item.quantity);
        return item;
    })
    totalprice.textContent = `$ ${total}`
    window.localStorage.setItem("cartItems",JSON.stringify(cartItems));
    window.location.reload()
}
function removeitem(id){
    let cartItems = JSON.parse(window.localStorage.getItem("cartItems"));
    if(!cartItems || cartItems.length == 0){
        cartItems = [];
        cartSection.innerHTML = `<h2 style="text-align:center">Cart is Empty</h2>`
        return;
    }
    let total = 0;
    cartItems = cartItems.filter(item => {
        if(item.id !== id){
            console.log("rund");
            total = total + (item.price*item.quantity);
        }
        return item.id !== id;
    })
    totalprice.textContent = `$ ${total}`
    window.localStorage.setItem("cartItems",JSON.stringify(cartItems));
    window.location.reload()
}



cartItems();