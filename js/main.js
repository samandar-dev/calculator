let funBtn = document.querySelector("#calc__func");
let funBox = document.querySelector("#funBox");

funBtn.addEventListener('click', function () {
  funBox.classList.toggle("fun-open");
})

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const remove = document.querySelector("#remove");
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
const sin = document.querySelector("#fbtn1");
const cos = document.querySelector("#fbtn2");
const tan = document.querySelector("#fbtn3");
const f_x_ = document.querySelector("#fbtn4");
const PI = document.querySelector("#fbtn5");
const log = document.querySelector("#fbtn6");
const f_7 = document.querySelector("#fbtn7");
const f_8 = document.querySelector("#fbtn8");
const f_sqrt = document.querySelector("#fbtn9");
const f_e = document.querySelector("#fbtn10");
const f_11 = document.querySelector("#fbtn11");
const f_x_y = document.querySelector("#fbtn12");
const tengBtn = document.querySelector("#teng");
const elOutput = document.querySelector("#output");
const calcBox = document.querySelector("#calc-box");

let sanoq = true;
let w = '';
let str = [];
let a = [];
let b = [];

// TARGET NUMBERS

calcBox.addEventListener('click', (e) => {
  if (!e.target.classList.contains('btnn')) return;
  if (e.target.classList.contains('btnn')) {
    str += e.target.innerHTML;
    fun(str);

    if (sanoq == false && e.target.innerHTML == '+') {
      sanoq = true
      console.log(w);
      return elOutput.innerHTML += e.target.innerHTML;
    }
    else if (sanoq == false && e.target.innerHTML == '-') {
      sanoq = true
      return elOutput.innerHTML += e.target.innerHTML;
    }
    else if (sanoq == false && e.target.innerHTML == '*') {
      sanoq = true
      return elOutput.innerHTML += e.target.innerHTML;
    }
    else if (sanoq == false && e.target.innerHTML == '/') {
      sanoq = true
      return elOutput.innerHTML += e.target.innerHTML;
    }
    else if (sanoq == false && e.target.innerHTML == '%') {
      sanoq = true
      return elOutput.innerHTML += e.target.innerHTML;
    }
    else if (e.target.innerHTML != '+' && e.target.innerHTML != '-' && e.target.innerHTML != '*' && e.target.innerHTML != '/' && e.target.innerHTML != '%') {
      sanoq = false
      return elOutput.innerHTML += e.target.innerHTML;
    }
  }
})

// REMOVE

remove.addEventListener('click', () => {
  elOutput.innerHTML = '';
})

// DELETE NUMBERS

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

// FUN

function fun(e) {
  tengBtn.addEventListener('click', () => {
    for (let i = 0; i < e.length; i++) {
      let index = str[i];
      if (index != '+' && index != '-' && index != '*' && index != '/' && index != '%') {
        a += index;
      } else {
        elOutput.innerHTML = eval(elOutput.innerHTML);
      }
    }
  })
}

// SIN PART 

sin.addEventListener('click', () => {
  elOutput.innerHTML = Math.sin(elOutput.innerHTML)
});

// COS PART 

cos.addEventListener('click', () => {
  elOutput.innerHTML = Math.cos(elOutput.innerHTML)
});

// TAN PART 

tan.addEventListener('click', () => {
  elOutput.innerHTML = Math.tan(elOutput.innerHTML)
});

// X! PART 

f_x_.addEventListener("click", () => {
  let son = 1;
  for (let i = 1; i <= elOutput.innerHTML; i++) {
    son *= i;
  }
  elOutput.innerHTML = son
})

// PI PART 

PI.addEventListener('click', () => {
  elOutput.innerHTML = Math.PI
});

// LOG PART 

log.addEventListener('click', () => {
  elOutput.innerHTML = Math.log(elOutput.innerHTML)
});

// E PART 

f_e.addEventListener('click', () => {
  elOutput.innerHTML = Math.E
});

// SQRT PART 

f_sqrt.addEventListener('click', () => {
  elOutput.innerHTML = Math.sqrt(elOutput.innerHTML)
});

// x/y PART 

f_x_y.addEventListener('click', () => {
  elOutput.innerHTML *= elOutput.innerHTML;
})