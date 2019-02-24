// first solution

function sumEvenNumbers(input) {
  let answer=[];
  
  for(let i=0; i<input.length;i++){
    if(input[i] % 2 === 0) {
      answer.push(input[i]);
    }
  }
  
  return answer.reduce((x,y)=> x+y);
}



//best practiced solution

function sumOfEvenNumbers(input) {
  return input.filter((x,y) => x+(y%2 ===0&&y),0);
}