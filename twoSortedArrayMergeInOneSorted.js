function twoSortedArrayMergeInOneSorted(arr, brr){
    let result = [];
    brr.push(...arr);
    // console.log(brr)
    ;
    let index = 0;
    for(let i = 0; i < brr.length ; i++){
        let min = brr[i]
        for(let j = i; j < brr.length ; j++){
            if(min > brr[j]){
                min = brr[j];
                index = j;
            }
        }
        let tmp = brr[i];
        brr[i] = brr[index];
        brr[index] = tmp;
        console.log(brr);

    }
    return brr;
}

let arr = [1,3,5,7,9];
let brr = [2,4,6,8,10];
// console.log(twoSortedArrayMergeInOneSorted(arr, brr));


//optimized code

function twoSortedArrayMergeInOneSortedOptimize(arr, brr){
    let i = 0;
    let j = 0;
    let res = [];
    while(i < arr.length && j < brr.length){
        if(arr[i] < brr[j]){
            res.push(arr[i]);
            i++;
        }
        else{
            res.push(brr[j]);
            j++;
        }
    }
    while(i < arr.length){
        res.push(arr[i]);
        i++;
    }
    while(j < brr.length){
        res.push(brr[j]);
        j++
    }
    return res;
}
let arr1 = [1,3,5,7,9];
let brr2 = [2,4,6,8,10];
console.log(twoSortedArrayMergeInOneSortedOptimize(arr1, brr2));