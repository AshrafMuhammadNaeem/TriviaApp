var questionForm = document.getElementById("addquestion");
questionForm.onsubmit = processForm;
function processForm() {
    var newQuestion = {
        question: questionForm.question.value,
        choiceA: questionForm.choiceA.value,
        choiceB: questionForm.choiceB.value,
        choiceC: questionForm.choiceC.value,
        choiceD: questionForm.choiceD.value,
        correct: questionForm.correct.value,
    };
    if (localStorage.getItem("questions")){
        var questions = JSON.parse(localStorage.getItem("questions"));
            questions.push(newQuestion);
            localStorage.setItem("questions", JSON.stringify(questions));
        else{
            var questions = [newQuestion];
            localStorage.setItem("questions", JSON.stringify(questions));
        }
        questionForm.reset();
    return false;
    }
    
}