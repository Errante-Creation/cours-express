const express = require('express')
const app = express()
const port = 3000
const utilisateursRoutes = require('./routes/utilisateurs')
const produitsRoutes = require('./routes/produits')

// Monte le routeur sur le chemin de base
app.use('/api/utilisateurs', utilisateursRoutes)
app.use('/api/products', produitsRoutes)

// Démarrage du serveur
app.listen(port, () => {
   console.log(`Serveur démarré sur http://localhost:${port}`)
})