// Write your function here
function getAverageOfElementsAtProperty(obj, key){
  if(!obj[key] || obj[key].length == 0){
      return 0;
  }

  let arr = obj[key];
  let sum = 0;

  arr.forEach((n)=>{
      sum+=n
  })

  return sum / arr.length;
}

let obj = {
    key: [1, 2, 3]
  };

  let output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output);