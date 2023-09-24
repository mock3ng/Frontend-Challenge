const shopItem = document.querySelector("#shoppages")
const filterButton = document.querySelector("#filterbutton")
const filterPrice = document.querySelector("#filter-price")
let productInfo

async function dataLocal(){
  
    const productsCard  = await fetch("/eticaret/js/data.json");
    productInfo = await productsCard.json();  
    
    addPages(productInfo,0)

  }




function addPages(productInfo,price){
  if (price !=0){
    var  htmlItem = ""
    for(item of productInfo){
        if(item.price.newPrice<=price){
            htmlItem += `<div href="" class="featured-item" id="${item.id}">
            <div class="sales-radius">
                <span>${item.discount}</span>
            </div>
            <img src="${item.img.singleImage}" alt="" class="front-photo1">

            <h2 class="products-name">${item.name}</h2>
            <div class="stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
            </div>
            <strong class="price-products">$${item.price.newPrice}</strong>
            <span id="analogue-price" class="discount-products">$${item.price.oldPrice}</span>
            <div class="buttons-info">
                <button id="0" class="basket-button"> <i class="bi bi-basket fill"></i></button>
                <a href="#"> <i class="bi bi-eye-fill"></i> </a>
            </div>
        </div>`;
        }
        }
        
  }else{
    var  htmlItem = ""
    for(item of productInfo){
      
        htmlItem += `<div href="" class="featured-item" id="${item.id}">
          <div class="sales-radius">
              <span>${item.discount}</span>
          </div>
          <img src="${item.img.singleImage}" alt="" class="front-photo1">

          <h2 class="products-name">${item.name}</h2>
          <div class="stars">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
          </div>
          <strong class="price-products">$${item.price.newPrice}</strong>
          <span id="analogue-price" class="discount-products">$${item.price.oldPrice}</span>
          <div class="buttons-info">
              <button id="0" class="basket-button"> <i class="bi bi-basket fill"></i></button>
              <a href="#"> <i class="bi bi-eye-fill"></i> </a>
          </div>
      </div>`;
      }
  }
  
  shopItem.innerHTML = htmlItem;
  const shopProduct = document.querySelectorAll(".featured-item")
  shopProduct.forEach((item)=>{
    item.addEventListener("mouseover",()=>{
      item.children[1].src = `img/products/product${item.id}/2.png`
    })
    item.addEventListener("mouseleave",()=>{
      item.children[1].src = `img/products/product${item.id}/1.png`
    })
    item.addEventListener("click" , ()=>{
      console.log(item.children[1],item.children[2].textContent,item.children[4].textContent,item.children[5].textContent)
      localStorage.setItem("productpage",JSON.stringify([{"id":item.id}]))
      redictProduct()
    })
  });
}



dataLocal();


filterButton.addEventListener("click", ()=>{
  console.log(filterPrice.value)
  addPages(productInfo,filterPrice.value)
})

function redictProduct(){
  window.location.href = "/eticaret/product.html"
}