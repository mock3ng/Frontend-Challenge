const mainProduct = document.querySelector(".product-wrapper");
const productInfo = JSON.parse(localStorage.getItem("products"));
var headercount = document.querySelectorAll(".header-card-count")

function productContent (){
    const itemId = JSON.parse(localStorage.getItem("productpage"));
    
    for (item of productInfo){
        
        if (item.id == itemId[0].id){
            mainProduct.innerHTML = `<div class="product-categori">
            <a href="">Home</a>
            <p>/</p>
            <a href="">${item.categories[0]}</a>
            <p>/</p>
            <a href="">${item.categories[1]}</a>
            
        </div>
        <div class="products-content">
            <div class="img-content">
                <img src="img/products/product${item.id}/1.png" class="big-img" alt="">
                <div class="small-img">
                    <img src="img/products/product${item.id}/1.png" class="active-small small-imger" alt="">
                    <img src="img/products/product${item.id}/2.png" class="small-imger" alt="">
                    <img src="img/products/product${item.id}/3.png" class="small-imger" alt="">
                </div>
            </div>
            <div class="info-content">
                <h4>${item.name}
                </h4>
                <div class="reviews-detail">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                    <span>2 reviews</span>
                </div>
                <div class="price-details">
                    <h5 class="last-price">$${item.price.oldPrice}</h5>
                    <h5 class="curr-price">$${item.price.newPrice}</h5>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</p>
                
                <div class="product-size">
                    <strong>Size</strong>
                    <button class="xs active sizer">XS</button>
                    <button class="x sizer">X</button>
                    <button class="m sizer">M</button>
                    <button class="l sizer">L</button>
                    <button class="xl sizer">XL</button>
                </div>
                <div class="product-number">
                    <input type="number" value="1" min="1">
                    <button class="btn btn-lg btn-primary product-page-basket" id="${item.id}">Add to cart</button>
                </div>
                <div class="product-icon">
                    <a href="" class="size">
                        <i class="bi bi-globe"></i>
                        <span>Size Guide</span>
                    </a>
                    <a href="" class="size">
                        <i class="bi bi-heart"></i>
                        <span>Add to Wislist</span>
                    </a>
                    <a href="" class="size">
                        <i class="bi bi-share"></i>
                        <span>Share This Product</span>
                    </a>
                </div>
                <div class="product-info">
                    <div class="sku">
                        <span>SKU : </span>
                        <strong>BE45VGRT</strong>
                    </div>
                    <div class="categories">
                        <span>Categories : </span>
                        <strong>${item.categories[0]} , ${item.categories[1]}</strong>
                    </div>
                    <div class="tags">
                        <span>Tags : </span>
                        <strong></strong>

                    </div>
                </div>
            </div>
        </div>
        <div class="product-details"></div>`;
        }

    }
    
    const smallImg = document.querySelectorAll(".small-imger");
    const bigImg = document.querySelector(".big-img")
    
    smallImg.forEach(function(item){

        item.addEventListener("click",()=>{
            bigImg.src = item.src
            for (i of smallImg){
                i.classList="small-imger";
            }
            item.classList = "active-small";
        })
    });

    const sizeProduct = document.querySelectorAll(".sizer");

    sizeProduct.forEach(function(item){
        
        item.addEventListener("click", ()=>{
            
            for (i of sizeProduct){
                i.classList = "sizer"
            }
            item.classList = "active sizer"
        })

    })

}

productContent()
const button = document.querySelector(".product-page-basket")
button.addEventListener("click", function() {
    var productId = button.id; 
    var productsInStorage = JSON.parse(localStorage.getItem("products"));
    
    var selectedProduct = productsInStorage[productId];

    //productsInStorage[productId].img.singleImage image
    //selectedProduct = productsInStorage[productId].name name
    //selectedProduct = productsInStorage[productId].price.oldPrice price int

    var bucketItems = JSON.parse(localStorage.getItem("bucketitems")) || [];

   
    var productToAdd = {
      name: productsInStorage[productId].name,
      img: productsInStorage[productId].img.singleImage,
      price: productsInStorage[productId].price.newPrice,
      id : productsInStorage[productId].id,
      count : 1
    };
    var equal = false
    for(item of bucketItems){
      
      if(item.id == productToAdd.id){
        item.count +=1;

        equal = true
      }
    }
    if (equal == false){
      bucketItems.push(productToAdd);
    }
    
    

    
    localStorage.setItem("bucketitems", JSON.stringify(bucketItems));

    setBucket(bucketItems)

    
   
    
  });

function setBucket(bucketItems){
    var bucketCount = 0
    for (item of bucketItems){
      bucketCount += item.count
    }
    headercount.forEach(function(counter){
      counter.textContent = bucketCount
    })
  }
var bucketItems = JSON.parse(localStorage.getItem("bucketitems")) || [];
setBucket(bucketItems)