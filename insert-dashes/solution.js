function insertDash(num) {
  var numbers = '' + num;
  var result = '';
  for(var i = 0; i < numbers.length; i++) {
    if(i > 0 && numbers[i-1] % 2 !== 0 && numbers[i] % 2 !== 0) {
      result += '-';
    }
    result += numbers[i];
  }

  return result;
}