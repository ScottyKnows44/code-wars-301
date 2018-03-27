function cubeOdd(arr) {
  var total = 0;
  for (var i = 0; i <arr.length; i++){
    var cubed = (arr[i]*arr[i]*arr[i]);
    if (isNaN(cubed)) return undefined;
    if(cubed % 2 != 0 )total += cubed;
  }
  return total;
}