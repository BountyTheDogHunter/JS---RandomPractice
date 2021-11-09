// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const welcomeMessage = 'Welcome';

var myArray = new Array();
var myShortHandArray = [12, 54, 12, 43, 56];

var total = 0;
var total2 = 0;

for (let i = 0; i < myShortHandArray.length; i++) {
  total += myShortHandArray[i];
}

myShortHandArray.forEach((element) => (total2 += element));

var newHalvedArray = myShortHandArray.map(myHalfFunction);

function myHalfFunction(num) {
  return num / 2;
}

newHalvedArray.forEach((element) => alert(element));
// alert(total2);
