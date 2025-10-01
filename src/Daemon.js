const Character = require('./Character.js');

class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon', 10, 40);
  }
}

module.exports = Daemon;
