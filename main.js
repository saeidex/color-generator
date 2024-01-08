import "./style.css";
/**
 * Project Recuirements:
 * - Change the backgroud color by generating random rgb color by clicking a button
 */

// onloader handler
window.onload = () => {
  main();
};

function main() {
  // collecting references
  const root = document.getElementById("root");
  const changeBtn = document.getElementById("change-btn");

  // handle click event
  changeBtn.addEventListener("click", function () {
    root.classList.remove("bg-cyan-400");
    const bgColor = generateRgbColor();
    root.style.backgroundColor = bgColor;
  });
}

// randor color generator
function generateRgbColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
