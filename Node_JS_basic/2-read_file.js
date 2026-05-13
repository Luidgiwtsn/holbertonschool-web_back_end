const fs = require('fs');

/**
 * Lit un fichier CSV de manière synchrone et affiche les statistiques des étudiants.
 * @param {String} path - Le chemin vers le fichier database.csv.
 */
const countStudents = (path) => {
  try {
    // Lecture synchrone du fichier en UTF-8
    const data = fs.readFileSync(path, 'utf8');

    // On divise le contenu par ligne et on filtre les lignes vides
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // On retire l'en-tête (firstname, lastname, age, field)
    const header = lines.shift();
    if (!header) return;

    const students = {};
    let totalStudents = 0;

    lines.forEach((line) => {
      const studentData = line.split(',');
      const firstName = studentData[0];
      const field = studentData[3];

      if (firstName && field) {
        totalStudents += 1;
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
      }
    });

    console.log(`Number of students: ${totalStudents}`);

    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    // Si le fichier n'existe pas ou n'est pas lisible
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
