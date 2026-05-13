/**
 * Gère les routes de base de l'application.
 */
export default class AppController {
  /**
   * Retourne le message de bienvenue pour la route racine.
   */
  static getHomepage(req, res) {
    // On définit le statut 200 (OK) et on envoie le texte
    res.status(200).send('Hello Holberton School!');
  }
}
