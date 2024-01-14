import "./style.css";
/**
 * Project Recuirements:
 * - Change the backgroud color by generating random HEX color by clicking a button
 * - show color code
 * - add a button to copy color code
 */

// onloader handler
window.onload = () => {
  main();
};

function main() {
  // collecting references
  const root = document.getElementById("root");
  const changeBtn = document.getElementById("change-btn");
  const copyBtn = document.getElementById("copy-btn");
  const displayColorCode = document.getElementById("display-color-code");

  // handle click event of changeBtn
  changeBtn.addEventListener("click", function () {
    root.classList.remove("bg-cyan-400");
    const bgColor = generateRgbColor();
    root.style.backgroundColor = bgColor;
    displayColorCode.value = bgColor;
  });

  // handle click event of changeBtn
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(displayColorCode.value);
  });
}

// color generator function
function generateRgbColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
