function beggars(value, n) {
  let totals = [];
  for(let i=1; i<=n; i++ ){
    let sum = 0;
    for(let j = i; j<= value.length; j+=n){
      sum += value[j-1];
    }
    totals.push(sum);
  }
  return totals
}