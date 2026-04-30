/**
 * Représente un Aéroport.
 */
export default class Airport {
  /**
   * @param {String} name - Le nom de l'aéroport.
   * @param {String} code - Le code de l'aéroport (ex: SFO).
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * Getter pour le tag de description par défaut.
   * C'est ce qui permet d'afficher [object SFO] au lieu de [object Object].
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
