var models = [
    {
        name: "Chees Burger",
        source: "burger_slide/CHEES_BURGER.jpg"
    },
    {
        name: "Double Burger",
        source: "burger_slide/DOUBLE_BURGER.jpg"
    },
    {
        name: "Extra Double Burger",
        source: "burger_slide/EXTRA_DOUBLE_BURGER.jpg"
    }

];
var slideCount = models.length;
var index = 0;

var settings = {
    duration: "2000",
    random : true

};

interval(settings);
sliderAtt(index);


function sliderAtt(index) {
    document.querySelector(".burger-name").textContent = models[index].name;
    document.querySelector(".burger-img").setAttribute("src", models[index].source);
}
document.querySelector(".fa-chevron-left").addEventListener("click", function () {
    clearInterval(interval_duration);
    if (index == 0) {
        index = slideCount - 1;
    }
    else {
        index--;
    }
    sliderAtt(index);
});

document.querySelector(".fa-chevron-right").addEventListener("click", function () {
    clearInterval(interval_duration);
    if (index == slideCount - 1) {
        index = 0;
    }
    else {
        index++;
    }
    sliderAtt(index);
});

function interval(settings) {
    var prev;
    interval_duration = setInterval(function (){
        if(settings.random==true){
            do{
                index = Math.floor(Math.random() * slideCount);
            } while (prev == index)
            prev = index;
        }else{
            if(index==slideCount-1){
                index=0;
            }else{
                index++;
            }
        }
        sliderAtt(index);

    }, settings.duration);

}