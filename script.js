let result = document.getElementById("result");
let button = document.getElementById("submitButton");
let input = document.getElementById("textInput");
let check = document.getElementById("checked");

button.addEventListener("click", handleCheck);

function handleCheck(event) {
    event.preventDefault();
    let string = input.value;
    string.toLowerCase();
    result.innerHTML = `Your string was: "${string}"`;
    let arr = [];
    for(let i = 0; i < string.length; i++) {
        arr.unshift(string[i]);
    }
    let palindrome = arr.join("");
    if(palindrome == string) {
        check.innerHTML = "This is a palindrome"
        check.classList.add("correct")
    } else {
        check.innerHTML = "This is not a palindrome"
        check.classList.add("incorrect")
    }
    input.value = "";
}