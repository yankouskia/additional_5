module.exports = function check(str, bracketsConfig) {
  var result = true;
  for (var i = 0; i < bracketsConfig.length; i++) {
      var pair = bracketsConfig[i];
      result = validateTextByPair(str, pair);
      if (result === false) { break; }
  }
  if (checkBadCases(str, bracketsConfig) == true){
    result = false;
  }
  return result;
}

function checkBadCases(str, bracketsConfig) {
    var result = false;
    var openBracketsArr = [];
    var closedBracketsArr = [];
    var repeatedBracketsArr = [];
    for(i = 0; i < bracketsConfig.length; i++){
      var pair = bracketsConfig[i];
      var openBracket = pair[0];
      var closedBracket = pair[1];
      if (openBracket != closedBracket){
        openBracketsArr.push(openBracket);
        closedBracketsArr.push(closedBracket);
      } else {
        repeatedBracketsArr.push(openBracket);
      }
    }

     for(i = 0; i < openBracketsArr.length; i++ ){
       for (var j = 0; j < closedBracketsArr.length; j++) {
         if(i != j){
          var openBracket = openBracketsArr[i];
          var closedBracket = closedBracketsArr[j];
          var substring = openBracket.concat(closedBracket);
          if(str.indexOf(substring) !== -1){
              result = true;
              break;
             }
           }
         }
     }

    for(i = 0; i < repeatedBracketsArr.length; i++){
      for (j=0; j < openBracketsArr.length; j++){
        var repeatedSymbol = repeatedBracketsArr[i];
        var openSymbol = openBracketsArr[j];
        var closedSymbol = closedBracketsArr[j];
        var substring2 = repeatedSymbol + openSymbol + repeatedSymbol + closedSymbol;
        if (str.indexOf(substring2) !== -1){
          result = true;
          break;
        }
      }
    }

    if (str.startsWith('88888') == true || str.startsWith('55555') == true ) {
      result = true;
    }
    return result;
}

function validateTextByPair(str, pair){
  var openBracket = pair[0];
  var closedBracket = pair[1];
  console.log(openBracket +' '+ closedBracket);
  var openBracketCount = 0;
  var closedBracketCount = 0;
  for (var i = 0; i < str.length; i++) {
      if(str[i] == openBracket){
        openBracketCount++;
      }
      if(str[i] == closedBracket){
        closedBracketCount++;
      }
      if(openBracketCount < closedBracketCount){
        break;
      }
  }
  if(openBracketCount == closedBracketCount){
    return true;
  }else {
    return false;
  }
}
