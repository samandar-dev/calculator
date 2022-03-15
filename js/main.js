let funBtn = document.querySelector("#calc__func");
let funBox = document.querySelector("#funBox");

funBtn.addEventListener('click', function () {
  funBox.classList.toggle("fun-open");
})

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btn10 = document.querySelector("#btn10");
const btn11 = document.querySelector("#btn11");
const elDeletOne = document.querySelector("#btn12");
const btn13 = document.querySelector("#btn13");
const btn14 = document.querySelector("#btn14");
const f_fun1 = document.querySelector("#btn15");
const f_fun2 = document.querySelector("#btn16");
const f_fun3 = document.querySelector("#btn17");
const f_fun4 = document.querySelector("#btn18");
const sin = document.querySelector("#btn1");
const cos = document.querySelector("#btn2");
const tan = document.querySelector("#btn3");
const f_x_ = document.querySelector("#btn4");
const PI = document.querySelector("#btn5");
const log = document.querySelector("#btn6");
const f_7 = document.querySelector("#btn7");
const f_8 = document.querySelector("#btn8");
const f_sqrt = document.querySelector("#btn9");
const f_e = document.querySelector("#btn10");
const f_11 = document.querySelector("#btn11");
const f_x_y = document.querySelector("#btn12");
const tengBtn = document.querySelector("#teng");
const elOutput = document.querySelector("#output");
const calcBox = document.querySelector("#calc-box");

calcBox.addEventListener('click', (e) => {
  if (!e.target.classList.contains('btnn')) return;
  if (e.target.classList.contains('btnn')) {
    return elOutput.innerHTML += e.target.innerHTML;
  }
  if (e.target.classList.contains('ff-fun')) {
    return elOutput.innerHTML += e.target.innerHTML;
  }
})

tengBtn.addEventListener("click", addResult);
function addResult() {
  let output = (eval(elOutput.innerHTML));
  elOutput.textContent = output;
}
elDeletOne.addEventListener("click", () => {
  let num = elOutput.innerHTML.split('').pop()
  if (num == '-' || num == '+' || num == '/' || num == '*') {
    elOutput.innerHTML = "";
  }
  else if (elOutput.innerHTML < 1) {
    elOutput.innerHTML = "";
  }
  else if (elOutput.innerHTML > 1) {
    elOutput.innerHTML = (elOutput.innerHTML - num) / 10;
  }
})

// f_sqrt.addEventListener("click", () => {
//   elOutput.innerHTML = Math.sqrt(elOutput.innerHTML);
// });
// PI.addEventListener("click", () => {
//   elOutput.innerHTML = Math.pow(elOutput.innerHTML, 2);
// });
// sin.addEventListener("click", () => {
//   elOutput.innerHTML = Math.sin(elOutput.innerHTML);
// })
// cos.addEventListener("click", () => {
//   elOutput.innerHTML = Math.cos(elOutput.innerHTML);
// })
// log.addEventListener("click", () => {
//   elOutput.innerHTML = Math.log(elOutput.innerHTML);
// })
// tan.addEventListener("click", () => {
//   elOutput.innerHTML = Math.tan(elOutput.innerHTML);
// })

f_x_.addEventListener("click", () => {
  let temp = 1;
  for (let i = 1; i <= elOutput.innerHTML; i++) {
    temp *= i;
  }
  elOutput.innerHTML = temp;
})

btn4.addEventListener('click', () => {
  elOutput.innerHTML = '';
})
