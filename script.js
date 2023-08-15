const enter = document.querySelector(".enter");
const count = document.querySelector(".count");
const overlay = document.querySelector(".overlay");
const audio = document.querySelector(".audio");
const fas = document.querySelector(".fas");
const music = document.querySelector(".music");
const sparcle = document.querySelector(".sparcle");
const cardBody = document.querySelector(".card-body");
const showButton = document.getElementById("showButton");
const cake = document.getElementById("cake");
const message = document.getElementById("message");
const container = document.querySelector(".container");
const card = document.querySelector(".card");

let isPlaying = true;

//Stop Music
const stopMusic = function () {
  isPlaying = false;
  fas.classList.replace("fa-pause", "fa-play");
  audio.pause();
};

//Play Music
const playMusic = function () {
  isPlaying = true;
  fas.classList.replace("fa-play", "fa-pause");
  audio.play();
};
//controll music
music.addEventListener("click", () => (isPlaying ? stopMusic() : playMusic()));

//Set Timmer
const setCounter = function () {
  let i = 3;
  const secPerCount = setInterval(() => {
    count.textContent = i;
    count.classList.add("element");
    i--;
    if (i < 0) {
      clearInterval(secPerCount);
      overlay.style.display = "none";
      playMusic();
      audio.loop = true;
      setTimeout(() => {
        sparcle.style.display = "none";
      }, 5000);
    }
  }, 1000);
};

//Welcome
enter.addEventListener("click", function () {
  enter.style.display = "none";
  //set timer for 3 counts
  setCounter();
});

//Show Wishes
showButton.addEventListener("click", () => {
  cake.style.transform = "scale(1.3)";
  setTimeout(() => {
    cake.style.transform = "scale(1)";
    message.style.display = "block";
    showButton.style.display = "none";
    card.style.height = "350px";
    container.style.margin = "28px auto";
    cardBody.classList.toggle("is-flipped");
  }, 800);
});

//flip card
cardBody.addEventListener("click", () => {
  cardBody.classList.toggle("is-flipped");
});
