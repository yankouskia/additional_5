module.exports = function check(str, bracketsConfig) {
    const exceptionList = ['[', '\\', '^', '$', '.', '|', '?', '*', '+', '(', ')'];
    bracketsConfig = bracketsConfig.map((elem) => new RegExp(
            (exceptionList.includes(elem[0]) ? '\\' : '') + elem[0] +
            (exceptionList.includes(elem[1]) ? '\\' : '') + elem[1], 'gi'
        )
    );

    while (bracketsConfig.some((regexp) => str.match(regexp))) {
        bracketsConfig.forEach((regexp) => str = str.replace(regexp, ''));
    }

    return !str.length
};
