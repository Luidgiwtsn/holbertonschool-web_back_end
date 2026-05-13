const express = require('express');
const fs = require('fs');

/**
 * Lit la base de données CSV de manière asynchrone et prépare le rapport.
 * @param {String} path - Chemin du fichier CSV passé en argument.
 * @returns {Promise<string>} - Promesse résolue avec le texte formaté des statistiques.
 */
const countStudents = (path) => new Promise((resolve, reject) => {
  // 1. Lecture asynchrone du fichier (non-bloquante)
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      // Si le fichier est manquant ou illisible, on rejette la promesse
      reject(new Error('Cannot load the database'));
      return;
    }

    // 2. Traitement des données CSV
    // split('\n') divise le texte en lignes, filter retire les lignes vides
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    // On retire l'en-tête (la première ligne : firstname, lastname, etc.)
    const header = lines.shift();
    if (!header) {
      resolve(''); // Cas où le fichier est vide
      return;
    }

    const students = {};
    let totalStudents = 0;
    let output = '';

    // 3. Extraction des prénoms par domaine (Field)
    lines.forEach((line) => {
      const studentData = line.split(',');
      // On s'assure que la ligne contient bien les données attendues
      if (studentData.length >= 4) {
        totalStudents += 1;
        const firstName = studentData[0];
        const field = studentData[3];

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
      }
    });

    // 4. Construction de la chaîne de caractères finale
    output += `Number of students: ${totalStudents}\n`;
    const fields = Object.keys(students);
    fields.forEach((field, index) => {
      output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`;
      // Ajout d'un saut de ligne sauf pour la dernière filière
      if (index < fields.length - 1) output += '\n';
    });

    // On valide la promesse avec le texte final
    resolve(output);
  });
});

// Initialisation de l'application Express
const app = express();

/**
 * Route GET '/'
 * Affiche un message de bienvenue simple.
 */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

/**
 * Route GET '/students'
 * Lit la base de données et affiche la liste formatée des étudiants.
 */
app.get('/students', (req, res) => {
  // On récupère le nom de la base de données via les arguments de la commande Node
  const databasePath = process.argv[2];

  // Appel de la fonction asynchrone countStudents
  countStudents(databasePath)
    .then((data) => {
      // Succès : on concatène le titre et les données reçues
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((error) => {
      // Échec : on affiche le titre suivi du message d'erreur spécifique
      res.send(`This is the list of our students\n${error.message}`);
    });
});

// Le serveur écoute les connexions entrantes sur le port 1245
app.listen(1245);

// Exportation de l'application pour les tests (Mocha/Jest)
module.exports = app;
