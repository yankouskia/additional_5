module.exports = function parenthesesAreBalanced(string,parentheses) {

    var parentheses = parentheses.toString().replace(new RegExp(",","g"),"");
    var stack = [], character, bracePosition;

    for(let i = 0; character = string[i]; i++) {
        bracePosition = parentheses.indexOf(character);

        if(parentheses[bracePosition] === parentheses[bracePosition+1])
        {
            if((string.split(character).length-1)%2) return false;
            string.replace(new RegExp(character,"g"),"");
            continue;
        }
        if(bracePosition === -1) {
            continue;
        }

        if(bracePosition % 2 === 0) {
            stack.push(bracePosition + 1); // push next expected brace position
        } else {
            if(stack.length === 0 || stack.pop() !== bracePosition) {
                return false;
            }
        }
    }

    return stack.length === 0;
}