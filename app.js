const nextButton = document.querySelector(".next-button");

const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");
// UI MESSAAGES
const uiLevel = document.querySelector(".ui-level");
const uiMessage = document.querySelector(".ui-message");

const spookyPic = document.querySelector(".spooky-picture");
const scream = document.querySelector(".scream");

window.addEventListener("mousemove", (e) => {
  let check = e.target.classList.value;
  collusionCheck(check);
});

const collusionCheck = (value) => {
  if (value === "maze-border") alert("You lost !!!!");
  if (value === "finish") {
    nextButton.style.opacity = 1;
    nextButton.style.pointerEvents = "all";
    levelOne.style.pointerEvents = "none";
  }
  console.log(value);

  if (value === "end-game") {
    scream.play();
    spookyPic.style.display = "block";
  }
};

nextButton.addEventListener("click", () => {
  levelOne.style.display = "none";
  levelTwo.style.display = "block";
  nextButton.style.opacity = 0;
  nextButton.style.pointerEvents = "none";
  uiLevel.textContent = "Level 2";
  uiMessage.textContent = " one more to go....";
});
