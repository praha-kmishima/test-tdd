export class Calculator {
  static execute(args: string[]): number | string {
    if (args.length < 1) {
      return 'Error: 引数が不足しています';
    }

    if (args.length > 31) {
      return 'Error: 引数が多すぎます';
    }

    if (args.slice(1).some(arg => isNaN(Number(arg)))) {
      return 'Error: 数値以外の引数が含まれています';
    }

    const operation = args[0];
    const numbers = args.slice(1).map(Number);


    switch (operation) {
      case 'add':
        const addResult = numbers.reduce((acc, curr) => acc + curr, 0);
        if (addResult > 1000) {
          return 'too big';
        }
        return addResult;
      case 'multiply':
        const multiplyResult = numbers.reduce((acc, curr) => acc * curr, 1);
        if (multiplyResult > 1000) {
          return 'big big number';
        }
        return multiplyResult;
      case 'subtract':
        // 最初の値から減算する

        const initialValue = numbers[0];
        const subtractResult = numbers.slice(1).reduce((acc, curr) => acc - curr, initialValue);
        if (subtractResult < 0) {
          return 'negative number';
        }
        return subtractResult;
      case 'divide':
        const divideInitialValue = numbers[0];
        // 0で除算した場合はエラーを返す
        if (numbers.slice(1).some(arg => arg === 0)) {
          return 'Error: 0による除算はできません';
        }
        const divideResult = numbers.slice(1).reduce((acc, curr) => acc / curr, divideInitialValue);
        return divideResult;
      default:



        return 'Error: 不正な操作です';



    }
  }
} 