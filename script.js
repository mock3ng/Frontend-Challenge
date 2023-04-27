const api_key = "18e235ff3586ea4bf921ce99";
const url = "https://v6.exchangerate-api.com/v6/" + api_key;


const currencyOne = document.querySelector('#currency-one');
const currencyTwo = document.querySelector('#currency-two');
const listOne = document.querySelector('#list_one');
const listTwo = document.querySelector('#list_two');
const amount = document.querySelector('#amount');
const calculateButton = document.querySelector('#calculate');
const result = document.querySelector('#result');


const getExchane = (main , tochange ,amount) =>{
    fetch(url+"/latest/"+main)
        .then(response => response.json())
        .then(data => {
            let tag = ` <div class="card border-primary">
            <div class="card-body text-center" style="font-size: 30px;">${amount} ${main} = ${data.conversion_rates[tochange]*amount} ${tochange}</div>
            </div>`;
             result.innerHTML = tag;
            });

}

fetch(url+"/codes")
    .then(responpe => responpe.json())
    .then((data) => {
        const items = data.supported_codes;
        let options ;
        for(let item of items){
            options += `<option value="${item[0]}">${item[1]}</option>`;
        }
        listOne.innerHTML = options;
        listTwo.innerHTML = options;

    });

calculateButton.addEventListener('click',function(){

    const mainCurrency = currencyOne.value ;
    const toCurrency = currencyTwo.value ;
    const amountCurrency = amount.value ;

    getExchane(mainCurrency,toCurrency,amountCurrency);

})