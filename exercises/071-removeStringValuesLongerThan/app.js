function removeStringValuesLongerThan(num, obj) {
  for (const prop in obj) {
      if (obj[prop].length > num) {
          delete obj[prop];
      }
  }

  return obj;
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};

removeStringValuesLongerThan(6, obj);
