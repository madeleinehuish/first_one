var myArray = ["Garvey","Bhairava","Leo","Luna","Deitrick"];
console.log(myArray);
console.log(myArray[100]);
console.log(myArray[-1]);

var books =['JavaScript: The Good Parts', 'Eloquent JS', 'You don\'t know Javascript'];

for (var i=0; i < books.length; i++){
  var book = books[i];
  console.log(book);
}

var newArray = [1,2,3,4];
for (var j=0; j < newArray.length; j++){
  newArray[j] = newArray[j]*2;
}
console.log(newArray);

var lines = [
    'It\'s me.',
    'Can you hear me?',
    'from the other side',
    'from the outside'
];
for (i=0; i < lines.length; i++){
  console.log('Hello ' + lines[i]);
}
