function removeDuplicatesFromArray(arr){
    let obj = {};
    let result = [];
    let j = 0;
    for(let ele of arr){
        if(!obj[ele] >= 1){
            obj[ele] = (obj[ele] || 0)+1;
            result[j++] = ele;
        }
    }
    // for(let key in obj){
    //     if(obj[key] === 1){
    //         result.push(parseInt(key));
    //     }
    // }
    return result;
}

console.log(removeDuplicatesFromArray([1,1,2,3,4,2,3]));