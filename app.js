// https://www.omnicalculator.com/conversion/degrees-to-seconds

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const secondsRadio = document.getElementById('secondsRadio');
const degreesRadio = document.getElementById('degreesRadio');

let seconds;
let degrees = v; 

// labels of the inpust
const variable = document.getElementById('variable');

secondsRadio.addEventListener('click', function() {
  variable.textContent = 'Degrees';
  degrees = v;
  result.textContent = '';
});

degreesRadio.addEventListener('click', function() {
  variable.textContent = 'Seconds';
  seconds = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(secondsRadio.checked)
    result.textContent = `Seconds = ${computeseconds().toFixed(5)}`;

  else if(degreesRadio.checked)
    result.textContent = `Degrees = ${computedegrees().toFixed(5)}`;
})

// calculation

function computeseconds() {
  return Number(degrees.value) * 3600;
}

function computedegrees() {
  return Number(seconds.value) / 3600;
}