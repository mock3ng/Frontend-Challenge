const word_el = document.querySelector("#word");
const popup = document.getElementById('popup-container');
const message_el = document.getElementById('succes-message');
const wrongLetters_el = document.getElementById('wrong-letters');
const items = document.querySelectorAll('.item');
const playAgain = document.querySelector('#play-again');

const correctLetters = [];
const wrongLetters = [];

let selectedWord=getRandomWord();

function getRandomWord(){
    const words = ["javascript","java","python"];

    return words[Math.floor(Math.random()*words.length)];
}

playAgain.addEventListener('click',function(event){
    correctLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord = getRandomWord();
    displayWord();
    updateWrongLetters();

    popup.style.display='none';
});



function displayWord(){

    word_el.innerHTML = `
         ${selectedWord.split('').map(letter => `
            <div class="letter">     
                ${correctLetters.includes(letter) ? letter : ''}
            </div>    
         `).join('')}
    `;

    const w = word_el.innerText.replace(/\n/g,'');
    if(w==selectedWord){
        popup.style.display = "flex";
        message_el.innerText = "CONGRATULATIONS YOU WIN";
    }

}

window.addEventListener('keydown',function(event){
    if(event.keyCode >= 65 && event.keyCode <= 90 ){
        const letter = event.key.toLowerCase() ;
        ;
        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayWord();
            }else{

            }
        }else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                updateWrongLetters();
            }

        }
    }
});

function updateWrongLetters(){
    wrongLetters_el.innerHTML=`
        ${wrongLetters.length>0 ? '<h3>Wrong Letters</h3>':''}
        ${wrongLetters.map(letter=> `<span>${letter}</span>`)}
         
    `;

    items.forEach((item,index)=>{
        const errorCount = wrongLetters.length

        if(index<errorCount){
            item.style.display='block';

        }else{
            item.style.display = 'none'
        }
    })
    if(wrongLetters.length === items.length){
        popup.style.display = "flex";
        message_el.innerText = "GAME OVER , MAN HANGED";

    }

}

displayWord();
