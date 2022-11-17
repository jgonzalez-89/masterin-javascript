let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLargerThan(num, obj) {
    // your code here
    for (const o in obj) {
        if (obj[o] > num) {
            delete obj[o];
        }
    }

    return obj;
}