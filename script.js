const colours = ["#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const h1 = document.querySelector("h1");
const body = document.querySelector("body");
const p = document.querySelector("p");
const a = document.querySelector("a");

stopBtn.style.display = "none";
a.style.display = "none";
const start = () => {
  h1.innerText = "When the background colour changes, click the button";
  p.style.display = "none";
  startBtn.style.display = "none";
  stopBtn.style.display = "inline-block";
  stopBtn.disabled = true;

  const randomTime = Math.floor(Math.random() * 4000) + 2000;

  setTimeout(() => {
    const randomColor = colours[Math.floor(Math.random() * colours.length)];
    const start = new Date().getMilliseconds();

    body.style.backgroundColor = randomColor;
    stopBtn.disabled = false;

    stopBtn.addEventListener("click", () => {
      const stop = new Date().getMilliseconds();
      const time = stop - start;

      h1.innerText = `Your reaction time is ${time / 1000}s`;

      stopBtn.style.display = "none";
      a.style.display = "block";
    });
  }, randomTime);
};

startBtn.addEventListener("click", start);
