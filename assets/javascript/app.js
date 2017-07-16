$(document).ready(function() {

var questions = [{
question: "What is A",
possible: ["A", "B", "C", "D"],
answer: "A"
}, {
  question: "What is B",
  possible: ["A", "B", "C", "D"],
  answer: "A"
}];

console.log("questions" + questions[0].question)


var questions = [
  {question: "What is A",
  possible: ["A", "B", "C", "D"],
  answer: "A" },
];
console.log("questions" + questions.possible)
  var question1 = {
    question: "What is A?",
    possible: ["A", "B", "C", "D"],
    answer: "A",
  };
  console.log(question1.possible)

  var question2 = {
    question: "What is B?",
    possible: ["A", "B", "C", "D"],
    answer: "B",
  };


  var answerButtons;
  var liveQuestion;

function setup() {
  $("#question").html(question1.question)
  answerButtons = "";
  for (var i = 0; i <= 3; i++) {
    answerButtons += '<button value=' + question1.possible[i] + ' type="button" class="btn">' + question1.possible[i] + '</button>' + "<br>";
    $("#answers").html(answerButtons)
  }
}

setup();


  $('button').click(function() {
    if ($(this).val() === question1.answer) {
      alert("correct")
    } else {
      alert("incorrect")
    }

  });




});
