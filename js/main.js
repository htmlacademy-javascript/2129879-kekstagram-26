const errorMessage = 0;
const maxLength = 140;
let stringLength;

function random (firstNumber, lastNumber) {
  if (firstNumber>=0 && lastNumber>=0) {
    const rand = firstNumber - 0.5 + Math.random() * (lastNumber - firstNumber + 1);
    return Math.round(rand);
  } return (errorMessage);

}

random (1,10);

function checkString () {
  if (stringLength<=maxLength) {
    return true;
  }
  return false;

}

checkString ();
