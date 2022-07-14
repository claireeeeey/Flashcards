class cards {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

let front = document.getElementById("front");
let back = document.getElementById("back");
let quiz = [];

quiz.push(new cards('What is 3+5?', 'more than six?'));
quiz.push(new cards('What color is the sky?', 'blue'));
quiz.push(new cards('Is ice cold?', 'yes'));
quiz.push(new cards('what date is today?', 'idk'));

let i = 0;
while (i < quiz.length)  {
  front.innerHTML = quiz[i].question;
  document.getElementById('front').onclick = function() {
  let ele1 = document.getElementById('front');
  ele1.innerHTML = quiz.answer;
}
  ++i
}

let cardindex = 0;
function next() {
  cardindex = (cardindex + 1) % quiz.length;
  front.innerHTML = quiz[cardindex].question;
}
function previous() {
  if (cardindex > 0) {
    cardindex = (cardindex - 1);
} else if (cardindex == 0) {
    cardindex = quiz.length - 1;
}
  front.innerHTML = quiz[cardindex].question;
}

