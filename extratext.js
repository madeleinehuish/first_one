function combine(obj1, obj2){
  var keys1 = Object.keys(obj1);
  var keys2 = Object.keys(obj2);
  var properties1 = Object.getOwnPropertyNames(obj1);
  var properties2 = Object.getOwnPropertyNames(obj2);
  var newKeyArray = keys1.concat(keys2);
  var newPropertiesArray = properties1.concat(properties2);
  for (i = 0; i < newKeyArray.length; i++){
    for (j = 0; i < newKeyArray.length; j++)
      if (newKeyArray[i] === newKeyArray[j]){
        newPropertiesArray[i] = newPropertiesArray[j];
        newPropertiesArray[]
        newKeyArray[i].splice() =
      }
  }
