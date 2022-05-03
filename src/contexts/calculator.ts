const doMath = (parsedUserInput:Array<any>) => {
  const calculations:Array<any> = [
    {
      '*': (a:number, b:number) => a * b,
      '/': (a:number, b:number) => a / b,
    },
    {
      '+': (a:number, b:number) => a + b,
      '-': (a:number, b:number) => a - b,
    },
  ];
  let calculatedInput = parsedUserInput;
  let newCalc:Array<number> = [];
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
    console.log(calculatedInput);
    calculatedInput = newCalc;
    newCalc = [];
  }
  if (calculatedInput.length > 1) {
    throw new Error('Некорректный расчет');
  }
  return calculatedInput[0];
};

export default doMath;
