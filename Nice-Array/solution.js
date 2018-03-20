function isNice(arr){
  let flag = false;
  for (let i=0; i < arr.length; i++){
  flag = (arr.includes(arr[i] - 1)||arr.includes(arr[i] + 1)) ? true : false;
  if (flag === false) {
    return flag;
    }
  }
  return flag;
}