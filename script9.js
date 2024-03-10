const menuItems = document.querySelectorAll('.menu-item');
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentQuestionIndex = 0;

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

// Function to handle previous button click
prevBtn.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
  }
});

// Function to handle next button click
nextBtn.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  }
});