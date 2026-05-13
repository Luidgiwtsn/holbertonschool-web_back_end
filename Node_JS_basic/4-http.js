const http = require('http');

/**
 * Création d'un serveur HTTP utilisant le module natif 'http'.
 * Le serveur répond "Hello Holberton School!" à toutes les requêtes.
 */
const app = http.createServer((req, res) => {
  // Définition de l'en-tête de réponse : Succès (200) et type de contenu (texte brut)
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Écriture du corps de la réponse
  res.end('Hello Holberton School!');
});

// Le serveur écoute sur le port 1245
app.listen(1245);

// Exportation de l'instance pour qu'elle puisse être utilisée ailleurs
module.exports = app;
