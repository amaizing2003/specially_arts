const quizData = [
    {
        question: "Who painted 'Ssireum'?",
        choices: [
            "Shin Yun-bok",
            "Kim Hong-do",
            "Jeong Seon",
            "Jang Seung-eop"
        ],
        answer: "Kim Hong-do"
    },

    {
        question: "What is a painting of real Korean scenery called?",
        choices: [
            "Minhwa",
            "Jingyeong Sansuhwa",
            "Chaekgeorido",
            "Muninhwa"
        ],
        answer: "Jingyeong Sansuhwa"
    },

    {
        question: "What is the tiger-and-magpie folk painting called?",
        choices: [
            "Hojakdo",
            "Hwajodo",
            "Sipjangsaengdo",
            "Chaekgeorido"
        ],
        answer: "Hojakdo"
    },

    {
        question: "Who is famous for Starry Night?",
        choices: [
            "Monet",
            "Picasso",
            "Van Gogh",
            "Matisse"
        ],
        answer: "Van Gogh"
    },

    {
        question: "Which artist is known for Cubism?",
        choices: [
            "Picasso",
            "Monet",
            "Renoir",
            "Degas"
        ],
        answer: "Picasso"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const quizContainer = document.getElementById("quiz-container");

loadQuestion();

function loadQuestion() {

    const current = quizData[currentQuestion];

    questionEl.textContent =
        `${currentQuestion + 1}. ${current.question}`;

    choicesEl.innerHTML = "";

    current.choices.forEach(choice => {

        const button = document.createElement("button");

        button.textContent = choice;
        button.classList.add("choice-btn");

        button.addEventListener("click", () => {
            checkAnswer(button, choice);
        });

        choicesEl.appendChild(button);
    });
}

function checkAnswer(button, selected) {

    const correct =
        quizData[currentQuestion].answer;

    const buttons =
        document.querySelectorAll(".choice-btn");

    buttons.forEach(btn => btn.disabled = true);

    if (selected === correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");

        buttons.forEach(btn => {
            if (btn.textContent === correct) {
                btn.classList.add("correct");
            }
        });
    }
}

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {

    quizContainer.classList.add("hidden");
    resultEl.classList.remove("hidden");

    document.getElementById("score").textContent =
        `Your score: ${score} / ${quizData.length}`;
}
