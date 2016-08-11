var numbers = [2,4,6];
function average (numbers){
  for (i = 0; i < numbers.length +1; i ++){
    var total = total + numbers[i];
  }
  console.log(total/numbers.length);
}

average(numbers);
