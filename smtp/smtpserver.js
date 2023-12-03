const express = require('express');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Configuration des informations d'identification OAuth2
const oauth2Client = new google.auth.OAuth2(
    '736861893065-cdjebvc2cmc7aj7bi7ie0f9836ofg2dl.apps.googleusercontent.com',
    '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',
    'http://localhost:3001/mailertest' // L'URL de redirection, assurez-vous qu'il correspond à celui que vous avez configuré dans la console des développeurs
);

// Générer l'URL d'autorisation
const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/gmail.send',
});

// Endpoint pour gérer la redirection OAuth
app.get('/auth/callback', async (req, res) => {
    const { code } = req.query;
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    res.send('Authentification réussie. Vous pouvez maintenant fermer cette page.');
});

// Endpoint pour envoyer un e-mail
app.post('/send-email', async (req, res) => {
    const { to, subject, text } = req.body;

    try {
        // Créer un transporteur nodemailer avec OAuth2
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'contact.nighton@gmail.com',
                clientId: '736861893065-cdjebvc2cmc7aj7bi7ie0f9836ofg2dl.apps.googleusercontent.com',
                clientSecret: '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',
                refreshToken: 'votre-refresh-token',
                accessToken: oauth2Client.credentials.access_token,
            },
        });

        // Paramètres de l'e-mail
        const mailOptions = {
            from: 'votre-email@gmail.com',
            to,
            subject,
            text,
        };

        // Envoi de l'e-mail
        const info = await transporter.sendMail(mailOptions);
        console.log('E-mail envoyé: ' + info.response);
        res.status(200).send('E-mail envoyé avec succès');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
    }
});

app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});
