function add() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  
  if (!isNaN(num1) && !isNaN(num2)) {
    document.getElementById("result").innerText = num1 + num2;
  } else {
    document.getElementById("result").innerText = "";
  }
}

function subtract() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  
  if (!isNaN(num1) && !isNaN(num2)) {
    document.getElementById("result").innerText = num1 - num2;
  } else {
    document.getElementById("result").innerText = "";
  }
}

function multiply() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  
  if (!isNaN(num1) && !isNaN(num2)) {
    document.getElementById("result").innerText = num1 * num2;
  } else {
    document.getElementById("result").innerText = "";
  }
}

function divide() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  
  if (!isNaN(num1) && !isNaN(num2)) {
    if (num2 !== 0) {
      document.getElementById("result").innerText = num1 / num2;
    } else {
      alert("You tried to divide by zero");
    }
  } else {
    document.getElementById("result").innerText = "";
  }
}