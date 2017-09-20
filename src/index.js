module.exports = function check(str, bracketsConfig) {
  var massLength=bracketsConfig.length;
  for(var i=0;i<massLength;i++)
    bracketsConfig[i]=bracketsConfig[i][0]+bracketsConfig[i][1];
  var flag=true;
  while(flag) {
    flag=false;
    var index;
    for(var i=0;i<massLength;i++){
      index=str.indexOf(bracketsConfig[i]);
      if(index!=-1){
        str=str.substr(0,index)+str.substr(index+2,str.length-1);
        flag=true;
      }
    }
  }
  if(str.length)
    return false;
  else
    return true;
}
