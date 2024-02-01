const toggleNav = document.querySelector('.toggle-nav');
const navlist = document.querySelector('.navlist');
const btnsList = document.querySelectorAll('.products .items-list button');

toggleNav.addEventListener('click',()=>{
    navlist.classList.toggle('show');
})
        const products = [
    // Earbuds (3)
    {
      id:"PRODUCT1",
      name: "AirBlast Wireless Earbuds",
      product: "earbud",
      stars: 4,
      price: 89,
      desc: "Immerse yourself in high-fidelity sound with these wireless earbuds.",
      src: "./store/earbud1.jpg",
      quantity : 0
    },
    {
      id:"PRODUCT2",
      name: "BeatGroove Earbuds Pro",
      product: "earbud",
      stars: 4.5,
      price: 129,
      desc: "Experience crystal-clear audio and noise cancellation technology.",
      src: "./store/earbud2.jpg",
      quantity : 0
    },
    {
      id:"PRODUCT3",
      name: "Aurora Buds",
      product: "earbud",
      stars: 4.2,
      price: 59,
      desc: "Enjoy music on the go with these stylish and comfortable earbuds.",
      src: "./store/earbud3.jpg",
      quantity : 0
    },
    // Headphones (5)
    {
      id:"PRODUCT4",
      name: "SonicBoom Over-Ear Headphones",
      product: "headphone",
      stars: 4.3,
      price: 149,
      desc: "Get lost in your music with these premium over-ear headphones.",
      src: "./store/headphone1.jpg",
      quantity : 0
    },
    {
      id:"PRODUCT5",
      name: "BeatMaster Studio Headphones",
      product: "headphone",
      stars: 4.7,
      price: 199,
      desc: "Professional-grade sound quality for audiophiles and music producers.",
      src: "./store/headphone2.jpg",
      quantity : 0
    },
    {
      id:"PRODUCT6",
      name: "AcousticX Wireless Headphones",
      product: "headphone",
      stars: 4.1,
      price: 119,
      desc: "Enjoy wireless freedom with rich, immersive sound.",
      src: "./store/headphone3.jpg",
      quantity : 0
    },
    {
      id:"PRODUCT7",
      name: "SoundWave Noise-Canceling Headphones",
      product: "headphone",
      stars: 4.4,
      price: 179,
      desc: "Block out distractions and enjoy your music with noise-canceling technology.",
      src: "./store/headphone4.jpg",
      quantity : 0
    },
    {
      id:"PRODUCT8",
      name: "PulseMax Sport Headphones",
      product: "headphone",
      stars: 4.0,
      price: 99,
      desc: "Designed for athletes, these headphones deliver high-quality sound with a secure fit.",
      src: "./store/headphone5.jpg",
      quantity : 0
    },
    // Phones (6)
    {
      id:"PRODUCT9",
      name: "Galaxy Nebula S22",
      product: "phone",
      stars: 4.6,
      price: 999,
      desc: "Unleash the power of innovation with the Galaxy Nebula S22 smartphone.",
      src: "./store/phone1.jpg",
      quantity : 0
    },
    {
      id:"PRODUCT10",
      name: "PixelX Pro",
      product: "phone",
      stars: 4.5,
      price: 899,
      desc: "Capture life's moments with the advanced camera and cutting-edge features of the PixelX Pro.",
      src: "./store/phone2.jpg",
      quantity : 0
    },
    {
      id:"PRODUCT11",
      name: "Nova Elite",
      product: "phone",
      stars: 4.2,
      price: 699,
      desc: "Experience superior performance and sleek design with the Nova Elite smartphone.",
      src: "./store/phone3.jpg",
      quantity : 0
    },
    {
      id:"PRODUCT12",
      name: "Horizon Plus",
      product: "phone",
      stars: 4.3,
      price: 799,
      desc: "Discover limitless possibilities with the Horizon Plus smartphone.",
      src: "./store/phone4.jpg",
      quantity : 0
    },
    {
      id:"PRODUCT13",
      name: "Titan 5G",
      product: "phone",
      stars: 4.4,
      price: 1099,
      desc: "Experience blazing-fast speeds and unparalleled performance with the Titan 5G.",
      src: "./store/phone5.jpg",
      quantity : 0
    },
    {
      id:"PRODUCT14",
      name: "EdgeX Plus",
      product: "phone",
      stars: 4.1,
      price: 649,
      desc: "Stay connected and productive with the EdgeX Plus smartphone.",
      src: "./store/phone6.jpg",
      quantity : 0
    },
    // Laptops (6)
    {
      id:"PRODUCT15",
      name: "ZenBook Infinity",
      product: "laptop",
      stars: 4.8,
      price: 1499,
      desc: "Elevate your productivity with the ultra-slim and powerful ZenBook Infinity laptop.",
      src: "./store/laptop1.jpg",
      quantity : 0
    },
    {
      id:"PRODUCT16",
      name: "AeroFlex Pro",
      product: "laptop",
      stars: 4.7,
      price: 1299,
      desc: "Experience unmatched performance and versatility with the AeroFlex Pro laptop.",
      src: "./store/laptop2.jpg",
      quantity : 0
    },
    {
      id:"PRODUCT17",
      name: "SwiftShift Ultrabook",
      product: "laptop",
      stars: 4.6,
      price: 1099,
      desc: "Stay productive on the go with the SwiftShift Ultrabook's lightweight design and powerful performance.",
      src: "./store/laptop3.jpg",
      quantity : 0
    },
    {
      id:"PRODUCT18",
      name: "NovaBook Pro",
      product: "laptop",
      stars: 4.5,
      price: 1199,
      desc: "Experience seamless multitasking and stunning visuals with the NovaBook Pro laptop.",
      src: "./store/laptop4.jpg",
      quantity : 0
    },
    {
      id:"PRODUCT19",
      name: "FusionX Elite",
      product: "laptop",
      stars: 4.4,
      price: 999,
      desc: "Get the best of both worlds with the FusionX Elite's performance and portability.",
      src: "./store/laptop5.jpg",
      quantity : 0
    },
    {
      id:"PRODUCT20",
      name: "TitanBook Ultimate",
      product: "laptop",
      stars: 4.9,
      price: 1799,
      desc: "Experience ultimate power and performance with the TitanBook Ultimate laptop.",
      src: "./store/laptop6.jpg",
      quantity : 0
    }
  ];
        const items = document.querySelector('.products .items');
        let filterItems = products;


