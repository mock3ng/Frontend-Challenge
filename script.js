const ui = new UI();
let countCorrect = 0;


ui.btnStart.addEventListener('click',function(event){
    
    ui.btnStart.classList.add('disable')
    ui.quizBox.classList.add("active");
    let question = quiz.qBring() ;
    ui.qCountShow(quiz.qIndex+1,quiz.questions.length);
    ui.qShow(question);
    
});

ui.nextButton.addEventListener('click',function(event){
    if(quiz.questions.length-1 != quiz.qIndex){
        quiz.qIndex +=1;
        ui.qShow(quiz.qBring());
        ui.qCountShow(quiz.qIndex+1,quiz.questions.length);
        ui.nextButton.classList.remove('show');
    }else{
        
        ui.scoreBox.classList.add('active');
        ui.quizBox.classList.remove("active");
        ui.showScore(quiz.questions.length,countCorrect);


    }
});



function optionSelected(option){
    let answer = option.querySelector("span b").textContent;
    let question = quiz.qBring();
    ui.nextButton.classList.add('show');


    if(question.checkAnswer(answer)){
        countCorrect += 1 ;
        option.classList.add('correct');
        console.log(option.classList);
        option.insertAdjacentHTML('beforeend',ui.correctIcon);
    }else{
        option.classList.add('incorrect')
        option.insertAdjacentHTML('beforeend',ui.incorrectIcon);
    }

    for(let i =0 ; i< ui.optionList.children.length; i++){
        ui.optionList.children[i].classList.add('disabled');
    }

}


