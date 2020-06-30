const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btn')
var timerEl = document.getElementById('countdown');

let shuffledQuestions, currentQuestionIndex
let score = 0;
let time = 60;

startButton.addEventListener('click', startGame)



function startGame() {
 startButton.classList.add('hidden')
 shuffledQuestions = questions.sort(() => Math.random() - .5)
 currentQuestionIndex = 0
 nextQuestion()
 countdown()
}

function nextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  console.log(currentQuestionIndex)
  
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
}

function resetState() {
  clearStatusClass(document.body)
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
  
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  var correctumundo = correct;
  console.log(correctumundo)
  if (correctumundo == "true") {
    score++
    console.log("User Score is now: " + score)
  } else {
    time -= 10; 
    console.log("User has been penalized 10 seconds. Remaining time is " + time + " seconds")
  }
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    currentQuestionIndex++
    nextQuestion()
  } else {
    
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What does var mean?',
        answers: [
            { text: 'Variable', correct: true},
            { text: 'Varsity Football', correct: false},
            { text: 'Varis', correct: false},
            { text: 'Varginia', correct: false}
        ]
    },
    {
      question: 'What is the DOM?',
      answers: [
          { text: 'A Programming Interface for HTML Documents', correct: true},
          { text: 'A Programming Interface for CSS Documents', correct: false},
          { text: 'A Programming Interface for CSI Documents', correct: false},
          { text: 'A Programming Interface for CIA  Documents', correct: false}
      ]
  },
  {
    question: 'Can Javascript add and remove CSS classes?',
    answers: [
        { text: 'Yes', correct: true},
        { text: 'No', correct: false},
        { text: 'Maybe', correct: false},
        { text: 'So', correct: false}
    ]
  },
  {
    question: 'What is an array?',
    answers: [
        { text: 'An ordered collection of items', correct: true},
        { text: 'A collectors edition of items', correct: false},
        { text: 'A limited edition pre-order of items', correct: false},
        { text: 'Offler, the Crocodile God', correct: false}
    ]
  },
  {
    question: 'What does the C in CSS stand for?',
    answers: [
        { text: 'Cascading', correct: true},
        { text: 'Castlevania', correct: false},
        { text: 'Casein', correct: false},
        { text: 'Casper the Friendly Ghost', correct: false}
    ]
  },
  {
    question: 'What does the H in HTML stand for?',
    answers: [
        { text: 'Hypertext', correct: true},
        { text: 'Hyperfocus', correct: false},
        { text: 'Hypochondria', correct: false},
        { text: 'Hyundai', correct: false}
    ]
  }
]


function countdown() {
    var timeInterval = setInterval(function() {
      if (time > 1) {
        timerEl.textContent = time;
        time--;
      } else if (time === 1) {
        timerEl.textContent = time;
        time--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
  }

function displayMessage() {
  alert("You are out of time!");
  // highscore()
}

// function highscore() {

// }







// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score