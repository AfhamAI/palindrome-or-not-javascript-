let word = prompt("Enter Your Word")
let reversed = "";
 for(let i = word.length - 1 ; i>=0 ; i--){
    reversed += word[i];

 }

     if(word===reversed){
        alert("It is palindrome");
    }
    else{
        alert("Its not palindrome");
    }
