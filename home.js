let finishCal = false;
let ansHistory = [];

var display = document.querySelector("#display-text");
console.log(eval(display.innerHTML));

var display_text = display.innerHTML;

function insert(value) {
  if (finishCal) {
    display.innerHTML = "";
    finishCal = false;
    display.innerHTML += value.value;
  } else {
    display.innerHTML += value.value;
  }
}

function clearFunc() {
  //   display.innerHTML = "";
  display.innerHTML = "";
  console.log("yes");
}

function delFunc() {
  // console.log(display.innerHTML[display.innerHTML.length-1]);
  display.innerHTML = display.innerHTML.substring(
    0,
    display.innerHTML.length - 1
  );
}

function equal() {
  display.innerHTML = eval(display.innerHTML);
  finishCal = true;
  ansHistory.push(eval(display.innerHTML));
}

function viewHistory() {
  ans = ansHistory[ansHistory.length - 1];
  if (finishCal) {
    display.innerHTML = "";
    finishCal = false;
    display.innerHTML += ans;
  } else {
    display.innerHTML += ans;
  }
}
