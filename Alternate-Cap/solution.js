function capitalize(s){
  let names = s.split("");
  let odd =[];
  let even =[];
  for(let i=0; i < names.length; i++)
  {
  
   if (i%2===0)
   {
    odd.push(names[i].toUpperCase());
    even.push(names[i]);
  }
     else {
   even.push(names[i].toUpperCase());
   odd.push(names[i]);
  }
  }
  
    return [odd.join(""), even.join("")];
  };