var words = process.argv.slice(2).join("");

function countLetters(input){
  var output ={};
  var keys = [];
  //change input into no space lower case
  var string = input.toLowerCase().split(" ").join("");
  // looping through input string
  for (let i of string){
    keys = Object.keys(output);
    var exists = false;
    //checking if letter already exists
    //looping through the keys of output
    for(let j of keys){
      if (i === j) {
        output[j] +=1;
        exists = true;
      }
    }
    //if letter does not exist in output, add to keys
    if (exists === false){
        output[i] = 1;
      }
  }
  return output;
}
console.log (countLetters(words));