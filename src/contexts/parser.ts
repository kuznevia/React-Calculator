const symbols = ['*', '/', '+', '-'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

const parenthesesPreParse = (input:Array<string>): Array<string> => {
  const parsedInput = input.reduce((acc:Array<any>, element) => {
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

const parseInput = (input:string) => {
  let tempNumberString = '';
  const splittedUserInput = typeof input === 'string' ? input.split('') : input;
  const preparsedUserInput = parenthesesPreParse(splittedUserInput);
  const parsedUserInput = preparsedUserInput.reduce((acc:Array<any>, element, index, arr) => {
    if (typeof element === 'object') {
      const parsedElement = parseInput(element);
      acc.push(parsedElement);
    } else if (symbols.includes(element)) {
      if (tempNumberString !== '') {
        acc.push(tempNumberString);
        tempNumberString = '';
      }
      acc.push(element);
    } else if (numbers.includes(element)) {
      if (index === arr.length - 1) {
        tempNumberString += element;
        acc.push(tempNumberString);
      }
      tempNumberString += element;
    } else {
      throw new Error('Некорректный ввод');
    }
    return acc;
  }, []);
  return parsedUserInput;
};

export default parseInput;
