const quizData = [
    {
      question: "What scent describes you best?",
      options: ["Honey", "Wood", "Sea", "Rose", "Emberfire"],
      answer: ["Honey", "Wood", "Sea", "Rose", "Emberfire"],
      
    },
    {
      question: "Do you prefer the day-time or the night-time?",
      options: ["day-time","night-time"],
      answer: ["day-time","night-time"]
    },
    {
      question: "What seasons do you enjoy?",
      options: ["Fall","Winter","Summer","Spring"],
      answer: ["Fall","Winter","Summer","Spring"]
    },
    {
      question: "Do you enjoy sweets treats, or do you enjoy spicy things, or do you enjoy both?",
      options: ["sweet","spicy","Sweet & spicy"],
      answer: ["sweet","spicy","sweet & spicy"]
    },
    
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();
