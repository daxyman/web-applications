const nums = [1, 2, 3, 4, 5];


//methode 1
const squares = nums.map(function(num){
    return num*num
});
console.log(squares);


//methode 2
const squaresCourt = nums.map(num => num*num);
console.log(squaresCourt);

