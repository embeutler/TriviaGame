function showResults(questions, quizContainer, resultsContainer) {
  var answerContainers = quizContainer.querySelectorAll('.answers');
  var userAnswer = '';
  var numCorrect = 0;
  for (var i = 0; i < questions.length; i++) {
    userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
    if (userAnswer === questions[i].correctAnswer) {
      numCorrect++;
      answerContainers[i].style.color = 'pink';
    }
    else {
      answerContainers[i].style.color = 'blue';
    }
  }
  resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
