let questions=[
    
    new Questions("Which is Javascript package management application?",{a:"Node.js",b:"Nuget",c:"Npm",d:"XCODE"},"c"),
    new Questions("Inside which HTML element do we put the JavaScript?",{a:"js",b:"scripting",c:"javascript",d:"script"},"d"),
    new Questions("What is the correct syntax for referring to an external script called ",{a:"script src=",b:"script href=",c:"script link=",d:"script name="},"a"),

];

function Questions(qContent , answerChoices , corretcAnswer){
    this.qContent = qContent ;
    this.answerChoices = answerChoices;
    this.corretcAnswer = corretcAnswer
}

Questions.prototype.checkAnswer = function(answer){
    return answer === this.corretcAnswer;
}

function Quiz(questions){
    this.questions = questions;
    this.qIndex = 0 ;

}

Quiz.prototype.qBring = function(){
    return this.questions[this.qIndex];
}

const quiz = new Quiz(questions);