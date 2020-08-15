$(document).ready(function() {
var startButton = document.getElementById("startBtn");
var questionBox = document.getElementById("question");
var answerBtns = document.getElementById("answerBtns");
var correct = 0;
//Question Bank
var question1 = {
    question: "Is HTML the bee knees?",
    answers: ["yes", "no", "maybe", "so"],
    correctAnswer: "yes"
};
var question2 = {
    question: "Is CSS the bomb.com",
    answers: ["no", "yes", "maybe", "what?"],
    correctAnswer: "yes"
};
var question3 = {
    question: "Is javascript some sort of coffee calligraphy?",
    answers: ["maybe", "no", "many people say so", "let me phone a friend"],
    correctAnswer: "no"
};
var question4 = {
    question: "Does react, react like my ex?",
    answers: ["sho nuff", "fingers crossed", "*PTSD kicks in*", "oh, hell nah"],
    correctAnswer: "*PTSD kicks in*"
};
var question5 = {
    question: "Am I a holla back girl",
    answers: ["yes", "I ain't", "maybe", "c#"],
    correctAnswer: "I ain't"
};
var question6 = {
    question: "Is this question #6?",
    answers: ["what was the question?", "no", "yes", "si, pero no hablo ingles."],
    correctAnswer: "yes"
};
var question7 = {
    question: "Is bootstrap groovy to the max?",
    answers: ["it ain't no disco", "you betcha!", "boots irritate my bunion.", "It's totally square man."],
    correctAnswer: "you betcha!"
};
var question8 = {
    question: "What does the H stand for in HTML?",
    answers: ["Hello", "Hilda", "Hyper", "Halitosis"],
    correctAnswer: "Hyper"
};
var question9 = {
    question: "Should you buy a second screen for this course?",
    answers: ["with what money?", "no", "can I just steal one from work?", "only if you like making you life easier"],
    correctAnswer: "with what money?"
};
var question10 = {
    question: "Which is a programming language?",
    answers: ["FCC", "C@", "HEB", "Javascript"],
    correctAnswer: "Javascript"
};

function startQuiz() {
    $("#startBtn").addClass("hide");
    
    presentQuestion (questionBank)
};  

function presentQuestion(questionBank) {
    questionBox.innerText = question.question
};

function answerChoice() {

};

function countDwnTimer() {

}

$("#startBtn").on("click", startQuiz);

});