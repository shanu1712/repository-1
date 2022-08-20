const ele1 = document.getElementById('changeCount');
let count = 0;

function increment() {
  count++;
  ele1.innerText = count;

}

function decrement() {
  count--;
  ele1.innerText = count;
}

function multiplication() {
  var a = document.getElementById('inputNumber1').value;
  var b = document.getElementById('inputNumber2').value;
  //let ele4=document.getElementById('multi');

  document.getElementById('displayResult').innerHTML = (a * b);

}
function divide() {
  var a = document.getElementById('inputNumber1').value;
  var b = document.getElementById('inputNumber2').value;
  document.getElementById('displayResult').innerHTML = (a / b);
}

