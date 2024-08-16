const quizData = [
{

    question : "Which language runs in a web browser?",
    A: "Java" ,
    B:  "C" ,
    C: "Python",
    D: "javascript",
    correct: "d",
},


{
    question: "What does Css stand for?" ,
    A: "Central Style Sheets",
    B: "Casacading Style Sheets",
    C: "Casacading Simple Sheets",
    D: "Cars SUVs Sailboats",
    correct: "b",
},

{
    question: "What does HTML stand for?",

    A: "Hypertext Markup Language",
    B: "Hypertext Markdown Language",
    C: "Hypertext Machine Language",
    D: "Helicopter Terminals Motorboats Lamborginis",
    correct: "a",

},
{
    question: "What year was JavaScript launched?",
    A: "1996",
    B: "1995",
    C: "1994",
    D:"None of the above",
    correct: "b"
}
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const sumbitBtn = document.getElementById('submit')


let currentQuiz = 0

let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.A
    b_text.innerHTML = currentQuizData.B
    c_text.innerHTML = currentQuizData.C
    d_text.innerHTML = currentQuizData.D

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answerEl
    answerEls.forEach(answerEl =>{
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


sumbitBtn.addEventListener('click', () =>{
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()

        } else{
            quiz.innerHTML =  `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick = "location.reload()">Reload</button>

            `
        
        }

    }
})