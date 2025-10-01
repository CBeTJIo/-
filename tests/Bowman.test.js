import Bowman from '../src/Bowman.js';

describe('Bowman class', () => {
  test('should create Bowman with correct stats', () => {
    const bowman = new Bowman('Legolas');
    expect(bowman.name).toBe('Legolas');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
  });
});
