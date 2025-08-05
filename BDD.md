# Le principe de Modèle
Les modèles sont des représentations des données de votre application et de la logique métier associée. Ils sont responsables de l'interaction avec la base de données (création, lecutre, mise à jour, suppression des données) et de la validation des données. Dans une application Node avec MongoDB, Mongoose est coramment utilisé pour définir les schémas de données et interagir avec la base de données, agissant ainsi comme la couche modèle.

**Exemple de modèle (avec Mongoose) :**
/!\ ATTENTION : Pour utiliser mongoose, il faut l'installer avec `npm install mongoose`
```javascript
// modeles/products.js
const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   price: {
      type: Number,
      required: true,
      min: 0
   },
   stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0
   },
   creationDate: {
      type: Date,
      default: Date.now
   }
})

module.exports = mongoose.model("Product", productSchema)
```

En résumé, l'architecture MVC/MVT simplifiée dans Express se présente comme suit :
* **Routes :** Définissent les points d'entrée de l'API et dirigent les requêtes vers les contrôleurs appropriés
* **Contrôleurs :** Contiennent la logique métier, traitent les requêtes, interagissent avec les modèles et préparent les réponses
* **Modèles :** Gèrent la structure des données, la validation et l'interaction avec la base de données
Cette séparation des préoccupations permet une meilleure organisation du code, une plus grand réutilisabilité et une maintenance facilitée

# Manipulation de BDD avec MongoDB et Mongoose
## Introduction à MongoDB
MongoDB est une base de données NoSQL (Not Only SQL) orientée document, ce qui signifie qu'elle stocke les données sous forme de documents BSON (Binary JSON) avec des schémas flexibles.
Contrairement aux bases de données relationnelles traditionnelles qui utilisent des tables et des lignes, MongoDB utilise des collections et des documents. Cette flexibilité en fait un excellent choix pour les applications qui nécessitent une évolutivité rapide et la gestion de données non structurée ou semi-structurées.

**Concepts clés de MongoDB :**
* **Document :** L'unité de base de données dans MongoDB. Un document est un ensemble de paires clé-valeur, similaire à un objet JSON. Les documents peuvent avoir des structures différentes au sein de la même collection.
* **Collection :** Un groupe de documents. L'équivalent d'une table dans une base de données relationnelle. Une collection ne force pas de schéma stricte sur ses documents.
* **Base de données :** Un conteneur pour les collections. Un serveur MongoDB peut héberger plusieurs bases de données.

**Avantages de MongoDB :**
* **Flexibilité des schémas :** Permet de stocker des documents avec des structures différentes dans la même collection, ce qui facilite l'évolution des applications.
* **Haute performance :** Conçu pour la vitesse et l'évolutivité, capable de gérer de grands volumes de données et de requêtes.
* **Scalabilité horizontale :** Facile à mettre à l'échelle en distribuant les données sur plusieurs serveurs (sharding).
* **Richesse des requêtes :** Supporte des requêtes complexes, l'indexation et l'agrégation de données

/!\ Comme avec MySQL, vous pouvez utiliser mongoDB soit en local soit depuis un hébergement ATLAS

## Introduction à Mongoose
Mongoose est une bibliothèque ODM (Object Data Modeling) pour MongoDB et Node. Elle fournit une solution basée sur des schémas pour modéliser les données de votre application, ce qui simplifie les interactions avec la base de données. Mongoose gère les relations entre les données, fournit une validation de schéma et est largement utilisé pour la modélisation d'objets MongoDB dans un environnement asynchrone.

**Pourquoi utiliser Mongoose ?**
* **Validation de schéma :** Mongoose vous permet de définir des schémas pour vos documents, garantissant que les données stockées dansMongoDB respectent une structure définie et des règles de validation.
* **Modélisation des données :** Facilite la création de modèles JavaScript qui correspondent à vos collections MongoDB, permettant d'interagir avec la base de données en utilisant des objets JavaScript.
* **Middlewares (Hooks) :** Permet d'exécuter des fonctions avant ou après certaines opérations de base de données (par exemple, avant de sauvegarder un document)

## Connexion à MongoDB avec Mongoose
Pour connecter votre application Node à une base de données MongoDB en utilisant Mongoose, vous dezvez d'abord installer Mongoose :
```bash
npm install mongoose
```
Ensuite, dans votre fichier app.js (ou un fichier de configuration de base de données séparé) :
```javascript
// app.js ou db.js
const mongoose = require('mongoose')

const dbURI = "mongodb+srv://<NomUtilisateur>:<motDePasse>@cluster0.8fmj9is.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" // Utilisez les infos fournies par MongoDB Atlas

mongoose.connect(dbURI)
   .then(() => console.log("Connexion à MongoDB réussie !"))
   .catch(err => console.error("Erreur de connexion à MongoDB :", err))

//  Si vous n'intégrez pas le code dans app.js, on fait l'export
module.exports = mongoose.connection 

// Dans app.js, juste avant le premier app.use, intégrer avec :
// require('./db') si votre fichier s'appelle db.js et se trouve a la racine de votre document
```
## Opérations CRUD (Create, Read, Update, Delete) avec Mongoose
Mongoose simplifie les opérations CRUD en fournissant des méthodes intuitives sur les modèles. Reprenons notre modèle `Product` :
```javascript
// modeles/products.js
const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   price: {
      type: Number,
      required: true,
      min: 0
   },
   stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0
   },
   creationDate: {
      type: Date,
      default: Date.now
   }
})

module.exports = mongoose.model("Product", productSchema)
```
Voici comment effectuer les opérations CRUD de base :

## Create (Création de données)
Pour créer un nouveau document, vous instanciez le modèle et appelez la méthode `save()`
```javascript
// Dans votre controller
const Product = require('../models/products')

exports.createNewProduct = async (req, res) => {
   const product = new Product({
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock
   })

   try {
      const newProduct = await product.save()
      res.status(201).json(newProduct)
   } catch (err) {
      res.status(400).json({ message: err.message })
   }
}
```