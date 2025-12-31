const text = document.getElementById("text");
const circle = document.querySelector(".circle");

function playAnim() {
  circle.style.animationPlayState = "running";
  text.style.animationPlayState = "running";
}

function resetAnim() {
  circle.style.animation = "none";
  text.style.animation = "none";

  setTimeout(() => {
    circle.style.animation = "rotate 6s linear infinite";
    text.style.animation = "glow 2s ease-in-out infinite alternate";
  }, 100);
}
