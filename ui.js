function UI() {
    this.questionText = document.querySelector('.question_text');
    this.optionList = document.querySelector('.option_list');
    this.correctIcon = `<div class="icon"><i class="fas fa-check"></i></div>`;
    this.incorrectIcon = `<div class="icon"><i class="fas fa-times"></i></div>`;
    this.nextButton = document.querySelector('.btn-next');
    this.scoreBox = document.querySelector('.score_box');
    this.btnStart= document.querySelector('.btn-start');
    this.quizBox = document.querySelector('.quiz_box');
    this.scoreText= document.querySelector('.score_text');
}

UI.prototype.qShow = function(question){
    let questionShow = `<span>${question.qContent}</span>`;
    let options = ``;

    for(let answer in question.answerChoices){
        options+= 
            `
                <div class="option">
                    <span><b>${answer}</b> ${question.answerChoices[answer]}</span>
                    <div class="icon"><i class="fas"></i></div>
                </div>
            `;
        
    }
    this.optionList.innerHTML= options;
    this.questionText.innerHTML = questionShow;

    const option = this.optionList.querySelectorAll('.option');
    
    
    for(let opt of option){
        opt.setAttribute("onclick", "optionSelected(this)");
    }


}

UI.prototype.qCountShow = function(currQ,totalQ){
    let tag =`<span class="badge bg-warning">${currQ} / ${totalQ}</span>`;
    document.querySelector('.question-index').innerHTML=tag;
}

UI.prototype.showScore = function(totalQ,countCorrect){
    let tag = `
        You Have ${countCorrect} Correct Answer in ${totalQ} Question
    `;

    this.scoreText.innerHTML=tag;
}