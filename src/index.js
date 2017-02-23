function closedBracked(char,a) {
    for(let i=0;i<a.length;i++)
    {
        if(a[i][0]==char) return a[i][1];
    }
    return 0;
}

module.exports = function parenthesesAreBalanced(string,parentheses) {
    var stack = [], char='', bracket;

    for(let i=0; i<string.length; i++)
    {
        char = string[i];
        bracket = closedBracked(char,parentheses);
        if (bracket!=0 && stack[stack.length-1]!= char)
            stack.push(bracket);
        else if(stack.pop()!=char)
            return false;
    }

    return stack.length === 0;
}