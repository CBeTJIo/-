const Character = require('./Character.js');

class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman', 40, 10);
  }
}

module.exports = Swordsman;
