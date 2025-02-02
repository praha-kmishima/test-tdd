import { Calculator } from '../src/calculator';

describe('Calculator', () => {
  describe('基本機能', () => {
    test('コマンドライン引数からoperationと数値を正しく取得できる', () => {
      // add操作のテスト
      expect(Calculator.execute(['add', '1', '2'])).toBe(3);
      
      // multiply操作のテスト
      expect(Calculator.execute(['multiply', '2', '3'])).toBe(6);
    });

    test('引数が1個未満の場合エラーを返す', () => {
      expect(Calculator.execute([])).toBe('Error: 引数が不足しています');
    });

    test('引数が31個以上の場合エラーを返す', () => {
      const manyArgs = ['add', ...Array(31).fill('1')];
      expect(Calculator.execute(manyArgs)).toBe('Error: 引数が多すぎます');
    });

    test('数値以外の引数が含まれる場合エラーを返す', () => {
      expect(Calculator.execute(['add', '1', 'abc', '2']))
        .toBe('Error: 数値以外の引数が含まれています');
    });

  });

  describe('加算（add）のテスト', () => {
    test('2つの正の整数を足して正しい結果を返す', () => {
      expect(Calculator.execute(['add', '1', '2'])).toBe(3);
    });

    test('3つ以上の数値を足して正しい結果を返す', () => {
      expect(Calculator.execute(['add', '1', '2', '3'])).toBe(6);
    });

    test('結果が1000を超える場合は "too big" を返す', () => {
      expect(Calculator.execute(['add', '1000', '1'])).toBe('too big');
    });

    test('小数点を含む数値の加算が正しく動作する', () => {
      expect(Calculator.execute(['add', '1.5', '2.5'])).toBe(4);
    });
  });

  describe('減算（subtract）のテスト', () => {
    test('2つの数値の減算が正しく動作する', () => {
      expect(Calculator.execute(['subtract', '5', '3'])).toBe(2);
    });

    test('3つ以上の数値の連続した減算が正しく動作する', () => {
      expect(Calculator.execute(['subtract', '10', '2', '3'])).toBe(5);
    });

    test('結果が負の数になる場合は "negative number" を返す', () => {
      expect(Calculator.execute(['subtract', '1', '2'])).toBe('negative number');
    });

    test('小数点を含む数値の減算が正しく動作する', () => {
      expect(Calculator.execute(['subtract', '2.5', '1.5'])).toBe(1);
    });
  });

  describe('乗算（multiply）のテスト', () => {
    test('2つの数値の乗算が正しく動作する', () => {
      expect(Calculator.execute(['multiply', '2', '3'])).toBe(6);
    });

    test('3つ以上の数値の乗算が正しく動作する', () => {
      expect(Calculator.execute(['multiply', '2', '3', '4'])).toBe(24);
    });

    test('0を含む数値の乗算が正しく動作する', () => {
      expect(Calculator.execute(['multiply', '2', '0', '4'])).toBe(0);
    });

    test('結果が1000を超える場合は "big big number" を返す', () => {
      expect(Calculator.execute(['multiply', '1000', '1', '2'])).toBe('big big number');
    });

  });
}); 