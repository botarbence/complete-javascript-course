/* let john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher"
}; 

let Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function(){
  console.log(2020-this.yearOfBirth);}


let john = new Person("John", 1990, "teacher");
let jane = new Person("Jane", 1969, "designer");
let mark = new Person("Mark", 1948, "retired");

john.calculateAge();
console.log(jane, mark)
*/
(function () {
  function Question(question, answers, correct) {
    (this.question = question),
      (this.answers = answers),
      (this.correct = correct);
  }

  Question.prototype.askQuestion = function () {
    console.log(this.question, this.answers);
    for (let i = 0; i < this.answers.length; i++) {
      console.log(i + 1 + ": " + this.answers[i]);
    }
  };
  Question.prototype.rightAnswer = function (callback) {
    console.log(userAnswer == this.correct);
    // userAnswer == this.correct ? (score += 1) : (score -= 1);
    // console.log("Your score is: " + score);
    userAnswer == this.correct ? console.log(callback(true)) : console.log(callback(false));
    if (userAnswer > 0) {
      loop();
    }
  };
  function loop() {
    randomNumber = Math.floor(Math.random() * questions.length);
    questions[randomNumber].askQuestion();
    userAnswer = parseInt(prompt("Your answer is:"));
    questions[randomNumber].rightAnswer(keepscore);
  }

  function score(){
    let sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      } else {
        sc--;
      } return sc;
  }};

  let keepscore = score();

  let userAnswer;
  let randomNumber;
  // let score = 0;
  let q1 = new Question("When was the ESB built?", [1910, 1921, 1912], 2);
  let q2 = new Question(
    "When was the Eiffel Tower built?",
    [1890, 1915, 1956],
    1
  );
  let q3 = new Question("When was the Pentagon built?", [1925, 1944, 1967], 3);
  let questions = [q1, q2, q3];

  loop();
})();
