const questions = document.querySelectorAll('.question');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const endBtn = document.getElementById('end');

let currentQuestionIndex = 0;
let score = 0; // Initialize the score to 0

function showQuestion(questionNumber) {
  questions.forEach((question, index) => {
    if (index === questionNumber) {
      question.style.display = 'block';
    } else {
      question.style.display = 'none';
    }
  });
}

function updateScores() {
  // No need to update scores individually, just update the total score
  // Display logic for individual questions can remain the same
}

function allQuestionsAnswered() {
  // Check if all questions are answered (at least one option selected)
  return Array.from(questions[currentQuestionIndex].querySelectorAll('.answer')).some(answer => answer.checked);
}

function checkEndButtonVisibility() {
  // Show or hide End button based on whether all questions are answered
  endBtn.style.display = allQuestionsAnswered() ? 'block' : 'none';
}

prevBtn.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
    checkEndButtonVisibility(); // Check visibility of End button when navigating
  }
});

nextBtn.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
    checkEndButtonVisibility(); // Check visibility of End button when navigating
  }
});

endBtn.addEventListener('click', () => {
  // Calculate total score
  score = calculateScore();
  // Display result
  displayResult(score);
});

// Function to calculate total score
function calculateScore() {
  let totalScore = 0;
  questions.forEach((question, index) => {
    const selectedAnswer = question.querySelector('.answer:checked');
    const correctAnswerIndex = parseInt(question.dataset.correctAnswer);
    if (selectedAnswer && parseInt(selectedAnswer.value) === correctAnswerIndex) {
      totalScore++; // Increment total score for each correct answer
    }
  });
  return totalScore;
}

// Function to display result
function displayResult(score) {
  let result = '';
  if (score <= 0) {
    result = 'I expected more from you :(';
  } else if (score <= 1) {
    result = 'You\'re not completely terrible!';
  } else {
    result = 'You are an expert of Silly Laws!';
  }

  const resultDiv = document.createElement('div');
  resultDiv.textContent = `Total Score: ${score}. ${result}`;
  document.body.appendChild(resultDiv);

  // Hide the End button after displaying result
  endBtn.style.display = 'none';
}

// Initial display of first question
showQuestion(currentQuestionIndex);
checkEndButtonVisibility(); // Check visibility of End button initially