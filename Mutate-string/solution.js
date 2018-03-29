function mutateMyStrings(stringOne, stringTwo){
  let arrayOfStringOne = stringOne.split('');
  let arrayOfTwo = stringTwo.split('');
  let mutatedString = [];
  mutatedString = [arrayOfStringOne.join('')];

  for (var i = 0; i < arrayOfStringOne.length; i++) {
    if (arrayOfStringOne[i] !== arrayOfTwo[i]) {
      arrayOfStringOne[i] = arrayOfTwo[i];
      mutatedString.push(arrayOfStringOne.join(''));
    }
  }
  return mutatedString.join('\n') + '\n';

}