function itemsHtml(productList){
    items.innerHTML = ""
    let html = productList.map(product => {
      let cartItems = JSON.parse(window.localStorage.getItem("cartItems"));
      if(!cartItems || cartItems.length == 0){
        cartItems = [];
      }
      else{
        let finditem = cartItems.find(item => {
          return item.id === product.id;
        })
        console.log(finditem);
        if(finditem){
          return `
              <article>
                  <div class="item-img">
                      <img src="${product.src}" alt="${product.name}">
                  </div>
                  <h4>${product.name}</h4>
                  <p>$ ${product.price}</p>
                  <button onclick="addtocart('${product.id}')" style="background-color:grey; cursor:not-allowed" disabled>added to cart</button>
              </article>
            `
        }
      } 
      return `
          <article>
              <div class="item-img">
                  <img src="${product.src}" alt="${product.name}">
              </div>
              <h4>${product.name}</h4>
              <p>$ ${product.price}</p>
              <button onclick="addtocart('${product.id}')">add to cart</button>
          </article>
        `
    }).join('');
    items.innerHTML = html;
}
btnsList.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        filterItems = [];
        e.preventDefault();
        const val = btn.dataset.val;

        btnsList.forEach(btn => {
            btn.classList.remove('active');
        })
        btn.classList.add('active');

        if(val === "all"){
            filterItems = products;            
        }
        else{
            filterItems = products.filter(singleproduct => {
                return singleproduct.product === val;
            })
        }
        itemsHtml(filterItems);
    })
})

const search = document.getElementById('search');
search.addEventListener('input',()=>{
    let searchval = search.value.toLowerCase();
    let searchItems = []
    if(searchval === ""){
        searchItems = filterItems;
    }
    else{
        searchItems = filterItems.filter(item => {
            return item.name.toLowerCase().startsWith(searchval);
        })
    }
    itemsHtml(searchItems);
})

function addtocart(id){
  let product = products.find((prod)=>{
    return prod.id === id;
  })
  let cartItems = JSON.parse(window.localStorage.getItem("cartItems"));
  if(!cartItems || cartItems.length == 0){
    cartItems = [];
  }
  cartItems.push(product);
  window.localStorage.setItem("cartItems",JSON.stringify(cartItems));
  window.location.reload();
}

itemsHtml(products);

