const output = [];
const myQuestions = [
  {
    question: "Do you love Unicorns?",
    answers: {
      a: "yes",
      b: "no",
      c: "silly who doesn't",
    },
    correctAnswer: "c"

  },
  {
    question: "Do Unicorns have magical powers?",
    answers: {
      a: "yes",
      b: "no",
      c: "no way only wizards do",
    },
    correctAnswer: "a"

  },
  {
    question: "What does a Unicorn eat?",
    answers: {
      a: "candy",
      b: "children",
      c: "neither",
    },
    correctAnswer: "c"

  },
  {
    question: "What animal is commonly mistaken for Unicorn?",
    answers: {
      a: "rhino",
      b: "horse",
      c: "narwhal",
    },
    correctAnswer: "a"
  },
  {
    question: "What country still beleives unicorns are alive and the Great Leader is only one able to see them?",
    answers: {
      a: "USA",
      b: "Chili",
      c: "North Kora",
    },
    correctAnswer: "c"
  },
  {
    question: "How many Unicorns in a family?",
    answers: {
      a: "1-6",
      b: "Trick question",
      c: "4-5",
    },
    correctAnswer: "c"
  },
  {
    question: "Do unicorns have a horn ?",
    answers: {
      a: "Yes",
      b: "No",
      c: "What",
    },
    correctAnswer: "a"
  },
  {
    question: "What color is a unicorn fart?",
    answers: {
      a: "blue",
      b: "rainbow",
      c: "orange",
    }, correctAnswer: "b",
  },
  {
    question: "What is the Most Popular color for unicorns?",
    answers: {
      a: "blue",
      b: "white",
      c: "black",
    },

    correctAnswer: "b"
  },
]

myQuestions.forEach((currentQuestion, questionNumber) => {

  const answers = [];

  for (letter in currentQuestion.answers) {
    answers.push(
      `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
    );
  }

  output.push(
    `<div class="slides">
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>
      </div>`  );
  console.log(output)
},
);

quiz.innerHTML = output.join(""),


  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;


    submitButton.addEventListener("click", showResults)

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;

      answerContainers[questionNumber].style.color = "lightgreen";
    } else {
      answerContainers[questionNumber].style.color = "red";
    }
  });

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const answerContainers = quizContainer.querySelectorAll(".answers");
console.log(resultsContainer)
function showResults() {
  return `${numCorrect} out of ${myQuestions.length}`;
}
{ document.getElementById("results").innerHTML = myFunction(); }
$('#iTimeShow').html('Time Remaining:'); iSelectedAnswer = [];
			