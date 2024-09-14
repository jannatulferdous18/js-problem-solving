function  fizzBuzz(arr) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]%3 === 0) {
            arr[index] = "fizz";
        }
        else if(arr[index]%5 === 0){
            arr[index] = "buzz" ;
        }
        else if(arr[index]%3 === 0 && arr[index]%5 === 0){
            arr[index] = "fizzbuzz";
        }
    }
    return arr;
}

var arr = [];
for (let index = 0; index < 100; index++) {
    arr.push(index+1);
}
var fizzBuzzArray = fizzBuzz(arr);
console.log(fizzBuzzArray);
