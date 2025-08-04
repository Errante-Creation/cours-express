const express = require('express')
const app = express()
const port = 3000

// Définition d'une route simple
app.get('/', (req, res) => {
   res.send('Bienvenue sur votre API RESTful !')
})

// Route GET pour récupérer tous les utilisateurs
app.get('/utilisateurs', (req, res) => {
   res.json(
      [
         { id: 1, nom: 'Alice' },
         { id: 2, nom: 'Bob' },
      ]
   )
})

// Route POST pour créer un nouvel utilisateur
app.post('/utilisateurs', (req, res) => {
   // Logique pour créer un utilisateur
   res.status(201).send('Utilisateur créé')
})

// Route GET avec paramètre pour récupérer un utilisateur par ID
app.get('/utilisateurs/:id', (req, res) => {
   const userId = req.params.id
   res.send(`Détails de l'utilisateur : ${userId}`)
})

// Démarrage du serveur
app.listen(port, () => {
   console.log(`Serveur démarré sur http://localhost:${port}`)
})