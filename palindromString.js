function checkPalindrome(str){
    let newString = "";
    for(let i = str.length-1; i >= 0; i--){
        newString+=str[i];
    }
    if(newString === str){
        return "Yes, Palindrome";
    }
    return "Not a Palindrome";  
}

//using pre-defined  method in javascript

// console.log("ababa" === "ababA".split("").reverse().join(""));

console.log(checkPalindrome(("ababA").toLowerCase()));
