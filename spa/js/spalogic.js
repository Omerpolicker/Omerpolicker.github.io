const NO_ANSWER = 0;
let selectedAnswers = [];
let selectedQuestion;

document.body.onload = function () {
    document.getElementById("start-button").onclick = startQuiz;
}

function startQuiz() {
    initState();
    initRendering();
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("questions").style.display = "block";
    document.getElementById("prev").style.display = "inline";
    document.getElementById("next").style.display = "inline";
    showQuestion(0);
    document.getElementById("prev").onclick = prev;
    document.getElementById("next").onclick = next;
}

function initState() {
    selectedAnswers = Array(questions.length).fill(1); // Initially select the first answer
    selectedQuestion = 0;
}

function initRendering() {
    document.getElementById("questions").innerHTML = ""; // Clear any existing content
    for (let i = 0; i < questions.length; i++) {
        const current = questions[i];
        let questionHTML = `
            <div id="question${i}" class="question${i} question">
                <div id="questionte${i}" class="qtext${i} qtext"> ${current[0]} </div>
                <div id="qimage${i}" class="qimage${i} qimage"><img src="${current[1]}"></div>
                <div id="answers${i}" class="divanswers${i} divanswers">
        `;
        for (let j = 2; j < current.length; j++) {
            const realJ = j - 1;
            questionHTML += `
                <div id="answer${i}_${realJ}" onclick="choose(${i},${realJ})" class="answers${i} answers"> ${realJ}: ${current[j]} </div>
            `;
        }
        questionHTML += `
                </div>
            </div>
        `;
        document.getElementById("questions").innerHTML += questionHTML;
    }
    hideAll();
}

function prev() {
    if (selectedQuestion > 0) {
        hideQuestion(selectedQuestion);
        selectedQuestion--;
        showQuestion(selectedQuestion);
    }
}

function next() {
    hideQuestion(selectedQuestion);
    if (selectedQuestion < questions.length - 1) {
        selectedQuestion++;
        showQuestion(selectedQuestion);
    } else {
        endQuestions();
    }
}

function endQuestions() {
    hideAll();
    document.getElementById("prev").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("results").style.display = "block";
    let total = 0;
    for (let i of selectedAnswers) {
        total += i;
    }
    document.getElementById("results").innerHTML = "Your score is: " + total + "!";
}

function hideAll() {
    for (let i = 0; i < questions.length; i++) {
        document.getElementById("question" + i).style.display = "none";
    }
}

function hideQuestion(x) {
    document.getElementById("question" + x).style.display = "none";
}

function showQuestion(x) {
    document.getElementById("question" + x).style.display = "block";
    mark(x, 1); // Mark the initially selected answer
}

function choose(q, a) {
    console.log("choose(" + q + ", " + a + "), selectedAnswer: " + selectedAnswers[q]);
    if (a != selectedAnswers[q]) {
        if (selectedAnswers[q] != NO_ANSWER) {
            unmark(q, selectedAnswers[q]);
        }
        mark(q, a);
        selectedAnswers[q] = a;
    }
}

function mark(q, a) {
    console.log("mark(" + q + ", " + a + ")");
    document.getElementById("answer" + q + "_" + a).className = "marked";
}

function unmark(q, a) {
    console.log("unmark(" + q + ", " + a + ")");
    document.getElementById("answer" + q + "_" + a).className = "answers" + q + " answers";
}
