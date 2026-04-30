import Currency from './3-currency.js';

/**
 * Représente le prix d'un article dans une devise donnée.
 */
export default class Pricing {
  /**
   * @param {Number} amount - Le montant.
   * @param {Currency} currency - Une instance de la classe Currency.
   */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter et Setter pour 'amount'
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  // Getter et Setter pour 'currency'
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  /**
   * Retourne le prix complet au format : amount name (code)
   * @returns {String}
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Méthode statique pour convertir un prix selon un taux.
   * @param {Number} amount - Le montant à convertir.
   * @param {Number} conversionRate - Le taux de conversion.
   * @returns {Number} Le montant converti.
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
