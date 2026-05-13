const http = require('http');
const fs = require('fs');

/**
 * Lit la base de données de manière asynchrone et prépare les statistiques.
 * @param {String} path - Chemin vers le fichier CSV.
 * @returns {Promise<string>} - Une promesse qui résout avec le texte formaté.
 */
const countStudents = (path) => new Promise((resolve, reject) => {
  // 1. Lecture asynchrone du fichier CSV
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      // Si le fichier est introuvable ou illisible, on rejette la promesse
      reject(new Error('Cannot load the database'));
      return;
    }

    // 2. Nettoyage : séparation par ligne et suppression des lignes vides
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    // On retire l'en-tête du CSV (firstname, lastname, etc.)
    const header = lines.shift();
    if (!header) {
      resolve(''); // Si le fichier ne contient que l'en-tête ou rien
      return;
    }

    const students = {};
    let totalStudents = 0;
    let output = '';

    // 3. Organisation des données par domaine (CS, SWE, etc.)
    lines.forEach((line) => {
      const studentData = line.split(',');
      if (studentData.length >= 4) {
        totalStudents += 1;
        const field = studentData[3];
        const firstName = studentData[0];
        if (!students[field]) students[field] = [];
        students[field].push(firstName);
      }
    });

    // 4. Construction de la chaîne de caractères finale
    output += `Number of students: ${totalStudents}\n`;
    const fields = Object.keys(students);
    fields.forEach((field, index) => {
      output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`;
      // Ajout d'un saut de ligne sauf pour la dernière ligne
      if (index < fields.length - 1) output += '\n';
    });

    // On renvoie le texte complet une fois le traitement fini
    resolve(output);
  });
});

/**
 * Création du serveur HTTP
 */
const app = http.createServer((req, res) => {
  // Définition commune pour toutes les réponses : succès 200 et texte brut
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // ROUTAGE :
  if (req.url === '/') {
    // Cas 1 : Route racine
    res.end('Hello Holberton School!');
    
  } else if (req.url === '/students') {
    // Cas 2 : Route /students
    res.write('This is the list of our students\n');
    
    // On récupère le chemin du fichier passé en argument de la commande node
    // process.argv[2] correspond à l'argument "database.csv"
    const databasePath = process.argv[2];

    // Appel de la fonction asynchrone
    countStudents(databasePath)
      .then((data) => {
        // Une fois les données lues, on les ajoute à la réponse et on ferme la connexion
        res.end(data);
      })
      .catch((error) => {
        // Si le fichier n'existe pas, on affiche le message d'erreur
        res.end(error.message);
      });
  } else {
    // Cas par défaut (optionnel, mais propre) : si l'URL est inconnue
    res.end('Hello Holberton School!');
  }
});

// Le serveur écoute sur le port 1245
app.listen(1245);

// Exportation de l'application
module.exports = app;
