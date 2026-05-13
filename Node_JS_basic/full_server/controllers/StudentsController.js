import { readDatabase } from '../utils';

/**
 * Gère toutes les opérations liées aux étudiants.
 */
export default class StudentsController {
  /**
   * Récupère tous les étudiants triés par domaine.
   */
  static getAllStudents(req, res) {
    // Le chemin de la base de données est passé en argument au lancement du serveur
    const dbPath = process.argv[2];

    readDatabase(dbPath)
      .then((students) => {
        let output = 'This is the list of our students\n';
        
        // On récupère les domaines et on les trie par ordre alphabétique (insensible à la casse)
        const fields = Object.keys(students).sort((a, b) => 
          a.toLowerCase().localeCompare(b.toLowerCase())
        );

        fields.forEach((field, index) => {
          // Formatage de la ligne pour chaque domaine
          output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`;
          // On ajoute un saut de ligne sauf pour le dernier domaine
          if (index < fields.length - 1) output += '\n';
        });

        res.status(200).send(output);
      })
      .catch(() => {
        // Erreur si le fichier n'est pas accessible
        res.status(500).send('Cannot load the database');
      });
  }

  /**
   * Récupère les étudiants d'un domaine spécifique (CS ou SWE).
   */
  static getAllStudentsByMajor(req, res) {
    // On récupère la variable :major définie dans la route
    const { major } = req.params;

    // Validation du paramètre : on n'accepte que CS ou SWE
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const dbPath = process.argv[2];
    readDatabase(dbPath)
      .then((students) => {
        // On récupère la liste pour le domaine demandé
        const list = students[major] ? students[major].join(', ') : '';
        res.status(200).send(`List: ${list}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}
