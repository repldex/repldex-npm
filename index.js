const fetch = require('node-fetch');

class Client {
  /**
   * Initiates Class.
   * @param {String} token Your Repldex Token
   */
  constructor(token) {
    if (token) this.token = token;
    else throw new Error("You didn't specify a token in constructor!");
  }

}