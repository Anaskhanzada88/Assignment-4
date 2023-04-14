function getUniqueStrings(arr) {
    return [...new Set(arr)];
  }
  const myArr = ['French fries', 'Pepsi', 'Zinger', 'French fries', 'Pepsi', 'Zinger'];
const uniqueStrings = getUniqueStrings(myArr);
console.log(uniqueStrings);