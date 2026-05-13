const fs = require('fs');

/**
 * Lit un fichier CSV de manière asynchrone et retourne une Promise.
 * @param {String} path - Chemin du fichier database.csv
 */
const countStudents = (path) => new Promise((resolve, reject) => {
  // 1. Utilisation de fs.readFile (Non-bloquant)
  // On passe le chemin, l'encodage 'utf8' et une fonction de rappel (callback)
  fs.readFile(path, 'utf8', (err, data) => {
    
    // 2. Gestion de l'erreur de lecture
    if (err) {
      // Si le fichier n'existe pas, on rejette la Promise avec l'erreur demandée
      reject(new Error('Cannot load the database'));
      return;
    }

    // 3. Nettoyage des données
    // On transforme le texte brut en tableau de lignes, en ignorant les lignes vides
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    // On extrait la première ligne (les titres de colonnes) pour ne garder que les données
    const header = lines.shift();
    if (!header) {
      resolve(); // Si le fichier est vide (après l'en-tête), on termine proprement
      return;
    }

    // 4. Initialisation des compteurs et du dictionnaire d'étudiants
    const students = {};
    let totalStudents = 0;

    // 5. Itération sur chaque ligne de données
    lines.forEach((line) => {
      const studentData = line.split(',');
      
      // On s'assure que la ligne possède bien toutes les colonnes requises
      if (studentData.length >= 4) {
        const firstName = studentData[0];
        const field = studentData[3];

        totalStudents += 1;

        // Si le domaine (CS ou SWE) n'existe pas encore, on crée un tableau vide
        if (!students[field]) {
          students[field] = [];
        }
        // On ajoute le prénom de l'étudiant dans sa filière respective
        students[field].push(firstName);
      }
    });

    // 6. Affichage des statistiques sur la sortie standard (STDOUT)
    console.log(`Number of students: ${totalStudents}`);

    // On parcourt notre objet 'students' pour afficher chaque filière
    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }

    // 7. Validation finale
    // On appelle resolve() pour signaler que l'opération asynchrone est un succès
    resolve();
  });
});

// Exportation pour utilisation dans d'autres modules (ex: 3-main.js)
module.exports = countStudents;
