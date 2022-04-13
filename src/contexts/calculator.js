const doMath = (parsedUserInput) => {
  const calculations = [
    {
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    },
    {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
    },
  ];
  let calculatedInput = parsedUserInput;
  let newCalc = [];
  let currentOp;
  for (let i = 0; i < calculations.length; i += 1) {
    for (let j = 0; j < calculatedInput.length; j += 1) {
      if (typeof calculatedInput[j] === 'object') {
        const calculatedArr = doMath(calculatedInput[j]);
        if (currentOp) {
          newCalc[newCalc.length - 1] = currentOp(
            (Number(newCalc[newCalc.length - 1])),
            Number(calculatedArr),
          );
          currentOp = null;
        } else {
          newCalc.push(calculatedArr);
        }
      } else if (calculations[i][calculatedInput[j]]) {
        currentOp = calculations[i][calculatedInput[j]];
      } else if (currentOp) {
        newCalc[newCalc.length - 1] = currentOp(
          (Number(newCalc[newCalc.length - 1])),
          Number(calculatedInput[j]),
        );
        currentOp = null;
      } else {
        newCalc.push(calculatedInput[j]);
      }
    }
    calculatedInput = newCalc;
    newCalc = [];
    console.log(calculatedInput);
  }
  if (calculatedInput.length > 1) {
    console.log('Ошибка');
    return calculatedInput;
  }
  return calculatedInput[0];
};

export default doMath;
