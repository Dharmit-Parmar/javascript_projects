const questions = [
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "What will `typeof null` return?",
    options: ["null", "object", "undefined", "NaN"],
    answer: "object"
  },
  {
    question: "Which method adds a new item to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()"
  },
  {
    question: "What does `===` do in JavaScript?",
    options: [
      "Assigns value",
      "Compares value and type",
      "Only compares value",
      "Converts types before comparing"
    ],
    answer: "Compares value and type"
  },
  {
    question: "Which one is a valid arrow function syntax?",
    options: [
      "() => {}",
      "function => {}",
      "(=>) {}",
      "arrow() => {}"
    ],
    answer: "() => {}"
  },
  {
    question: "What is the default value of an uninitialized variable?",
    options: ["null", "0", "undefined", "false"],
    answer: "undefined"
  },
  {
    question: "What does `e.stopPropagation()` do in an event listener?",
    options: [
      "Stops the browser's default action",
      "Stops the event from reaching other listeners",
      "Pauses the event",
      "Restarts the event loop"
    ],
    answer: "Stops the event from reaching other listeners"
  },
  {
    question: "Which method is used to create a new DOM element?",
    options: [
      "appendChild()",
      "getElementById()",
      "createElement()",
      "querySelector()"
    ],
    answer: "createElement()"
  },
  {
    question: "Which loop is best for iterating through arrays?",
    options: ["for...in", "for...of", "forEach()", "All of these"],
    answer: "All of these"
  },
  {
    question: "What will this code print?\n\n`console.log(typeof NaN);`",
    options: ["NaN", "number", "undefined", "string"],
    answer: "number"
  }
];





let question_html = document.getElementById("question");
let btn = document.getElementById("nextBtn");
let parent_option = document.getElementById("options");
let score = document.getElementById("scoreDisplay");
let child_option = parent_option.children;
let arr_options = Array.from(child_option);
let exit = document.getElementById("Exit");
let num = 0;
let isccorect = 0;



function game_start() {
   
  question();
  if (isccorect == 1) {
    arr_options.forEach(element => {
      score.textContent = num;
      arr_options.forEach(element => {
        element.disabled = false;
        element.style.border = "1px solid black";
      });
    });
  }


}



function random_index() {
  let random = Math.floor(Math.random() * questions.length);
  return random;
}

function question() {
  let random = random_index();
  let question_innerHtml = questions[random].question;
  question_html.innerHTML = question_innerHtml;
  arr_options.forEach((element, index) => {
    element.textContent = questions[random].options[index];
    element.disabled = false;
    element.style.border = "3px solid black";
    element.onclick = function()
    {
      if(element.textContent === questions[random].answer) {
        element.style.border = "5px solid green";
        isccorect = 1;
        num++;
        score.textContent = num;
        arr_options.forEach(el => {
          el.disabled = true;  
        });
      }
      else {
        element.style.border = "5px solid red";
        if(num > 0) {
          num--;
          score.textContent = num;
        }
        isccorect = 1;
         arr_options.forEach(el => {
          el.disabled = true;  
        });
      }
    }
      
  });
  
   
}

btn.addEventListener("click", function () {
  parent_option.style.display = "flex";
  btn.textContent = "Next";
  exit.style.display = "block";
  game_start();
});

exit.addEventListener("click", function () {
  question_html.textContent = "";
  question_html.textContent = `Good! your score is ${score.textContent}`;
  exit.style.display = "none";
  btn.innerHTML = "Retry";
   num = 0;
  score.textContent = num;
  isccorect = 0;
  parent_option.style.display = "none";
})

