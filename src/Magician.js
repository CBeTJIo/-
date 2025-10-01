const Character = require('./Character.js');

class Magician extends Character {
  constructor(name) {
    super(name, 'Magician', 10, 40);
  }
}

module.exports = Magician;
