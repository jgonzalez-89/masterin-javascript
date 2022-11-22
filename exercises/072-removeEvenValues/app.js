function removeEvenValues(obj) {
    // your code here
    for (const props in obj) {
        if (obj[props] % 2 == 0){
            delete obj[props]
        }
    }
    return obj;
}

let obj = {
    a: 2,
    b: 3,
    c: 4
  };

removeEvenValues(obj);
console.log(obj);
