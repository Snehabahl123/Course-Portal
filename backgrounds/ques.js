function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Quiz Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "/" +quiz.questions.length+"</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("In the computer world, Trojan refer to? ", ["Virus", "Malware","Spyware", "Worm"], "Malware"),
    new Question("In which year '@' sign was first chosen for its use in e-mail address", ["1976", "1980", "1977", "1972"], "1972"),
    new Question("Which one is the World's fastest Super computer(till August-2017)?", ["Titan", "Tianhe-2","Sunway TaihuLight", "Trinity"], "Sunway TaihuLight"),
    new Question("URL stands for ", ["Uniform Resource Locator", "Universal Resource Locator","Unique Resource Locator", "Uniform Reverse Locator"], "Uniform Resource Locator"),
    new Question("How many home pages a web site can contain?", ["As many as one would like to have", "Depends on the size of the website","One", "Depends on the size of contents"], "One"),

 
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
