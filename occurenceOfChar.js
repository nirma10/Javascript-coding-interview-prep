function occurenceOfChar(str){
    let charCount = {};
    for(let char of str){
        //optimized code.
        charCount[char] = (charCount[char] || 0) + 1; 


        // if(char in charCount){
        //     charCount[char] =  charCount[char]+1;
        // }
        // else{
        //     charCount[char] = 1;
        // }
    }
    return charCount;
}


console.log(occurenceOfChar("abcdabceaa"));

// str = "vandana";
// console.log(str[0]);