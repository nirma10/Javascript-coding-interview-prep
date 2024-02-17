
//finding the maximum number.

function findMaxNumber(){
    let array = [2,6,12,3,7,8,9,1,10,12];
    let max = 0;
    for(let i = 0; i<array.length; i++){
        if(max < array[i]){
            max = array[i];
        }
    }
    return max;
}

//console.log(findMaxNumber());

function findSecondMaxFromArray(){
    let array = [1,1,1,1,1]
    let firstMax = 0;
    let secondMax = 0;
    for(let i = 0; i < array.length; i++){
        if(firstMax < array[i]){
            secondMax = firstMax;
            firstMax = array[i];
        }
        else if(secondMax < array[i] && array[i] < firstMax){
            secondMax = array[i];
        }
    }
    return secondMax;
}
// console.log(findSecondMaxFromArray());

function findMinFromArray(){
    let a = [1,3,5,0,7,4];
    let min = a[0];
    for(let i = 0; i < a.length; i++){
        if(min > a[i]){
            min = a[i];
        }
    }
    return min;
}

// console.log(findMinFromArray());

function findSecondlowestNumFromArray(){
    let a = [0,3,2,5,6,7,9];
    let firstMin = Infinity;
    let secondMin = Infinity;
    for(let i = 0; i<a.length; i++){
        if(firstMin > a[i]){
            secondMin = firstMin;
            firstMin = a[i];
        }
        else if(secondMin > a[i] && a[i] > firstMin){
            secondMin = a[i];
        }
    }
    return secondMin;
    
}

console.log(findSecondlowestNumFromArray());

