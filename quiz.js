var questions = [
  {

    question: 'Which famous rapper collaborated with Nike, and then Adidas, to create Yeezy?',
    answers: ['Jay-z', 'Drake', 'Kanye West', 'Future'],
    correctAnswer: 'Kanye West'
  },

  {

    question: 'How many shoes are in the Air Jordan Collection?',
    answers: ['10', '32', '13', '23'],
    correctAnswer: '32'
  },

  {
    question: 'What was the first ever Sneaker to be mass produced?',
    answers: ['Nike', 'Adidas', 'Asics', 'Keds'],
    correctAnswer: 'Keds'
  },

  {

    question: 'What was Nike formerly known as before all of its success?',
    answers: ['Fast Lane', 'Blue Ribbon Sports', 'Track Sports', 'Swoosh'],
    correctAnswer: 'Blue Ribbon Sports'
  },

  {

    question: 'In what year was the Nike Air Yeezy I released?',
    answers: ['2003', '2012', '2009', '2005'],
    correctAnswer: '2009'
  },

  {

    question: 'What was the nickname for Kanyes last nike shoe?',
    answers: ['Red October', 'October 1s', 'Yeezy 1', 'Boost 250'],
    correctAnswer: 'Red October'
  },

  {

    question: 'Which one of these is NOT a sneaker store?',
    answers: ['Kith', 'Complex', 'Champs', 'Bodega'],
    correctAnswer: 'Complex'
  },

  {
    question: 'Which rap group was responsible for putting Adidas SuperStars on the map?',
    answers: ['Wu-Tang', 'Run D.M.C', 'N.W.A', 'Bell Biv Bevoe'],
    correctAnswer: 'Run D.M.C'
  },

  {
    question: 'Which of these basketball players does NOT have a sneaker?',
    answers: ['LeBron James', 'James Harden', 'Kyrie Irving', 'Jr.Smith'],
    correctAnswer: 'Jr.Smith'
  },

  {
    question: 'Who was the first woman to design an Air Jordan?',
    answers: ['Aleali May', 'Rihanna', 'Serena Williams', 'Vashtie Kola'],
    correctAnswer: 'Vashtie Kola'
  },

];

var currentQuestionIndex = 0;
var score = 0;


function startGame() {
  $('.home').remove();
  $('#quizHeader').removeClass('hide');
  $('#quizContainer').removeClass('hide');
  loadQuestion();
}

function loadQuestion() {
  $('.questionContainer').html('');
  if (currentQuestionIndex < questions.length) {
    $('.questionContainer').html(


      `<h1>${questions[currentQuestionIndex].question}</h1>

<form id="answerform" class= "answerOptions">
      <div class="label-form">
    <label for="answer1" >
      <input type="radio" name="option" value="${questions[currentQuestionIndex].answers[0]}"  id="answer1" required> 
      <span class="textAnswer">${questions[currentQuestionIndex].answers[0]}</span>
      </label>
    <label for="answer2" >
      <input type="radio" name="option" value="${questions[currentQuestionIndex].answers[1]}" id="answer2" required> 
      <span class="textAnswer">${questions[currentQuestionIndex].answers[1]}</span>
    </label>

    <label for="answer3" >
      <input type="radio" name="option" value="${questions[currentQuestionIndex].answers[2]}" id="answer3" required> 
      <span class="textAnswer">${questions[currentQuestionIndex].answers[2]}</span>
    </label>

    <label for="answer4" >
      <input type="radio" name="option" value="${questions[currentQuestionIndex].answers[3]}" id="answer4" required> 
      <span class="textAnswer">${questions[currentQuestionIndex].answers[3]}</span>
    </label>    
      </div>
    <button type="submit" id="submitButton" >Submit</button>
</form>`);

validateAnswer();

  }
   else {
    runItBack();
    $('#resultsScreen').removeClass('hide');
  }
}


function incremantQuestionNum() {
  currentQuestionIndex = currentQuestionIndex + 1;
  $('.outOf').html(currentQuestionIndex);
}

function validateAnswer() {
  $('#answerform').on('submit', function (event) {
    event.preventDefault();
    let rightAns = questions[currentQuestionIndex].correctAnswer;
    let userAns = $('input[name=option]:checked').val();

    if (userAns === rightAns) {
      rightAnswer();
      nextQuestion();
    } else {
      wrongAnswer();
      nextQuestion();
    }
  });
}



function rightAnswer() {
  $('.questionContainer').html(

    `<div class="response">

    <div class="correctAns">

      <h3>Correct!</h3>

     </div>
  
      <button type=button id="nextButton">Next</button>
 </div>`
  );

  changeAndUpdateScore();
}

function wrongAnswer() {
  $('.questionContainer').html(

    `<div class="response">

  <div class="correctAns">

  <h3> Wrong</h3></div>

   <p>The correct answer was: <span>${questions[currentQuestionIndex].correctAnswer}</span></p>

  <button type=button id="nextButton">Next</button>

  </div>`
  );
}

function changeAndUpdateScore() {
  score++;
  $('.score').html(score);
};

function runItBack() {
  $('.endScreen').html(

    `<div class="endScreen"> 

        <div class="finalScoreContent">

       <h2>Your Final Score:<span class="finalScore">${score}</span></h2>
       </div>

       <button id="playAgainButton">Play Again?</button>

    </div>`

  )

  $('.endScreen').on('click', '#playAgainButton', function (event) {
    location.reload();
  })
}

function nextQuestion() {
  $('.response').on('click', '#nextButton', function (event) {
    incremantQuestionNum();
    loadQuestion();
  })
}

