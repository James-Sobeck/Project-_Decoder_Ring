// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


//add comma case
const polybiusModule = (function () {
  // you can add any code you want within this function scope
  
  function polybius(input, encode = true) {
    // your solution code here
    //letter:"number"
    const polybiusSquare = {
      1: {1: 'a', 2:'f', 3:'l', 4:'q', 5:'v'},
      2: {1: 'b', 2:'g', 3:'m', 4:'r',5:'w'},
      3: {1: 'c', 2:'h', 3:'n', 4:'s', 5:'x'},
      4: {1:'d', 2:'(i/j)', 3:'o', 4:'t', 5:'y'},
      5: {1:'e', 2:'k', 3:'p', 4:'u', 5:'z'},
    };
    const lowerInput = input.toLowerCase().split(''); //splits the string into char
    const lowerInputNOS = lowerInput.filter(nos=> nos != ' '); //just char no spaces
    if(!encode){ 
      //decode
      let decodeAnswer = ''; //holds the answer
      if(lowerInputNOS.length % 2 != 0) return false; //char string without spaces to check if there are an odd number of numbers
      for(let index = 0; index < lowerInput.length; index += 2){ //index increments by 2 to account for each letter being 2 numbers
        if(lowerInput[index] === ' '){ //if the element in string is a space, 
          decodeAnswer += ' '; // add space to answer if above is true
          index--; //reset index a space since our value was a space
        }else{ decodeAnswer += polybiusSquare[lowerInput[index]][lowerInput[index + 1]]; } //adds the char at the index:number. its in object format
      }
      return decodeAnswer; //return the decoded answer
    }else{ //else we encode
      const encodedArray = []; //empty array
      for(let letter of lowerInput){ //for each letter in input
        if(letter === ' '){ encodedArray.push(' '); } //keep our spaces 
        for(let c = 1; c < 6; c++){ //for each row
          for(let i = 1; i < 6; i++){ //for each column 
            if(polybiusSquare[c][i].includes(letter)){
              encodedArray.push(c); //push the numbers into the answer
              encodedArray.push(i);
            } 
          }
        }
      }
      return encodedArray.join(''); //return the array as a joined string
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
