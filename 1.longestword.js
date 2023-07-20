let input = "myy name is ankit jain and i'm from morena";
function longestWord(input) {
  let splitInput = input.split(" ");
  //   console.log(splitInput);
  let long = "";
  for (let i = 0; i < splitInput.length; i++) {
    if (splitInput[i].length > long.length) {
      long = splitInput[i];
    }
  }
  return long;
}
console.log(longestWord(input));
