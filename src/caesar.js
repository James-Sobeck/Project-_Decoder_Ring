// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    //shift lettter by shift amount
    //if encode = false then decode
    //input is a string
    //make sure to check for shift constrants
    if(!shift ||shift === 0 || shift < -25 || shift > 25){
      return false;
    }
    // declare answer holder and alphabet 
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    input = input.toLowerCase();
    
    if(encode){
      for(let i = 0; i<input.length; i++){
        if(alpha.includes(input[i])){ //if not a symbol
          const char = input[i]; //char of input, one char at a time
          const indexAlpha = alpha.indexOf(input[i]); // index of the letter
          if(char === alpha[indexAlpha]){                                            
            let newIndex = indexAlpha + shift; //encode is plus shift
            if( newIndex < 0){newIndex = newIndex+26}; //if less than zero then add 26 to "reset" it to loop around alpha
            if( newIndex > 25){newIndex = newIndex -26}; //reverse of line above, > 25 is to allow the case of z 
            newChar = alpha[newIndex];
            result += newChar;
          }
        } else{
          result += input[i]; //handles case if not letter so symbol or space
        }
      }
    }else{
      //decode it here so reverse of above 
      for(let i = 0; i<input.length; i++){
        if(alpha.includes(input[i])){ //if not a symbol
          const char = input[i]; //char of input, one char at a time
          const indexAlpha = alpha.indexOf(input[i]); // index of the letter
          if(char === alpha[indexAlpha]){                                      
            let newIndex = indexAlpha - shift;  //decode means minus shift
            if( newIndex < 0){newIndex = newIndex+26}; //if less than zero then add 26 to "reset" it to loop around alpha
            if( newIndex > 25){newIndex = newIndex -26}; //reverse of line above, > 25 is to allow the case of z 
            newChar = alpha[newIndex]; //char is now the char in alpha at the index which was shifted 
            result += newChar; 
          }
        } else{
          result += input[i]; //handles case if not letter so symbol or space
        }
    }
    
  }
  return result;
}

  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };
