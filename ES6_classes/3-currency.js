/**
 * Représente une devise monétaire.
 */
export default class Currency {
  /**
   * @param {String} code - Le symbole ou code de la devise (ex: $).
   * @param {String} name - Le nom de la devise (ex: Dollars).
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter et Setter pour 'code'
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // Getter et Setter pour 'name'
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
   * Retourne le nom complet et le code au format : name (code)
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
