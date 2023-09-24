var shopTable = document.querySelector(".card-wrapper");
var freeShip = document.querySelector("#free-shipping");
var subtotal = document.querySelector(".sub-total");
var cardtotal = document.querySelectorAll("#cardtotal");
var speedShip = document.querySelectorAll(".sub-total-cargo")
var progressBar = document.querySelector(".progress");
var headerCard = document.querySelectorAll(".header-card-count")

var totalcost = 0
shipSt = false
var bucketCount = 0


speedShip[0].addEventListener('change', function speedShipper() {
    if (shipSt == false){
        cardUpdate(true)
    }else{
        cardUpdate(false)
    }
})

function cardUpdate (stiu) {

    totalcost = 0
    bucketCount = 0

    //productsInStorage[productId].img.singleImage image
    //selectedProduct = productsInStorage[productId].name name
    //selectedProduct = productsInStorage[productId].price.oldPrice price int

    var hmtlContent = ""
    
    for (item of JSON.parse(localStorage.getItem("bucketitems"))){
        
        totalcost +=item.price*item.count
        bucketCount +=item.count
        hmtlContent += `<tbody class="card-wrapper" >
                    <td></td>
                    <td class="card-image">
                        <img src="${item.img}" alt="">
                        <i class="bi bi-x delete-cart"id=" ${item.id}"></i>
                    </td>
                    <td>${item.name}</td>
                    <td>$${item.price}</td>
                    <td class="product-quantity">${item.count}</td>
                    <td class="product-subtotal">$${item.price*item.count}</td>
                </tbody> `
                ;
    }

    shopTable.innerHTML=hmtlContent

    if(totalcost <= 600){
        freeShip.textContent = "$"+(600-totalcost)
    }else{
        freeShip.textContent = 0
    }
    if(totalcost!=0){
        var yeniGenislik = 100/(600/totalcost);
    }else{
        var yeniGenislik =5;
    }
    
    if(yeniGenislik<=100){
        progressBar.style.width =(yeniGenislik-5+"%").toString();
    }else{
        progressBar.style.width = "95%"
    }

  

    subtotal.textContent = "$"+totalcost
    cardtotal[0].textContent = "$"+(totalcost)

    if (stiu == true){
        cardtotal[0].textContent = "$"+(totalcost+15)
        shipSt=true
    }else{
        cardtotal[0].textContent = "$"+(totalcost)
        shipSt=false
    }
    
    setupDeleteButton()
    
    headerCard.forEach(function(count){
        count.textContent = bucketCount; 
       
        

    })
    

    
};
cardUpdate()



function setupDeleteButton(){
    var deleteButton = document.querySelectorAll(".bi-x")

    deleteButton.forEach(function(button){
        button.addEventListener("click" , function(){
            
            var bucketItems = JSON.parse(localStorage.getItem("bucketitems"));
            var indexToDelete = 0
    
            for (var i = 0; i < bucketItems.length; i++) {
                if (bucketItems[i].id == button.id) {
                    indexToDelete = i;
                    
                    bucketCount -=bucketItems[i].count
                    
                    break;
                }
            }
            bucketItems.splice(indexToDelete, 1);
            
            localStorage.setItem("bucketitems", JSON.stringify(bucketItems));
            cardUpdate()
            
            
        })
        
    
    })
    
}





