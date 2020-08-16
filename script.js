$(document).ready(function() {
var startButton = document.getElementById("startBtn");
var questionBox = document.getElementById("question");
var answerBtns = document.getElementById("answerBtns");
var minDisplay = document.getElementById("minutes");
var secDisplay = document.getElementById("seconds");
var correct = 0;
var currQstIdx = 0;
var totalSeconds = 0;
var interval;
//Question Bank
var questionBank = [
{    
    question: "Is HTML the bee knees?",
    answers: ["yes", "no", "maybe", "so"],
    correctAnswer: "yes"
},
{
    question: "Is CSS the bomb.com",
    answers: ["no", "yes", "maybe", "what?"],
    correctAnswer: "yes"
},
{
    question: "Is javascript some sort of coffee calligraphy?",
    answers: ["maybe", "no", "many people say so", "let me phone a friend"],
    correctAnswer: "no"
},
{
    question: "Does react, react like my ex?",
    answers: ["sho nuff", "fingers crossed", "*PTSD kicks in*", "oh, hell nah"],
    correctAnswer: "*PTSD kicks in*"
},
{
    question: "Am I a holla back girl",
    answers: ["yes", "I ain't", "maybe", "c#"],
    correctAnswer: "I ain't"
},
{
    question: "Is this question #6?",
    answers: ["what was the question?", "no", "yes", "si, pero no hablo ingles."],
    correctAnswer: "yes"
},
{
    question: "Is bootstrap groovy to the max?",
    answers: ["it ain't no disco", "you betcha!", "boots irritate my bunion.", "It's totally square man."],
    correctAnswer: "you betcha!"
},
{
    question: "What does the H stand for in HTML?",
    answers: ["Hello", "Hilda", "Hyper", "Halitosis"],
    correctAnswer: "Hyper"
},
{
    question: "Should you buy a second screen for this course?",
    answers: ["with what money?", "no", "can I just steal one from work?", "only if you like making you life easier"],
    correctAnswer: "with what money?"
},
{
    question: "Which is a programming language?",
    answers: ["FCC", "C@", "HEB", "Javascript"],
    correctAnswer: "Javascript"
}]

//Start button function
function startQuiz() {
    $("#startBtn").addClass("hide")
    presentQuestion ();
    startTimer ();
    answerChoice ();
};  
// render question function
    function presentQuestion() {
    for (var i = 0; i < questionBank.length; i++) {
        $("#question").text(questionBank[i].question);
    };
};

// select answer function
function answerChoice() {
    $(".buttons").on("click", function() {});
    if ($(this).text()=== questionBank[currQstIdx].correctAnswer) { 
    currentQstIdx++ 
    };
};

function startTimer() {
    // Write code to start the timer here
    totalSeconds = 300
    setInterval(function() {
      totalSeconds--
      var seconds = totalSeconds % 60
      var minutes = totalSeconds / 60
      secDisplay.textContent = Math.floor(seconds) + "secs remaining";
      minDisplay.textContent = Math.floor(minutes) + "m";
      if (totalSeconds === 0) {
        $("#timerBox").addClass("hide")
        alert("You are out of time!");
      }
    }, 1000)
   
  };

$("#startBtn").on("click", startQuiz);

});