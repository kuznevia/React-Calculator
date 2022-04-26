const symbols = ['*', '/', '+', '-'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

const parenthesesPreParse = (input) => {
  const parsedInput = input.reduce((acc, element) => {
    acc.push(element);
    if (acc.includes('(') && acc.includes(')')) {
      const leftBracketIndex = acc.indexOf('(');
      const rightBracketIndex = acc.indexOf(')');
      const newArr = acc.splice(leftBracketIndex, rightBracketIndex - leftBracketIndex + 1);
      newArr.pop();
      newArr.shift();
      acc.push(newArr);
    }
    return acc;
  }, []);
  return parsedInput;
};

const parseInput = (input) => {
  let tempNumberString = '';
  const splittedUserInput = typeof input === 'string' ? input.split('') : input;
  const preparsedUserInput = parenthesesPreParse(splittedUserInput);
  const parsedUserInput = preparsedUserInput.reduce((acc, element, index, arr) => {
    if (typeof element === 'object') {
      const parsedElement = parseInput(element);
      acc.push(parsedElement);
    }
    if (symbols.includes(element)) {
      if (tempNumberString !== '') {
        acc.push(tempNumberString);
        tempNumberString = '';
      }
      acc.push(element);
    }
    if (numbers.includes(element)) {
      if (index === arr.length - 1) {
        tempNumberString += element;
        acc.push(tempNumberString);
      }
      tempNumberString += element;
    }
    return acc;
  }, []);
  return parsedUserInput;
};

export default parseInput;
