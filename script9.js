const menuItems = document.querySelectorAll('.menu-item');
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const endBtn = document.createElement('button');
endBtn.textContent = 'End';
endBtn.style.display = 'none'; // Initially hide the End button
document.querySelector('.navigation').appendChild(endBtn);

let currentQuestionIndex = 0;
let scores = [0, 0, 0, 0, 0]; // Initialize scores for each question

// Function to show only the active question
function showQuestion(index) {
  questions.forEach((question, idx) => {
    if (idx === index) {
      question.classList.add('active');
    } else {
      question.classList.remove('active');
    }
  });
}

// Function to handle menu item clicks
menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener('click', () => {
    currentQuestionIndex = index;
    showQuestion(index);
  });
});

// Function to handle answer selection
answers.forEach((answer, index) => {
  answer.addEventListener('click', () => {
    scores[currentQuestionIndex] = index + 1; // Store the selected answer (index + 1)
    updateScores(); // Update scores display
  });
});

// Function to update scores display
function updateScores() {
  answers.forEach((answer, index) => {
    answer.style.backgroundColor = ''; // Reset background color for all answers
    if (index === scores[currentQuestionIndex] - 1) {
      answer.style.backgroundColor = 'lightgreen'; // Highlight selected answer
    }
  });
}

// Function to handle previous button click
prevBtn.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
    updateScores(); // Update scores display when navigating
  }
});

// Function to handle next button click
nextBtn.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
    updateScores(); // Update scores display when navigating
  }
});

// Function to handle End button click
endBtn.addEventListener('click', () => {
  let totalScore = scores.reduce((acc, score) => acc + score, 0); // Calculate total score
  let result = '';

  // Determine result based on total score
  if (totalScore <= 5) {
    result = 'You need to brush up on your knowledge!';
  } else if (totalScore <= 10) {
    result = 'Not bad, but you can do better!';
  } else {
    result = 'Congratulations! You are a Silly Laws expert!';
  }

  // Display result
  const resultDiv = document.createElement('div');
  resultDiv.textContent = `Total Score: ${totalScore}. ${result}`;
  document.body.appendChild(resultDiv);

  // Hide the End button
  endBtn.style.display = 'none';
});

// Check if all questions are answered
function allQuestionsAnswered() {
  return scores.every(score => score > 0);
}

// Check if any answer is selected and show the End button accordingly
function checkEndButtonVisibility() {
  if (allQuestionsAnswered()) {
    endBtn.style.display = 'block';
  } else {
    endBtn.style.display = 'none';
  }
}

// Update End button visibility when answer is selected
answers.forEach(answer => {
  answer.addEventListener('click', checkEndButtonVisibility);
});