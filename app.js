//Initialize the variable can be used in this code
var questions, question, choiceA, choiceB, choiceC, choiceD, correct, choices, qInfo, numQuestions, questionID,
current = 0;
//Store user score for each question in an array named points
var score = 0;
var points = [];
//Store a default set of 5 questions in an array named defaultQuestions
var defaultQuestions = [
    {
        question: "Where are the three smallest bones in the human body?",
        choiceA: "middle ear",
        choiceB: "nose",
        choiceC: "toes",
        choiceD: "eyes",
        correct: "A"
    },
    {
        question: "What is the most abundant element in the Universe?",
        choiceA: "Helium",
        choiceB: "Oxygen",
        choiceC: "Lithium",
        choiceD: "Hydrogen",
        correct: "D"
    },
    {
        question: "Approximately how long does it take for light to travel from the Sun's surface to the Earth?",
        choiceA: "8 days",
        choiceB: "8 seconds",
        choiceC: "8 minutes",
        choiceD: "8 hours",
        correct: "C"
    },
    {
        question: "What is 10/2?",
        choiceA: "5",
        choiceB: "2",
        choiceC: "8",
        choiceD: "9",
        correct: "A"
    },
    {
        question: "Which planet has the most moons?",
        choiceA: "Saturn",
        choiceB: "Mars",
        choiceC: "Jupiter",
        choiceD: "Uranus",
        correct: "C"
    }];

// get HTML elements

var taQuiz = document.getElementById("quiz");
var taQuestion = document.getElementById("question");
    
var taChoiceA = document.getElementById("choiceA");
    
var taChoiceB  = document.getElementById("choiceB");
    
var taChoiceC  = document.getElementById("choiceC");
    
var taChoiceD  = document.getElementById("choiceD");
var taChoices = document.getElementsByName("choices");

var taQuizStatus = document.getElementById("quizStatus");

// starting the quiz by declaring and calling function
populateQuestions();
renderQuestion();

function populateQuestions(){

    questions = defaultQuestions;
    if(localStorage.getItem("questions")){
        var storedQuestions = JSON.parse(localStorage.getItem("questions"));
        for ( i = 0; i < storedQuestions.length; i++){
            questions.push(storedQuestions[i]);
        }
    }
    // the numQuestions variable, which is used later to display user progress
    numQuestions = questions.length;
}
// The populateQuestionInfo() function populates application variables with question info for the current question.
function populateQuestionsInfo() {
    // we will use questions Array with current index (previusly set to current = 0) as this questions
    // array contains object items so we use standard syntax: objectName.propertyName= qInfo; then here we go.
    question = questions[current].question;
    qInfo = questions[current];
    choiceA = qInfo.choiceA;
    choiceB = qInfo.choiceB;
    choiceC = qInfo.choiceC;
    choiceD = qInfo.choiceD;
    correct = qInfo.correct;
    
}

//  using render function to be called to modify the html elements and filling and rendering the current question 
// info data to the web browser by using inner HTML as well as updating the quiz status
function renderQuestion() {
     questionID = current + 1;
     taQuizStatus.innerHTML = "Question " + (questionID) + " of " + (numQuestions);
    populateQuestionsInfo();
    taQuestion.innerHTML = question;
    taChoiceA.innerHTML = choiceA;
    taChoiceB.innerHTML = choiceB;
    taChoiceC.innerHTML = choiceC;
    taChoiceD.innerHTML = choiceD;
    
}
    

      
    