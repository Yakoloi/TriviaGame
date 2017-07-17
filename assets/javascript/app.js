$(document).ready(function() {

  var questions = [{
    question: "Carmen Sandiego fled the scene across the Atlantic Ocean taking shelter in a city nearly 2000 years old known for its fog and giant ferris wheel",
    possible: ["Dublin", "Toronto", "London", "Los Angeles"],
    answer: "London",
    image: "assets/images/london.jpg"
  }, {
    question: "The thief is on the run! she was spotted in a Scandinavian country with a blue and yellow flag which you might have seen at a popular home furnishing store",
    possible: ["Sweden", "Norway", "Denmark", "Finland"],
    answer: "Sweden",
    image: "assets/images/sweden.jpg"
  }, {
    question: "The sneaky criminal continues to elude us! A grainy photograph shows her crossing a bridge connecting the continents of Europe and Asia in a city once named after a Roman Emperor",
    possible: ["Moscow", "Istanbul", "Rome", "Athens"],
    answer: "Istanbul",
    image: "assets/images/istanbul.jpg"
  }, {
    question: "We're on her tail! Carmen Sandiego seems to be hiding in an African city that was once the crown jewel of several empires and which the the three mosques of Sankoré comprise its famous university",
    possible: ["Addis Adeba", "Cape Town", "Marrakesh", "Timbuktu"],
    answer: "Timbuktu",
    image: "assets/images/timbuktu.jpg"
  }, {
    question: "We've got another lead. The sticky fingered filcher left clues indicating she's near a waterfall at the edge of the Zambeze river the locals call 'The Smoke That Thunders'. ",
    possible: ["Yosemite Falls", "Iguazu Falls", "Angel Falls", "Victoria\xa0Falls"],
    answer: "Victoria\xa0Falls",
    image: "assets/images/vf.jpg"
  }, {
    question: "The double dealing diva has been spotting trekking her way atop the summit the world's highest mountain",
    possible: ["Rushmore", "Everest", "Himalaya", "Kilamanjaro"],
    answer: "Everest",
    image: "assets/images/everest.jpg"
  }];

  var cycle = 0;
  var answerButtons;
  var rightAnswers = 0;
  var wrongAnswers = 0;
  var number = 5;
  var intervalId = 0;
  var called = false;
  var gameOver = false;
  var pause = false;

  $("#picture").html('<img class="img-responsive text-center" id="splash" src="assets/images/splash.jpg"</img>')
  setTimeout(function() {
    briefing();
  }, 1000);

  function briefing() {
    $("#picture").html('<img class="img-responsive text-center" id="badge" src="assets/images/badge.png"</img>')
    $("#question").text("Gumshoe! The elusive world trotting criminal Carmen Sandiego has stolen the Statue of Liberty. Help us capture her and recover the beloved landmark by correctly guessing her location from the provided clues. \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Click on your badge to begin")
    $('#picture').click(function() {
      setup();
    });
  }

  //setup();

  function setup() {
    pause = false;
    number = 5
    $("#time").html("time" + number);
    clearInterval(intervalId);
    run();
    $("#title").text("Trivia Game");
    $("#picture").empty();
    $("#question").html(questions[cycle].question);
    answerButtons = "";
    for (var i = 0; i <= 3; i++) {
      answerButtons += '<button value=' + questions[cycle].possible[i] + ' type="button" class="btn">' + questions[cycle].possible[i] + '</button>' + "<br>";
      $("#answers").html(answerButtons);
    }
    $('button').click(function() {
      if ($(this).val() == questions[cycle].answer) {
        clearInterval(intervalId);
        $(".board").empty();
        $("#time").html("");
        rightAnswers++;
        display();
      } else {
        wrongAnswers++;
        cycle++;
        wrong();
      }
    });
  }

  function wrong() {
    clearInterval(intervalId);
    $(".board").empty();
    $("#time").html("");
    $("#picture").append('<img id="escape" src="assets/images/escape.gif"</img>')
    setTimeout(function() {
      pause = true;
      setup();
    }, 5000);
  }

  function display() {
    if (cycle > 6) {
      endGame();
    }
    $("#picture").append('<img src="' + questions[cycle].image + '"</img>');
    cycle++;
    setTimeout(function() {
      pause = true;
      setup();
    }, 1000);
  }

  function endGame() {
    gameOver = true;
    alert('endGame');
    if (rightAnswers > 1) {
      $("#picture").html('<img class="img-responsive text-center" id="badge" src="assets/images/badge.png"</img>');
      alert("yo winar");
    }
  }


  function run() {
    if (pause == false) {
      intervalId = setInterval(decrement, 1000);
    }
  }

  function decrement() {
    number--;
    $("#time").html("time" + number);
    if (number < 0) {
      stop();
      alert("Time Up!");
    }
  }

  function stop() {
    clearInterval(intervalId);
    cycle++;
    wrongAnswers++;
    setup();
  }




});
