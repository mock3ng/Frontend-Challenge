var sliderPhoto = document.querySelector(".slider-img-content");
var dotsContent  = document.querySelector(".dots");
var basketButtons = document.querySelectorAll(".basket-button");
var headercount = document.querySelectorAll(".header-card-count")

var curr_slide = 1


var slide_img = ["img/slider/slider1.jpg" , "img/slider/slider2.jpg"  , "img/slider/slider3.jpg"];
function currentSlide(slide_count){
  sliderPhoto.src = slide_img[slide_count];
  curr_slide = slide_count
  for (var childDot in dotsContent.children){
    if(childDot != slide_count){
      dotsContent.children[2-childDot].classList = "dot"
    }else{
      dotsContent.children[2-slide_count].classList = "dot active"
    }
    
  }
  
}

function sliderButton(buttonContent){
  if (buttonContent ==="+"){
    if (curr_slide == 2) {
      curr_slide = 0
      currentSlide(curr_slide);
    }else{
      curr_slide += 1;
      currentSlide(curr_slide);
    }
  }else{
    if (curr_slide == 0) {
      curr_slide = 2
      currentSlide(curr_slide);
    }else{
      curr_slide -= 1;
      currentSlide(curr_slide);
    }
    
  }

}

function sliderLoop() {
  setInterval(function () {
    if (curr_slide == 2) {
      curr_slide = 0;
      currentSlide(curr_slide);
    } else {
      curr_slide += 1;
      currentSlide(curr_slide);
    }
  }, 2000);
}


async function dataLocal(){
  

  const productsCard  = await fetch("/eticaret/js/data.json");
  const productInfo = await productsCard.json();
  
  productInfo ? localStorage.setItem("products" , JSON.stringify(productInfo)) : [];

  
}

dataLocal();


sliderLoop();


basketButtons.forEach(function(button) {
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