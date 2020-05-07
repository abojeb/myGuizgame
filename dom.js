const options = document.querySelector(".option").children;
const answertrackerContainer = document.querySelector(".answers-Tracker")
const questionNumberSpan = document.querySelector(".question-num-value");
const correctAnswer = document.querryselector(".correct-Answers");
const totalQuestionSpan = document.querySelector(".total-question");
const totalQuestionSpan2 = document.querySelector(".total-question2");
const percentage = document.querySelector(".percentage");
const question = document.querySelector(".question");

const op1 = document.querySelector(".option1");
const op2 = document.querySelector(".option2");
const op3 = document.querySelector(".option3");
const op4 = document.querySelector(".option4");
let questionIndex;
let index = 0;
let myArray = [];
let myArr = [];
let score = 0;



const questions = [{
            q: 'how do you call a function named "myFunction"?',
            options: ['myFunction() ', 'call myFunction()', 'call function myFunction() ', ' all of the above '],
            answer: 0
        },
        {
            q: 'How to write an IF statement in Javascript?',
            options: ['if i==5 then', ' if(i==5) ', ' if i=5 ', ' if i=5 then'],
            answer: 1
        },
        {
            q: 'How do you declare a javascript variable?',
            options: ['variable carName;', 'var carName;', 'v carName;', ' none of these'],
            answer: 1

        },
        {
            q: 'Which operator is used to assign a value to a variable?',
            options: [':', '+', '=', '*'],
            answer: 1

        },
        {
            q: 'how does a For Loop starts?',
            options: ['for (i=0;i<=5)', ' for (i<=5; i++) ', 'for (i=1 to 5) ', ' for (i=0; i<=5)'],
            answer: 3

        }

    ]
    //set questions, and option and question number
totalQuestionSpan.innerHTML = questions.length;

function load() {
    questionNumberSpan.innerHTML = index + 1;
    question.innerHTML.questions[questionIndex].q;
    op1.innerHTML.questions[questionIndex].options[0];
    op2.innerHTML.questions[questionIndex].options[1];
    op3.innerHTML.questions[questionIndex].options[2];
    op4.innerHTML.questions[questionIndex].options[3];
    index++;
}

function check(element) {
    if (element.id == questions[questionIndex].answer) {
        element.classList.add("correct");
        updateAnswerTracker("correct")
        score++;
        console.log("score:" + score)
    } else {
        element.classList.add("wrong");
        updateAnswertracker("wrong");

    }
    disabledoption()
}

function diabledOptions() {
    for (let i = 0; i < options.length; i++) {
        option[i].classList.add("disabled");
        if (options[i].id == question[questionIndex].answer)
            options[i].classList.add("correct");
    }
}
}

function enableOptions() {
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("disabled", "correct".
            "wrong");
    }
}


function validate {
    if (options[0].classList.contains("disabled")) {
        alert("please select one option")
    } else {
        enableOptions();
        randomQuestion();
    }
}

function next() {
    validate();
}


function randomQuestion() {
    let randomNumber = math.floor(math.random() * questions.length);
    let hitDuplicate = 0;
    if (index == questions.length) {
        quizOver();

    } else {
        if (myArray.length > 0) {
            for (let i = 0; i < myArray.length; i++) {
                if (myArray[i] == randomNumber) {
                    hitDuplicate = 1;
                    break;

                }

            }
            if (hitDuplicate == 1) {
                randomQuestion();
            } else {
                questionIndex = randomNumber;
                load();
                myArr.push(questionIndex);
            }

        }
        if (myArray.length == 0) {
            questionIndex = randomNumber;
            load();
            myArr.push(questionIndex);

        }
        console.log("myArr:" + myArr);
        MyArray.push(randomNumber);
    }

}

function answerTracker() {
    for (let i = 0; i < questions.length; i++) {
        const div = document.createElement("div");
        answertrackerContainer.appendChild(div);

    }
}

function updateAnswerTracker(classNam) {
    answertrackerContainer.children[index - 1].classList.add(classNam);
}

function quizOver() {
    document.querySelector(".quiz-Over").classList.add("show");
    correctAnswer.innerHTML = score;
    totalQuestionSpan2.innerHTML = question.length;
    percentage.innerHTML = (score / question.length) * 100 + '%';

}

function tryAgain() {
    window.location.reload();
}

window.onload = function() {
    randomQuestion();
    answerTracker();
}