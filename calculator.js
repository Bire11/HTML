const result = document.getElementById("result");

let input = "";

function addInput(value) {
 input += value;
 result.innerHTML = input;
}

function clearResult() {
 input = "";
 result.innerHTML = "0";
}

function deleteLast() {
 input = input.slice(0, -1);
 result.innerHTML = input || "0";
}

function calculate() {
 input = input.replace(/x/g, "*").replace(/÷/g, "/");
 result.innerHTML = eval(input) || "0";
}

function resize() {
 const keys = document.querySelector(".keys");
 if (window.innerWidth < 500) {
  keys.style.gridTemplateColumns = "repeat(2, 1fr)";
 } else {
  keys.style.gridTemplateColumns = "repeat(4, 1fr)";
 }
}

window.addEventListener("resize", resize);
resize();
