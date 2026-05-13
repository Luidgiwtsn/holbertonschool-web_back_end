import express from 'express';
import mapRoutes from './routes/index';

// Initialisation du framework Express
const app = express();
const port = 1245;

// Injection de la configuration des routes dans l'application
mapRoutes(app);

// Démarrage du serveur sur le port 1245
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Exportation pour permettre les tests automatiques (Mocha/Chai)
export default app;
