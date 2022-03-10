const API_KEY = "https://api.adviceslip.com/advice";
const LENGTH = 224;

const adviceId = document.getElementById("adviceId");
const adviceText = document.getElementById("adviceText");
const btn = document.getElementById("btn");

function randomNumber(number) {
  return Math.floor(Math.random() * number);
}

async function getAdvice() {
  let response = await fetch(`${API_KEY}/${randomNumber(LENGTH)}`);
  let data = await response.json();
  adviceId.innerHTML = `advice #${data.slip.id}`;
  adviceText.innerHTML = data.slip.advice;
}

btn.addEventListener("click", getAdvice);
