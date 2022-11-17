let output = addToFront([1, 2], 3);

function addToFront(arr, element) {
  // your code here
  arr.unshift(element);
  return arr;
}


console.log(output); // -> [3, 1, 2]

