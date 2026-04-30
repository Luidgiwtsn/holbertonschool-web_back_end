/**
 * Représente une voiture avec une capacité de clonage.
 */
export default class Car {
  /**
   * @param {String} brand - La marque.
   * @param {String} motor - Le type de moteur.
   * @param {String} color - La couleur.
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * Getter pour le symbole d'espèce.
   * Détermine la classe à utiliser lors de la création d'un nouvel objet basé sur celui-ci.
   */
  static get [Symbol.species]() {
    return this;
  }

  /**
   * Crée un nouvel objet de la même classe (ou sous-classe).
   * @returns {Object} Une nouvelle instance de la classe.
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
