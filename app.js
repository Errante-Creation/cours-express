const express = require('express')
const app = express()
const port = 3000

// Définition d'une route simple
app.get('/', (req, res) => {
   res.send('Bienvenue sur votre API RESTful !')
})

// Démarrage du serveur
app.listen(port, () => {
   console.log(`Serveur démarré sur http://localhost:${port}`)
})