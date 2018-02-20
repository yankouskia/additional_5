module.exports = function check(str, bracketsConfig) {
  	return findCloseBrackets(string,bracketsConfig);
}

function findCloseBrackets(arrray,config) {
	action=[];
	for(i=0; i<arrray.length; i++){
		element = findElement(arrray[i],config);
		if(element[0] === element[1]) {
			if((action.length === 0)||(action[action.length-1]!== element[0])) action.push(arrray[i]);
			else action.pop();
		} else {
			if(arrray[i] === element[0]) action.push(arrray[i]);
			else if((arrray[i] === element[1])&&(action[action.length-1]===element[0])) action.pop();
			else if((arrray[i] === element[1])&&(action[action.length-1]!==element[0])) action.push(arrray[i]);
		}
	}
	return action.length === 0? true: false;
}

function findElement(elem,config) {
	for(element of config){
		if((elem === element[0])||(elem===element[1]))
			return element;
	}
	return false;
}

module.exports = function check(str, bracketsConfig) {
  	string=str.split('');
  	return findCloseBrackets(string,bracketsConfig);
}

function findCloseBrackets(arrray,config) {
	action = [];
	for(i = 0; i<arrray.length; i++){
		element = findElement(arrray[i],config);
		if(element[0] === element[1]) {
			if((action.length === 0)||(action[action.length-1]!== element[0])) action.push(arrray[i]);
			else action.pop();
		} else {
			if(arrray[i] === element[0]) action.push(arrray[i]);
			else if((arrray[i] === element[1])&&(action[action.length-1]=== element[0])) action.pop();
			else if((arrray[i] === element[1])&&(action[action.length-1]!== element[0])) action.push(arrray[i]);
		}
	}
	return action.length===0?true:false;
}

function findElement(elem,config) {
	for(element of config){
		if((elem === element[0])||(elem === element[1]))
			return element;
	}
	return false;
}
