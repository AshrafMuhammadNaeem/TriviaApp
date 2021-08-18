//Initialize the variable can be used in this code
var questions, question, choiceA, choiceB, choiceC, choiceD, choices, qInfo, numQuestions, questionID,
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

]






var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
    
var choiceA = document.getElementById("choiceA");
    
var choiceB = document.getElementById("choiceB");
    
var choiceC = document.getElementById("choiceC");
    
var choiceD = document.getElementById("choiceD");
    

      
    