function random (firstNumber, lastNumber) {
  if (firstNumber>lastNumber) {
    const temp = firstNumber;
    firstNumber = lastNumber;
    lastNumber = temp;
  }
  const rand = firstNumber - 0.5 + Math.random() * (lastNumber - firstNumber + 1);
  return Math.round(rand);
}

random (1,10);

function checkString (text, maxLength) {
  if (text.length<=maxLength) {
    return true;
  }
  return false;
}

checkString ('Cтрока на проверку', 140);
