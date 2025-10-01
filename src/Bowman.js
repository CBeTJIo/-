const Character = require('./Character.js');

class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman', 25, 25);
  }
}

module.exports = Bowman;
