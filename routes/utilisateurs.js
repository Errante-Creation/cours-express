const express = require('express')
const router = express.Router()

// Route GET pour récupérer tous les utilisateurs
router.get('/', (req, res) => {
   res.json(
      [
         { id: 1, nom: 'Alice' },
         { id: 2, nom: 'Bob' },
      ]
   )
})

// Route POST pour créer un nouvel utilisateur
router.post('/', (req, res) => {
   // Logique pour créer un utilisateur
   res.status(201).send('Utilisateur créé')
})

// Route GET avec paramètre pour récupérer un utilisateur par ID
router.get('/:id', (req, res) => {
   const userId = req.params.id
   res.send(`Détails de l'utilisateur : ${userId}`)
})

module.exports = router;