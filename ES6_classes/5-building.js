/**
 * Représente un bâtiment (Classe Abstraite).
 */
export default class Building {
  /**
   * @param {Number} sqft - La surface en pieds carrés.
   */
  constructor(sqft) {
    // Vérification pour simuler une méthode abstraite
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // Getter pour 'sqft'
  get sqft() {
    return this._sqft;
  }
}
