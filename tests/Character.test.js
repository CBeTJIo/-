const Character = require('../src/Character.js');

describe('Character class', () => {
  test('should create character with valid parameters', () => {
    const char = new Character('Test', 'Bowman', 25, 25);
    expect(char.name).toBe('Test');
    expect(char.type).toBe('Bowman');
    expect(char.health).toBe(100);
    expect(char.level).toBe(1);
    expect(char.attack).toBe(25);
    expect(char.defence).toBe(25);
  });

  test('should throw error for invalid name length', () => {
    expect(() => new Character('A', 'Bowman', 25, 25)).toThrow('Имя должно быть строкой от 2 до 10 символов');
    expect(() => new Character('VeryLongNameHere', 'Bowman', 25, 25)).toThrow('Имя должно быть строкой от 2 до 10 символов');
  });

  test('should throw error for invalid type', () => {
    expect(() => new Character('Test', 'InvalidType', 25, 25)).toThrow('Неверный тип персонажа');
  });

  test('levelUp should increase level and stats', () => {
    const char = new Character('Test', 'Bowman', 25, 25);
    char.levelUp();
    expect(char.level).toBe(2);
    expect(char.attack).toBe(30);
    expect(char.defence).toBe(30);
    expect(char.health).toBe(100);
  });

  test('levelUp should throw error for dead character', () => {
    const char = new Character('Test', 'Bowman', 25, 25);
    char.health = 0;
    expect(() => char.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
  });

  test('damage should reduce health correctly', () => {
    const char = new Character('Test', 'Bowman', 25, 25);
    char.damage(40);
    expect(char.health).toBe(70);
  });

  test('damage should not reduce health below 0', () => {
    const char = new Character('Test', 'Bowman', 25, 25);
    char.damage(200);
    expect(char.health).toBe(0);
  });
});
