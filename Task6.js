function ObjectValuesByKey(arr, key) {
    return arr.map(obj => obj[key]);
  }
  let myArr = [
    { name: 'Anas Khan ', age: 20 },
    { name: 'Muzammil', age: 20 },
    { name: 'Hammad Khan', age: 20 }
  ];

  let values = ObjectValuesByKey(myArr, 'name');
  console.log(values); 