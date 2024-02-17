function reverseOrderOftheWordsInArray(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let str = "";
        for(let j = arr[i].length - 1; j>=0;j--){
            str+=arr[i][j];
        }
        result.push(str);
    }
    return result;
}
console.log(reverseOrderOftheWordsInArray(["This","is","a","Mango"]));