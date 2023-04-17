const container = document.querySelector(".container");
const count=document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved');

getFromLocalStorage();
calculateTotal();

container.addEventListener("click",function(event){
    if(event.target.classList.contains('seat') && !event.target.classList.contains('reserved')){
        event.target.classList.toggle('selected');
        calculateTotal();
    }
});


select.addEventListener('change',function(event){
    calculateTotal();
});

function calculateTotal(){
    const selectSeat=container.querySelectorAll('.seat.selected');

    const selectedSeatsArr=[];
    const seatsArr=[];

    selectSeat.forEach(function(seat){
        selectedSeatsArr.push(seat);
    });

    seats.forEach(function(seat){
        seatsArr.push(seat);
    });


    let selectedSeatsIndexs=selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    });

    

    let selectedSeatCount= selectSeat.length;

    count.innerText= selectedSeatCount;
    amount.innerText= selectedSeatCount*select.value;

    saveToLocalStorage(selectedSeatsIndexs);

}

function getFromLocalStorage(){

    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats!=null && selectedSeats.length>0){
        seats.forEach(function(seat,index){
            if(selectedSeats.indexOf(index) >-1){
                seat.classList.add('selected');
            }
        });

    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex != null){
        select.selectedIndex=selectedMovieIndex;
    }


}

function saveToLocalStorage(index){
    localStorage.setItem('selectedSeats',JSON.stringify(index));
    localStorage.setItem('selectedMovieIndex',select.selectedIndex);

}

