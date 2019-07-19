const output = [];
const myQuestions = [
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
    question: "What do unicorns have a horn ?",
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
]
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll("slides");
console.log(slides)

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
function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".answers");
 ;

  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;

      answerContainers[questionNumber].style.color = "lightgreen";
    } else {
      answerContainers[questionNumber].style.color = "red";
    }
  });
  function showResults() {
    return `${numCorrect} out of ${myQuestions.length}`}
   {documentWrite.innerHTML('return');}

const quizContainer = document.getElementById("quiz");
{let currentSlide = []}
console.log(currentSlide);
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");

  console.log(resultsContainer)  
}
  if (currentSlide === slides.length + 0) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
  }

  if (currentSlide === slides.length -1 )  {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
  };
  var showNextSlide = document.getElementById(currentSlide [+1])
  var showPreviousSlide = document.getElementById(currentSlide[-1])

function showNextSlide(){currentSlide [+ 1]}

function showPreviousSlide() {currentSlide [- 1]}
};


previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
submitButton.addEventListener("click", showResults)
