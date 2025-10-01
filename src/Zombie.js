const Character = require('./Character.js');

class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie', 40, 10);
  }
}

module.exports = Zombie;
