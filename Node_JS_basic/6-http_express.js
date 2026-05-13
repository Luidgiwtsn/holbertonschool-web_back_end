const express = require('express');

/**
 * Création de l'application Express.
 * Express simplifie la gestion des routes et des réponses HTTP.
 */
const app = express();

// Définition de la route pour le chemin racine (/)
// app.get écoute spécifiquement les requêtes de type GET
app.get('/', (req, res) => {
  // res.send envoie la réponse et gère automatiquement 
  // le Content-Type (text/html par défaut ici) et la fermeture de la connexion.
  res.send('Hello Holberton School!');
});

// Le serveur écoute sur le port 1245
app.listen(1245);

// Exportation de la variable app comme demandé
module.exports = app;
