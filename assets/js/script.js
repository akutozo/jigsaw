const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btn')
var timerEl = document.getElementById('countdown');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)


function startGame() {
 startButton.classList.add('hidden')
 shuffledQuestions = questions.sort(() => Math.random() - .5)
 currentQuestionIndex = 0
//  questionContainerElement.classList.remove('hidden')
 nextQuestion()
 countdown()
}

function nextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
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

function selectAnswer(e) {
      
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

function resetState() {
  clearStatusClass(document.body)
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

const questions = [
    {
        question: 'What is the answer?',
        answers: [
            { text: 'answer 1', correct: true},
            { text: 'answer 2', correct: false},
            { text: 'answer 3', correct: false},
            { text: 'answer 4', correct: false}
        ]
    }
] 


function countdown() {
    var timeLeft = 100;
    var timeInterval = setInterval(function() {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
  }











//Establish variables for the course to run efficiently.
//Provide a user interface that is fair and challenging.
//Reward users who successfully navigate these chellenges.
//Give only what is deserving to those who do not.




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