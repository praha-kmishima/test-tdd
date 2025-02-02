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
  });
}); 