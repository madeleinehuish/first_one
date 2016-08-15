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

  function combine(obj1, obj2){
    for (key1 in obj1){
      for (key2 in obj2){
        if (key1 === key2) {
          obj1[key1] = obj2[key2];
          delete obj2[key2];
        }
      }
      var x = Object.keys(obj1).concat(Object.keys(obj2));
      return x;
    }

    var objA = { a: 1, b: 1, c: 1, d: 1 };
var objB = { a: 2, b: 2, c: 2, d: 2 };

function combine(obj1, obj2){
  for (var key1 in obj1){
    for (var key2 in obj2){
      if (key1 === key2) {
        obj1[key1] = obj2[key2];
        delete obj2[key2];

    var x = Object.keys(obj1).concat(Object.keys(obj2));
    return x;
        }
    }
}

  } combine(objA, objB);

  function values(obj){
    var i = 0;
    var objectArray = [];
    for (prop in obj)
      objectArray[i] = obj[prop];
      i = i + 1;
      return objectArray;
  }

  function values(obj){
    var i = 0;
    var objectArray = [];
    for (prop in obj)
      console.log(obj.prop);

  }
  function toPairs(obj){
    var newArray = [];
    var i = 0;
    for (var prop in obj) {
      for
      (i = 0, i < Object.keys(obj).length; i++)
      {newArray[i] = [obj[prop], prop];} //end for i loop
    } // end for in loop
    return newArray;

  } // end function


// ROSS function
  function replace(arr, start, to) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
       console.log(arr[i]);
        if (arr[i] === start) {
          newArr = [].slice(arr[i], 1);
        }
    }
 //console.log(newArr);
}

//Mine
function replace (arr, from, to){
  for (i = 0; i < arr.length; i ++){
    if (arr[i] === from){
      arr[i] = to;
    }

  }
return arr;
}

function bigSum(1,2,3,4) {
  var sum = 0;
  var args = Array.prototype.slice.call(arguments);
  return args;
  if (arguments.length < 1){
    return 0;
  } else {
  for (i=0; i < args.length; i++){
    sum = sum + args[i];
  }
}return sum;
}
