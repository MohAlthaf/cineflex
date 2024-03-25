const questions = [
    {
        question: "Which actor played the role of Captain Jack Sparrow in the Pirates of the Caribbean movies?",
        optionA: "Brad Pitt",
        optionB: "Johnny Depp",
        optionC: "Tom Cruise",
        optionD: "Leonardo DiCaprio",
        correctOption: "optionB"
    },
    {
        question: "Who directed the movie Titanic?",
        optionA: "Steven Spielberg",
        optionB: "James Cameron",
        optionC: "Quentin Tarantino",
        optionD: "Christopher Nolan",
        correctOption: "optionB"
    },
    {
        question: "What is the name of the lion in The Lion King?",
        optionA: "Simba",
        optionB: "Mufasa",
        optionC: "Timon",
        optionD: "Pumbaa",
        correctOption: "optionA"
    },
    {
        question: "Which of the following is a movie about a group of astronauts who go on a mission to save Earth from a catastrophic event?",
        optionA: "Gravity",
        optionB: "Interstellar",
        optionC: "The Martian",
        optionD: "Armageddon",
        correctOption: "optionD"
    },
    {
        question: "In the Harry Potter movie series, what is the name of the school that Harry attends?",
        optionA: "Hogwarts",
        optionB: "Beauxbatons",
        optionC: "Durmstrang",
        optionD: "Ilvermorny",
        correctOption: "optionA"
    },
    {
        question: "Who played the role of Batman in The Dark Knight trilogy?",
        optionA: "George Clooney",
        optionB: "Ben Affleck",
        optionC: "Christian Bale",
        optionD: "Michael Keaton",
        correctOption: "optionC"
    },
    {
        question: "What is the name of the superhero team in The Avengers movies?",
        optionA: "Justice League",
        optionB: "X-Men",
        optionC: "Fantastic Four",
        optionD: "The Avengers",
        correctOption: "optionD"
    },
    {
        question: "Which of the following movies is a musical about a group of struggling actors trying to make it in Hollywood?",
        optionA: "La La Land",
        optionB: "The Greatest Showman",
        optionC: "Chicago",
        optionD: "Moulin Rouge",
        correctOption: "optionA"
    },
    {
        question: "Who played the role of Neo in The Matrix movies?",
        optionA: "Keanu Reeves",
        optionB: "Tom Hanks",
        optionC: "Will Smit",
        optionD: "Brad Pitt",
        correctOption: "optionA"
    },
    {
        question: "What is the name of the iconic villain in the Star Wars movies?",
        optionA: "Darth Vader",
        optionB: "Emperor Palpatine",
        optionC: "Kylo Ren",
        optionD: "General Grievous",
        correctOption: "optionA"
    }
];

let questionNumber = 1;
let playerScore = 0;
let wrongAttempt = 0;
let indexNumber = 0;
let timerInterval;

function startQuiz() {
    startTimer(); // start the timer
  timerInterval = setInterval(updateTimer, 1000); 
    document.getElementById("start-button").style.display = "none";
    document.querySelector(".game-quiz-container").style.display = "flex";
    document.getElementById("quiz-rules-container").style.display = "none";
    document.getElementById("navbar").style.display = "none";
    document.getElementById("start_btn").style.display = "none";
}


function exitMenu(){
    clearInterval(timerInterval); 
    document.getElementById('time-left').textContent = '0'; // set time left to 0
    document.querySelector(".game-quiz-container").style.display = "none";
    document.getElementById("navbar").style.display = "flex";
    handleEndGame();
}


let startTime;
const timeLimit = 60; // 60 seconds
function startTimer() {
    startTime = new Date().getTime();
    updateTimer();
  }
  

  function updateTimer() {
    const currentTime = new Date().getTime();
    const elapsedTime = (currentTime - startTime) / 1000; // in seconds
    const timeLeft = Math.max(timeLimit - elapsedTime, 0); // calculate time left
    document.getElementById('time-left').textContent = timeLeft.toFixed(0); // update timer display
    if (elapsedTime >= timeLimit) {
    clearInterval(timerInterval); 
    document.getElementById('time-left').textContent = '0'; // set time left to 0
    document.querySelector(".game-quiz-container").style.display = "none";
    handleEndGame(); 
    }

  }

function NextQuestion() {

    const currentQuestion = questions[indexNumber];
    document.getElementById("question-number").innerHTML = questionNumber;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
}

function checkForAnswer() {

    const currentQuestion = questions[indexNumber];
    const currentQuestionAnswer = currentQuestion.correctOption;
    const options = document.getElementsByName("option");
    let correctOption = null;

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id;
        }
    });

    if (
        options[0].checked === false &&
        options[1].checked === false &&
        options[2].checked === false &&
        options[3].checked == false
    ) {
        document.getElementById("option-modal").style.display = "flex";
    }

    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
           document.getElementById(correctOption).style.backgroundColor = "green";
            playerScore++;
            indexNumber++;
            setTimeout(() => {
                questionNumber++;
            }, 1000);
        } else if (option.checked && option.value !== currentQuestionAnswer) {

            const wrongLabelId = option.labels[0].id;
            document.getElementById(wrongLabelId).style.backgroundColor = "red";
            document.getElementById(correctOption).style.backgroundColor = "green";
    
            wrongAttempt++;
            indexNumber++;
            setTimeout(() => {
                questionNumber++;
            }, 1000);
        }
    });
}



function handleNextQuestion() {
    checkForAnswer();
    unCheckRadioButtons();
    setTimeout(() => {
        if (indexNumber < questions.length) {
            NextQuestion();
        } else {
            handleEndGame();
        }
        resetOptionBackground();
    }, 1000);
}

function resetOptionBackground() {

    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = "";
    });
}

function unCheckRadioButtons() {

    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


// function for when all questions being answered
function handleEndGame() {

    clearInterval(timerInterval);
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = playerScore * 10

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"
    // document.querySelector(".game-quiz-container").style.display = "none";
}



//closes score modal, resets game and reshuffles questions
function closeScoreModal() {

    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0

    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}


// function quit() {
//      document.querySelector(".game-quiz-container").style.display = "none";
//     document.getElementById("quiz-rules-container").style.display = "block";
//     document.getElementById("start-button").style.display = "block";
//     document.getElementById("navbar").style.display = "flex";

// }

function restartQuiz() {
    closeScoreModal();

    document.querySelector(".game-quiz-container").style.display = "none";
    document.getElementById("start-button").style.display = "block";
    document.getElementById("quiz-rules-container").style.display = "block";
    document.getElementById("navbar").style.display = "flex"
}

function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
