function scopeExample(){
  var num1 = 5;
  var num2 = 6;
  num3 = 7;

  console.log(num1, num2, num3, num4, "-> num1, num2, num3 and num4 are defined from inside scopeExample");


}

num4 =12345;
console.log(num4, "-> Only num4 is defined at this point");
scopeExample();
console.log(num3,num4, "-> Only num3 and num4 exist now");
