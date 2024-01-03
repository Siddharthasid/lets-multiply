const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

const questionEl = document.getElementById("question");
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAnswer = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerText = `score sid: ${score}`;

formEl.addEventListener("submit", (e) => {
  // e.preventDefault();
  const userAns = +inputEl.value;
  console.log(userAns, typeof userAns);

  if (userAns === correctAnswer) {
    score++;
    updateLocalStorage();
    showOverlay(true);
  } else {
    if (score > 0) {
      score--;
      updateLocalStorage();
      showOverlay(false);
    }
  }
  console.log(score);
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

function showOverlay(isCorrect) {
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.innerText = isCorrect ? "Correct Answer!" : "Wrong Answer!";
  document.body.appendChild(overlay);
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

  setTimeout(() => {
    overlay.remove();
    document.body.style.backgroundColor = "";
  }, 1500);
}
