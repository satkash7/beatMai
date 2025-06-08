import { loadNuxt } from 'nuxt';
import express from 'express';

const app = express();

const start = async () => {
    const nuxt = await loadNuxt('start');

    // Utilise le middleware Nuxt pour rendre les pages
    app.use(nuxt.render);

    const port = process.env.PORT || 3000;

    // Pour utiliser Passenger, ne lance pas le serveur avec app.listen()
    if (process.env.PASSENGER_APP_ENV) {
        // Exporter l'application pour Passenger
        module.exports = app;
    } else {
        // Si tu veux tester en local, tu peux utiliser app.listen()
        app.listen(port, '0.0.0.0', () => {
            console.log(`🚀 Serveur Nuxt lancé sur http://localhost:${port}`);
        });
    }
};

start();
