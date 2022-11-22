function convertDoubleSpaceToSingle(str) {
    // your code here
    let mipo = str.split('  ');
    let mipospace = mipo.join(' ');
    return mipospace;
    
}
let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"