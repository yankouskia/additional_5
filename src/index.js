module.exports = function check(str, bracketsConfig) {
  var result = true;
  for (var i = 0; i < bracketsConfig.length; i++) { // цикл по парам скобочек
      var pair = bracketsConfig[i];
      result = validateTextByPair(str, pair);
      if (result === false) { break; }
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

//check('()', [['(', ')']]);
