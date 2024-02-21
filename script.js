const continueButton = document.getElementById('continue-button');
const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const questionText = document.getElementById('question');
const answerText = document.getElementById('answer');
const audio = document.getElementById('audio');
const toggleButton = document.getElementById('toggle-button');

function askForPermissionAndPlayAudio() {
    // Display a pop-up asking for permission
    if (confirm("Do you want to play the audio?")) {
        // User clicked 'Yes', play the audio
        var audio = document.getElementById('audio');
        audio.play();
    }
}


function toggleMute() {
    audio.muted = !audio.muted;
}

let isMoved = false;

let questionIndex = 0;
const questions = [
    'SEXY KA??',
    'MAGANDA KA?',
    'MAGANDA KA?',
    'MATALINO KA?',
    'MATALINO KA?',
    'KAMAHAL MAHAL KABA?',
    'KAMAHAL MAHAL KABA?',
    'TOYOIN KABA? 😆',
    'TOYOIN KABA? 😆',
    'LOVE MOKO?',
    'LOVE MOKO?'
];
let answers = [];

function changeQuestion(answer) {
    if (questionIndex < questions.length - 1) {
        questionIndex++;
        questionText.textContent = questions[questionIndex];
        answers.push(answer);
    } else if (questionIndex === questions.length - 1) {
        answers.push(answer);
        displayAnswers();
    }
}

function displayAnswers() {
    questionText.style.display = 'none';
    answerText.textContent = 'Mahal wag mung masyadong binababa sarili mo!! sexy ka! maganda ka! matalino ka! at higit sa lahat kamahal mahal ka Marj. Hindi man tayo nag kakaroon ng enough time para sa isat isa, hindi man salubong ang oras nating dalawa, pero isa lang ang alam ko mahal, eh yung parehas tayong mahal ang isat isa. Sorry dahil wala akong masyadong time na naibibigay sayo mahal pero ginagawan ko ng paraan para maging mabuting asawa, jowa, at kaibigan mo, Wag na wag mung iisipin na madali kang palitan dahil ikaw at ikaw parin ang pipiliin ko.. I love you mahal!! ❤️❤️❤️';
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
    toggleButton.style.display = 'none';
    const answerContainer = document.getElementById('answer-container');
    answerContainer.classList.add('open');
    createConfetti(); // Call createConfetti function here
}


function showQuestions() {
    continueButton.style.display = 'none';
    yesButton.style.display = 'inline-block';
    noButton.style.display = 'inline-block';
    toggleButton.style.display = 'inline-block';
    changeQuestion('');
}

noButton.addEventListener('click', () => {
    if (!isMoved) {
        noButton.classList.add('move-right');
    } else {
        noButton.classList.remove('move-right');
    }
    isMoved = !isMoved;
});

yesButton.addEventListener('click', () => {
    if (questionIndex === 0) {
        questionText.textContent = questions[questionIndex];
        questionIndex++;
    } else if (questionIndex < questions.length) {
        changeQuestion('Yes');
    }
});

// Add this function to create confetti
function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');

    for (let i = 0; i < 25; i++) {
        const fireworks = document.createElement('div');
        fireworks.classList.add('firework');
        fireworks.style.left = Math.random() * window.innerWidth + 'px';
        fireworks.style.animationDelay = Math.random() * 2 + 's';
        confettiContainer.appendChild(fireworks);

        const rose = document.createElement('div');
        rose.classList.add('rose');
        rose.style.left = Math.random() * window.innerWidth + 'px';
        rose.style.animationDelay = Math.random() * 2 + 's';
        confettiContainer.appendChild(rose);
    }

    document.body.appendChild(confettiContainer);
}
