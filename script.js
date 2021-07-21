const startButton = document.getElementById('start__btn')
const nextButton = document.getElementById('next__btn')
const questionContainerElement = document.getElementById('question__container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer__buttons')


let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion () {
    resetState() 
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
         button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstElementChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstElementChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex +1) {
       nextButton.classList.remove('hide') 
    } else {
        startButton.innerText = 'Play Again'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct') 
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question:'At which age does adulthood begin for a canine?',
        answers: [
            {text: '6 months', correct: false},
            {text: '18 month', correct: false},
            {text: '12 years', correct: false},
            {text: '12 months', correct: true}
        ]
    },

    {
        question:'At which age should a dog or cat be neutered or spayed?',
        answers: [
            {text: '2 years', correct: false},
            {text: '13 month', correct: false},
            {text: '12 years', correct: false},
            {text: '6-9 months', correct: true}
        ]
    },

    {
        question:'What does DHPP stand for?',
        answers: [
            {text: '6 months', correct: false},
            {text: '18 month', correct: false},
            {text: '12 years', correct: false},
            {text: '12 months', correct: true}
        ]
    },

    {
        question:'How often should a dog receive dental treatment?',
        answers: [
            {text: '6 months', correct: false},
            {text: '18 month', correct: false},
            {text: '12 years', correct: false},
            {text: '12 months', correct: true}
        ]
    },

    {
        question:'At which age does adulthood begin for a canine?',
        answers: [
            {text: '6 months', correct: false},
            {text: '18 month', correct: false},
            {text: '12 years', correct: false},
            {text: '12 months', correct: true}
        ]
    }

] 

