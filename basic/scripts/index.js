//Create question and answer object
class cards {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

let front = document.getElementById("front");
let back = document.getElementById("back");
let quiz = [];

//Create four question sets and push them onto the quiz array
quiz.push(new cards('What is 3+5?', 'more than six?'));
quiz.push(new cards('What color is the sky?', 'blue'));
quiz.push(new cards('Is ice cold?', 'yes'));
quiz.push(new cards('what date is today?', 'idk'));

let cardindex = 0;
//Add a listener that print out the answer when clicking the question
document.getElementById('front').onclick = function() {
  back.innerHTML = quiz[cardindex].answer;
}

//Function for the previous and next button to display the question one at a time
function next() {
  cardindex = (cardindex + 1) % quiz.length;
  front.innerHTML = quiz[cardindex].question;
  back.innerHTML = "";
}
function previous() {
  if (cardindex > 0) {
    cardindex = (cardindex - 1);
} else if (cardindex == 0) {
    cardindex = quiz.length - 1;
}
  front.innerHTML = quiz[cardindex].question;
  back.innerHTML = "";
}
