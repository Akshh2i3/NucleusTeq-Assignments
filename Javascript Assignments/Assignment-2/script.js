const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const categorySelect = document.getElementById('category-select');
const difficultySelect = document.getElementById('difficulty-select');
const startBtn = document.getElementById('start-btn');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const scoreEl = document.getElementById('score');
const finalScoreEl = document.getElementById('final-score');
const playAgainBtn = document.getElementById('play-again-btn');
const timerText = document.getElementById('timer-text');
const timerProgress = document.getElementById('timer-progress');

let currentQuestions = [], currentQuestionIndex = 0, score = 0;
let timer, timeLeft = 15;
let canAnswer = true;
const TOTAL_QUESTIONS = 10;
const CIRCLE_CIRCUMFERENCE = 125.6;

async function fetchCategories() {
    try {
        const response = await fetch('https://opentdb.com/api_category.php');
        const data = await response.json();

        data.trivia_categories.forEach(category => {
            if (!category.name.includes('Entertainment')) {
                const option = document.createElement('option');
                option.value = category.id;
                option.textContent = category.name;
                categorySelect.appendChild(option);
            }
        });
    } catch (error) {
        console.error('Error fetching categories:', error);
        alert('Failed to load categories. Please refresh the page.');
    }
}

async function fetchQuestions(category, difficulty) {
    try {
        const response = await fetch(`https://opentdb.com/api.php?amount=${TOTAL_QUESTIONS}&category=${category}&difficulty=${difficulty}&type=multiple`);
        const data = await response.json();

        if (data.response_code === 0) {
            console.log(data)
            return data.results;
        } else {
            throw new Error('Failed to fetch questions, try changing category or difficulty');
        }
    } catch (error) {
        console.error('Error fetching questions:', error);
        alert('Failed to load questions. Please try again.');
        return [];
    }
}

async function startGame() {
    const category = categorySelect.value;
    const difficulty = difficultySelect.value;

    if (!category || !difficulty) {
        alert('Please select both a category and difficulty');
        return;
    }

    currentQuestions = await fetchQuestions(category, difficulty);

    if (currentQuestions.length === 0) {
        return;
    }

    currentQuestionIndex = 0;
    score = 0;
    scoreEl.textContent = score;

    startScreen.classList.add('hide');
    gameScreen.classList.remove('hide');

    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endGame();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    questionEl.innerHTML = `Q.${currentQuestionIndex + 1}) ` + question.question;

    optionsEl.innerHTML = '';

    const answers = [...question.incorrect_answers, question.correct_answer];
    shuffleArray(answers);

    answers.forEach(answer => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.innerHTML = answer;
        optionDiv.addEventListener('click', () => selectAnswer(optionDiv, answer, question.correct_answer));
        optionsEl.appendChild(optionDiv);
    });

    resetTimer();
    startTimer();
    canAnswer = true;
}

function startTimer() {
    timeLeft = 15;
    timerText.textContent = timeLeft;
    timerProgress.style.stroke = "#4CAF50";
    timerProgress.style.strokeDashoffset = "0";

    let progressInterval = setInterval(() => {
        const progressOffset = CIRCLE_CIRCUMFERENCE - (timeLeft / 15 * CIRCLE_CIRCUMFERENCE);
        timerProgress.style.strokeDashoffset = progressOffset;

        if (timeLeft <= 5) {
            timerProgress.style.stroke = "#F44336";
        }
    }, 100);

    timer = setInterval(() => {
        timeLeft--;
        timerText.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            clearInterval(progressInterval);
            timeOut();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
}

function timeOut() {
    if (!canAnswer) return;
    canAnswer = false;

    const options = optionsEl.querySelectorAll('.option');
    const correctAnswer = currentQuestions[currentQuestionIndex].correct_answer;

    options.forEach(option => {
        if (option.innerHTML === correctAnswer) {
            option.classList.add('correct');
        }
    });

    setTimeout(nextQuestion, 2000);
}

function selectAnswer(selectedOption, selectedAnswer, correctAnswer) {
    if (!canAnswer) return;
    canAnswer = false;
    resetTimer();

    if (selectedAnswer === correctAnswer) {
        selectedOption.classList.add('correct');
        score++;
        scoreEl.textContent = score;
    } else {
        selectedOption.classList.add('incorrect');
        const options = optionsEl.querySelectorAll('.option');
        options.forEach(option => {
            if (option.innerHTML === correctAnswer) {
                option.classList.add('correct');
            }
        });
    }

    setTimeout(nextQuestion, 2000);
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

function endGame() {
    gameScreen.classList.add('hide');
    endScreen.classList.remove('hide');
    finalScoreEl.textContent = score;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

startBtn.addEventListener('click', startGame);
playAgainBtn.addEventListener('click', () => {
    endScreen.classList.add('hide');
    startScreen.classList.remove('hide');
});

fetchCategories();