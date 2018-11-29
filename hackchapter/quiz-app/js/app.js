
var yah = (function(){
	var myQuestions = {
			questions: [
				{
					question: 'Question 1',
					answers: [1, 2, 3, 4],
					correctIndex: 1
				},
				{
					question: 'Question 2',
					answers: [1, 2, 3, 4],
					correctIndex: 2
				},
				{
					question: 'Question 3',
					answers: [1, 2, 3, 4],
					correctIndex: 3
				}
			]
		};


var DOM = {
	start: document.querySelector('.start-page'),
	questions: document.getElementById('questions'),
	showAnswers: document.getElementById('show-answers'),	
	submitAnswer: document.getElementById('submit-answer'),
	feedback: document.getElementById('feedback'),
}

var setVariables = (function() {
	var count = 0;
	var score = 0; 

	return {
		incCount: function(){
			return count++;
		},
		incScore: function(){
			return score++;
		},
		currentCount: function() {
			return count; 
		}
	}
})();

DOM.submitAnswer.style.display = 'none';

function showQuestions(counter){
	var count = counter.currentCount();
	DOM.questions.innerHTML = myQuestions.questions[count].question;

	//provide list of answers for the question
	DOM.showAnswers.innerHTML = '';
	var answersVal = myQuestions.questions[count].answers;
	answersVal.forEach(function(listOfChoices){
		DOM.showAnswers.innerHTML += 
			'<li>' + 
				'<input type="radio" id="radio' + listOfChoices + '" name="radio" value="' + listOfChoices + '">' + 
				'<label>' + listOfChoices + '</label>' +
			'</li>';
	});
	DOM.submitAnswer.style.display = 'inline-block';
}

function checkAnswer(answerSubmitted, counter) {
	var count = counter.currentCount();
	var checkAnswer = myQuestions.questions[count].correctIndex;
	if(checkAnswer == answerSubmitted) {
		console.log('great work!')
	} else {
		console.log('that is incorrect answer')
	}
	nextQuestion(counter); 
}

function nextQuestion(count) {
	console.log(count.currentCount());
	if (count.currentCount() < 2) {
		count.incCount(); 
		showQuestions(count)
	} 
	else {

		DOM.feedback.innerHTML = 'Thanks for playing, your total score was: ' + count.incScore + '!'
	}
}

DOM.start.addEventListener('click', function(){
	DOM.start.style.display = 'none';
	showQuestions(setVariables);
});

DOM.submitAnswer.addEventListener('click', function(e){
	var answerSubmitted = document.querySelector("input[name='radio']:checked").value;
	checkAnswer(answerSubmitted, setVariables); 
});



})(); 
