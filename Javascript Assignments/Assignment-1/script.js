let player1 = {
    name: 'Player 1',
    savedScore: 0,
    currentScore: 0,
    isActive: true
};

let player2 = {
    name: 'Player 2',
    savedScore: 0,
    currentScore: 0,
    isActive: false
};

let gameStarted = false;
const winningScore = 100;
let currentPlayerEditing = null;

const playerSetupSection = document.querySelector('.player-setup');
const gameBoard = document.querySelector('.game-board');
const winnerAnnouncement = document.getElementById('winner-announcement');

const player1NameInput = document.getElementById('player1-name');
const player2NameInput = document.getElementById('player2-name');
const player1NameDisplay = document.querySelector('.player1 .player-name');
const player2NameDisplay = document.querySelector('.player2 .player-name');

const player1SavedScoreElement = document.getElementById('player1-saved-score');
const player1CurrentScoreElement = document.getElementById('player1-current-score');
const player2SavedScoreElement = document.getElementById('player2-saved-score');
const player2CurrentScoreElement = document.getElementById('player2-current-score');

const player1Section = document.querySelector('.player1');
const player2Section = document.querySelector('.player2');
const diceElement = document.getElementById('dice');
const diceDots = Array.from(document.querySelectorAll('.dice-dot'));

const startGameButton = document.getElementById('start-game');
const rollDiceButton = document.getElementById('roll-dice');
const saveScoreButton = document.getElementById('save-score');
const resetGameButton = document.getElementById('reset-game');
const playAgainButton = document.getElementById('play-again');
const winnerNameElement = document.getElementById('winner-name');
const nameEditModal = document.getElementById('name-edit-modal');
const editNameInput = document.getElementById('edit-name-input');
const saveNameBtn = document.getElementById('save-name-btn');
const cancelNameBtn = document.getElementById('cancel-name-btn');
const editNameBtns = document.querySelectorAll('.edit-name-btn');


startGameButton.addEventListener('click', startGame);
rollDiceButton.addEventListener('click', rollDice);
saveScoreButton.addEventListener('click', saveScore);
resetGameButton.addEventListener('click', resetGame);
playAgainButton.addEventListener('click', resetGame);

editNameBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const playerId = this.getAttribute('data-player');
        openNameEditModal(playerId);
    });
});

saveNameBtn.addEventListener('click', savePlayerName);
cancelNameBtn.addEventListener('click', closeNameEditModal);

document.addEventListener('DOMContentLoaded', function () {
    updateDiceDisplay(6);
});

function startGame() {
    player1.name = player1NameInput.value || 'Player 1';
    player2.name = player2NameInput.value || 'Player 2';

    player1NameDisplay.textContent = player1.name;
    player2NameDisplay.textContent = player2.name;

    playerSetupSection.classList.add('hidden');
    gameBoard.classList.remove('hidden');

    gameStarted = true;

    player1.isActive = true;
    player2.isActive = false;
    updateActivePlayerDisplay();
}

function rollDice() {
    if (!gameStarted) return;

    diceElement.classList.add('rolling');

    rollDiceButton.disabled = true;
    saveScoreButton.disabled = true;

    setTimeout(() => {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        updateDiceDisplay(diceValue);

        diceElement.classList.remove('rolling');

        let activePlayer = player1.isActive ? player1 : player2;

        if (diceValue === 1) {
            activePlayer.currentScore = 0;
            switchActivePlayer();
        } else {
            activePlayer.currentScore += diceValue;
        }

        updateScoreDisplay();

        rollDiceButton.disabled = false;
        saveScoreButton.disabled = false;
    }, 500);
}

function saveScore() {
    if (!gameStarted) return;

    const activePlayer = player1.isActive ? player1 : player2;

    activePlayer.savedScore += activePlayer.currentScore;
    activePlayer.currentScore = 0;

    updateScoreDisplay();

    if (activePlayer.savedScore >= winningScore) {
        announceWinner(activePlayer);
    } else {
        switchActivePlayer();
    }
}

