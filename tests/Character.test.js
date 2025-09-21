const {
  Character,
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie
} = require('../src/Character');

describe('Character class hierarchy', () => {
  describe('Base Character class', () => {
    test('should create character with valid parameters', () => {
      const char = new Character('Test', 'Bowman');
      expect(char.name).toBe('Test');
      expect(char.type).toBe('Bowman');
      expect(char.health).toBe(100);
      expect(char.level).toBe(1);
    });

    test('should throw error for invalid name length', () => {
      expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
      expect(() => new Character('VeryLongNameHere', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
    });

    test('should throw error for invalid type', () => {
      expect(() => new Character('Test', 'InvalidType')).toThrow('Неверный тип персонажа');
    });

    test('levelUp should increase level and stats', () => {
      const char = new Character('Test', 'Bowman');
      char.levelUp();
      expect(char.level).toBe(2);
      expect(char.attack).toBe(30);
      expect(char.defence).toBe(30);
      expect(char.health).toBe(100);
    });

    test('levelUp should throw error for dead character', () => {
      const char = new Character('Test', 'Bowman');
      char.health = 0;
      expect(() => char.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
    });

    test('damage should reduce health correctly', () => {
      const char = new Character('Test', 'Bowman');
      char.damage(40);
      expect(char.health).toBe(70);
    });

    test('damage should not reduce health below 0', () => {
      const char = new Character('Test', 'Bowman');
      char.damage(200);
      expect(char.health).toBe(0);
    });
  });

  describe('Bowman class', () => {
    test('should create Bowman with correct stats', () => {
      const bowman = new Bowman('Legolas');
      expect(bowman.type).toBe('Bowman');
      expect(bowman.attack).toBe(25);
      expect(bowman.defence).toBe(25);
    });
  });

  describe('Swordsman class', () => {
    test('should create Swordsman with correct stats', () => {
      const swordsman = new Swordsman('Aragorn');
      expect(swordsman.type).toBe('Swordsman');
      expect(swordsman.attack).toBe(40);
      expect(swordsman.defence).toBe(10);
    });
  });

  describe('Magician class', () => {
    test('should create Magician with correct stats', () => {
      const magician = new Magician('Gandalf');
      expect(magician.type).toBe('Magician');
      expect(magician.attack).toBe(10);
      expect(magician.defence).toBe(40);
    });
  });

  describe('Daemon class', () => {
    test('should create Daemon with correct stats', () => {
      const daemon = new Daemon('Demon');
      expect(daemon.type).toBe('Daemon');
      expect(daemon.attack).toBe(10);
      expect(daemon.defence).toBe(40);
    });
  });

  describe('Undead class', () => {
    test('should create Undead with correct stats', () => {
      const undead = new Undead('Lich');
      expect(undead.type).toBe('Undead');
      expect(undead.attack).toBe(25);
      expect(undead.defence).toBe(25);
    });
  });

  describe('Zombie class', () => {
    test('should create Zombie with correct stats', () => {
      const zombie = new Zombie('Walker');
      expect(zombie.type).toBe('Zombie');
      expect(zombie.attack).toBe(40);
      expect(zombie.defence).toBe(10);
    });
  });

  describe('Damage calculation for different classes', () => {
    test('damage calculation for Swordsman (low defence)', () => {
      const swordsman = new Swordsman('Test');
      swordsman.damage(50);
      expect(swordsman.health).toBe(55);
    });

    test('damage calculation for Magician (high defence)', () => {
      const magician = new Magician('Test');
      magician.damage(50);
      expect(magician.health).toBe(70);
    });
  });
});