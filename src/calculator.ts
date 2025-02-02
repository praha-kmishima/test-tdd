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
        return numbers.reduce((acc, curr) => acc + curr, 0);
      case 'multiply':
        return numbers.reduce((acc, curr) => acc * curr, 1);
      default:
        return 'Error: 不正な操作です';
    }
  }
} 