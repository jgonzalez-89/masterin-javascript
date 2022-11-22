function countNumberOfKeys(obj) {
    // your code here
    let count = 0;
    for (const key in obj) {
        count++;

    }
    return count;

}

let obj = {
    a: 1,
    b: 2,
    c: 3
  };

let output = countNumberOfKeys(obj);
console.log(output);
