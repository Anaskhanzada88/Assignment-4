function ObjectKeys(obj) {
    return Object.keys(obj);
  }
  const myObj = {
    name: 'Anas Khan',
    age: 20,
    city: 'karachi'
  };

  let keys = ObjectKeys(myObj);
  console.log(keys); 