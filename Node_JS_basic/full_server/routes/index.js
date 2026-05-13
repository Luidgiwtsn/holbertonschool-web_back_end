import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Relie les URL (endpoints) aux méthodes des contrôleurs.
 * @param {Express} app - L'instance de l'application Express.
 */
const mapRoutes = (app) => {
  // Route pour l'accueil
  app.get('/', AppController.getHomepage);
  
  // Route pour la liste complète des étudiants
  app.get('/students', StudentsController.getAllStudents);
  
  // Route avec paramètre dynamique (:major) pour filtrer par domaine
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
