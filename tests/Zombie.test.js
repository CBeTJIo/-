import Zombie from '../src/Zombie.js';

describe('Zombie class', () => {
  test('should create Zombie with correct stats', () => {
    const zombie = new Zombie('Walker');
    expect(zombie.name).toBe('Walker');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
  });
});
