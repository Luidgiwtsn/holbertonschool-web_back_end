/**
 * Représente une classe Holberton avec des comportements de casting personnalisés.
 */
export default class HolbertonClass {
  /**
   * @param {Number} size - La taille de la classe.
   * @param {String} location - La localisation de la classe.
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * Gère la conversion de l'objet en type primitif.
   * @param {String} hint - Le type vers lequel l'objet tente d'être converti.
   * @returns {String|Number}
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return this;
  }
}
