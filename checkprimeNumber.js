
function checkPrimeNumber(num){
    let count = 1;
    for(let i = 2; i <= num/2; i++){
        if(num % i === 0){
            count++;
        }
    }
    if(count === 1){
        return "Yes, It's prime number";
    }
    return "No, It's not a prime number";
}

console.log(checkPrimeNumber(29));