const quizData = [
    {
      question: "Which of the following is an eco-friendly menstrual product?",
      options: ["Sanitary pad", "Tampon", "Menstrual cup", "Painkiller"],
      correct: "Menstrual cup"
    },
    {
      question: "How often should disposable pads be changed?",
      options: ["Every 12 hours", "Every 4-6 hours", "Once a day", "Only when full"],
      correct: "Every 4-6 hours"
    },
    {
      question: "What is a common myth about menstruation?",
      options: [
        "You can’t touch pickles",
        "It’s a biological process",
        "Periods are natural",
        "Hygiene is important"
      ],
      correct: "You can’t touch pickles"
    },
    {
      question: "Which SDG is related to menstrual hygiene?",
      options: ["SDG 3 and 5", "SDG 1 only", "SDG 7", "None"],
      correct: "SDG 3 and 5"
    },
    {
      question: "Which of these helps break taboos around periods?",
      options: ["Avoiding the topic", "Spreading awareness", "Shaming girls", "Ignoring myths"],
      correct: "Spreading awareness"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionBtns = document.querySelectorAll(".option-btn");
  const nextBtn = document.getElementById("next-btn");
  const resultEl = document.getElementById("result");
  const scoreEl = document.getElementById("score");
  const quizEl = document.getElementById("quiz");
  
  function loadQuestion() {
    const data = quizData[currentQuestion];
    questionEl.textContent = data.question;
    optionBtns.forEach((btn, index) => {
      btn.textContent = data.options[index];
      btn.classList.remove("correct", "wrong");
      btn.disabled = false;
    });
    nextBtn.style.display = "none";
  }
  
  function checkAnswer(btn) {
    const selected = btn.textContent;
    const correct = quizData[currentQuestion].correct;
  
    if (selected === correct) {
      btn.classList.add("correct");
      score++;
    } else {
      btn.classList.add("wrong");
      optionBtns.forEach(b => {
        if (b.textContent === correct) b.classList.add("correct");
      });
    }
  
    optionBtns.forEach(b => b.disabled = true);
    nextBtn.style.display = "inline-block";
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quizEl.classList.add("hide");
    resultEl.classList.remove("hide");
    scoreEl.textContent = score;
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quizEl.classList.remove("hide");
    resultEl.classList.add("hide");
    loadQuestion();
  }
  
  loadQuestion();
  