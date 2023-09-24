var headercount = document.querySelectorAll(".header-card-count")

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