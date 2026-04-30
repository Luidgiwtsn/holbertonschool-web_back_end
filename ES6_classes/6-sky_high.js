import Building from './5-building.js';

/**
 * Représente un gratte-ciel, héritant de Building.
 */
export default class SkyHighBuilding extends Building {
  /**
   * @param {Number} sqft - La surface (transmise au parent).
   * @param {Number} floors - Le nombre d'étages.
   */
  constructor(sqft, floors) {
    // Appel du constructeur de la classe parente (Building)
    super(sqft);
    this._floors = floors;
  }

  // Getter pour 'sqft' (hérité, mais déjà géré par le parent)
  // Getter pour 'floors'
  get floors() {
    return this._floors;
  }

  /**
   * Implémentation obligatoire de la méthode d'évacuation.
   * @returns {String}
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
