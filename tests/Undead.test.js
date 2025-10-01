const Undead = require('../src/Undead.js');

describe('Undead class', () => {
  test('should create Undead with correct stats', () => {
    const undead = new Undead('Lich');
    expect(undead.name).toBe('Lich');
    expect(undead.type).toBe('Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
  });
});
