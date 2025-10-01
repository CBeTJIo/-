const Character = require('./Character.js');

class Undead extends Character {
  constructor(name) {
    super(name, 'Undead', 25, 25);
  }
}

module.exports = Undead;
