// app.js
const express = require('express')
const app = express()

app.use(express.json()) // Middleware pour analyser les corps de requêtes JSON
app.use(express.urlencoded({ extended: true })) // Middleware pour analyser les corps de requêtes URL-encodés

app.post('/data', (req, res) => {
   console.log(req.body) // Contient les données envoyées dans le corps de la requête
   res.send('Données reçues')
})

app.listen(3000, () => console.log('Sereur démarré sur le port 3000'))