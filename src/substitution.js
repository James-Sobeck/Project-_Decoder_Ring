// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    const cypher = {};
    if(!alphabet || alphabet.length < 26 || alphabet.length > 26) return false;
    //97 - 122  char codes a-z
    let charCode = 97;
    for(let i = 0; i <= 25; i++){ //for each letter in the alphabet 
      if(Object.values(cypher).includes(alphabet[i])){ return false; }//if the value in obj already exists then false
      else{
        cypher[String.fromCharCode(charCode)] = alphabet[i];//set each value in obj to char in alphabet
        charCode++; //moves to the next ascii char
      }
    }
    const encodedArray = input.toLowerCase().split(''); //input as char
    { //encode or decode here
		  return encodedArray.map(letter => {  //each char in input
		  	for(let normChar in cypher){  //each value in key obj
          if(letter == " ") return " "; //keep spaces
		  		if(encode && letter == normChar) return cypher[normChar]; //encode - if input letter = key's string of normChar, return the value of obj
          if(!encode && letter == cypher[normChar]) return normChar; //decode - if our input letter equals a newLet, return the key of obj
      }
		}).join(''); //returns the array as a string 
    }
    
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