function updateDiceDisplay(value) {
    diceDots.forEach(dot => dot.style.visibility = 'hidden');

    switch (value) {
        case 1:
            document.getElementById('dot-5').style.visibility = 'visible';
            break;
        case 2:
            document.getElementById('dot-1').style.visibility = 'visible';
            document.getElementById('dot-9').style.visibility = 'visible';
            break;
        case 3:
            document.getElementById('dot-1').style.visibility = 'visible';
            document.getElementById('dot-5').style.visibility = 'visible';
            document.getElementById('dot-9').style.visibility = 'visible';
            break;
        case 4:
            document.getElementById('dot-1').style.visibility = 'visible';
            document.getElementById('dot-3').style.visibility = 'visible';
            document.getElementById('dot-7').style.visibility = 'visible';
            document.getElementById('dot-9').style.visibility = 'visible';
            break;
        case 5:
            document.getElementById('dot-1').style.visibility = 'visible';
            document.getElementById('dot-3').style.visibility = 'visible';
            document.getElementById('dot-5').style.visibility = 'visible';
            document.getElementById('dot-7').style.visibility = 'visible';
            document.getElementById('dot-9').style.visibility = 'visible';
            break;
        case 6:
            document.getElementById('dot-1').style.visibility = 'visible';
            document.getElementById('dot-3').style.visibility = 'visible';
            document.getElementById('dot-4').style.visibility = 'visible';
            document.getElementById('dot-6').style.visibility = 'visible';
            document.getElementById('dot-7').style.visibility = 'visible';
            document.getElementById('dot-9').style.visibility = 'visible';
            break;
    }
}


function switchActivePlayer() {
    player1.isActive = !player1.isActive;
    player2.isActive = !player2.isActive;
    updateActivePlayerDisplay();
}

function updateActivePlayerDisplay() {
    if (player1.isActive) {
        player1Section.classList.add('active');
        player2Section.classList.remove('active');
    } else {
        player1Section.classList.remove('active');
        player2Section.classList.add('active');
    }
}

function updateScoreDisplay() {
    player1SavedScoreElement.textContent = player1.savedScore;
    player1CurrentScoreElement.textContent = player1.currentScore;
    player2SavedScoreElement.textContent = player2.savedScore;
    player2CurrentScoreElement.textContent = player2.currentScore;
}

function announceWinner(player) {
    winnerNameElement.textContent = `${player.name} wins with ${player.savedScore} points!`;
    winnerAnnouncement.classList.remove('hidden');
    gameStarted = false;
}

function resetGame() {
    player1.savedScore = 0;
    player1.currentScore = 0;
    player1.isActive = true;

    player2.savedScore = 0;
    player2.currentScore = 0;
    player2.isActive = false;

    updateScoreDisplay();
    updateActivePlayerDisplay();

    winnerAnnouncement.classList.add('hidden');

    updateDiceDisplay(6);

    gameBoard.classList.add('hidden');
    playerSetupSection.classList.remove('hidden');

    gameStarted = false;
}

function openNameEditModal(playerId) {
    currentPlayerEditing = playerId;
    const playerName = playerId === '1' ? player1.name : player2.name;
    editNameInput.value = playerName;
    nameEditModal.classList.remove('hidden');
}

function closeNameEditModal() {
    nameEditModal.classList.add('hidden');
    currentPlayerEditing = null;
}

function savePlayerName() {
    const newName = editNameInput.value.trim() ||
        (currentPlayerEditing === '1' ? 'Player 1' : 'Player 2');

    if (currentPlayerEditing === '1') {
        player1.name = newName;
        player1NameDisplay.textContent = newName;
        if (!gameStarted) {
            player1NameInput.value = newName;
        }
    } else {
        player2.name = newName;
        player2NameDisplay.textContent = newName;
        if (!gameStarted) {
            player2NameInput.value = newName;
        }
    }

    closeNameEditModal();
}
