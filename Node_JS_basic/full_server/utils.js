import fs from 'fs';

/**
 * Lit la base de données de manière asynchrone.
 * @param {string} path - Le chemin vers le fichier CSV.
 * @returns {Promise} - Une promesse qui résout un objet : { FIELD: [firstnames] }
 */
export const readDatabase = (path) => new Promise((resolve, reject) => {
  // Lecture asynchrone via fs
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      // Si le fichier est introuvable, on rejette la promesse (erreur 500 plus tard)
      reject(new Error('Cannot load the database'));
      return;
    }

    // Séparer par ligne et enlever les lignes vides
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    // Enlever la ligne d'en-tête (firstname, lastname, etc.)
    lines.shift();

    const studentsByField = {};

    lines.forEach((line) => {
      // Destructuration : on récupère le 1er élément (prénom) et le 4ème (domaine)
      const [firstname, , , field] = line.split(',');
      if (firstname && field) {
        // Si le domaine n'existe pas encore dans l'objet, on crée un tableau vide
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        // On ajoute le prénom au tableau correspondant
        studentsByField[field].push(firstname);
      }
    });

    // On renvoie l'objet organisé : { CS: ['Johann', ...], SWE: [...] }
    resolve(studentsByField);
  });
});
