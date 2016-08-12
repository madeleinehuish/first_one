var num = [2,4,6];
var total = 0;
function average(numbers){
  for (i = 0; i < numbers.length; i ++){
    total = total + numbers[i];
  }
  console.log(total/numbers.length);
}

average(num);
