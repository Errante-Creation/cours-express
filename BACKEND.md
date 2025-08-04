# Construire un backend avec Node.js et Express
## Introduction à Node.js
Node.js est un environnement d'exécution JavaScript open-source et multiplateforme qui permet aux développeurs d'exécuter du code JavaScript côté serveur. Contrairement au JavaScript exécuté dans un navigateur, Node.js s'exécute directement sur le système d'exploitation de l'ordinateur ou du serveur. Il a été construit sur le moteur JavaScript V8 de Chrome, ce qui le rend extrêmement rapide et performant.

**Avantages de Node.js pour le backend :**
* **Performance et scalabilité :**  Node.js est conçu pour des applications à forte concurrence et en temps réel. Son architecture non bloquante et basée sur les évènements lui permet de gérer un grand nombre de connexions simultanées avec une faible surcharge.
* **JavaScript partout :** Permet d'utiliser JS pour le développement front et back, ce qui réduit le changement de contexte entre les langages pour les développeurs. Cela facilite le partage de code et de compétences au sein d'une équipe.
* **Écosystème riche (npm) :** Le gestionnaire de paquets Node (npm) donne accès à des centaines de milliers de paquets réutilisables, ce qui accélère considérablement le développement. Il offre également une excellente résolution des dépendances et peut automatiser la plupart des chaînes d'outils de constructions.
* **Portable :** Node.js est compatible avec de nombreux systèmes d'exploitation (Windows, macOs, Linux, etc.) et est bien supporté par de nombreux fournisseurs d'hébergement web.

## Introduction à Express.js
Express.js est un framework web minimaliste et flexible pour Node.js. Il fournit un ensemble robuste de fonctionnalité pour les applications web et mobiles. Express est le framework Node.js le plus populaire et sert de base à de nombeux autres frameworks Node.js.

Express simplifie le processus de création d'applications web en fournissant des outils et des fonctionnalités pour :
* La gestion des routes HTTP (définition des points de terminaison de l'API)
* L'intégration de middlewares pour traiter les requêtes HTTP
* La gestion des vues pour générer des réponses HTML (bien que pour les API RESTful, nous nous concentrerons sur les réponses JSON)
* La connexion à des bases de données

## Création d'un serveur Express simple
Pour commencer avec Express.js, vous devez d'abord avoir Node.js installé sur votre machine. Ensuite vous pouvez créer un nouveau projet et installer Express.
1. **Initialiser un nouveau projet Node.js :**
   Créez un nouveau dossier pour votre projet et naviguez-y dans votre terminal `cd nomDuDossier`. Exécutez ensuite la commande qui permet d'initiliaser un nouveau projet Node.js. Cela créera un fichier `package.json` qui gérera les dépendances de votre projet
   ```
   npm init -y
   ```
2. **Installer Express.js :**
   Installer Express en tant que dépendance de votre projet
   ```
   npm install express
   // ou en raccourci :
   npm i express
   ```
3. **Créer un fichier de serveur (par exemple, app.js ou server.js) :**
   Créez un fichier `app.js` à la racine de votre projet et ajoutez le code suivant :
   ```javascript
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
   ```
4. **Exécuter le serveur :**
   Dans votre terminal, exécutez votre application Node.js avec la commande :
   ```
   node app.js
   ```
   Vous devriez voir le message `Serveur démarré sur http://localhost:3000` dans votre console (ou terminal). 
   Ouvrez votre navigateur et accédez à `http://localhost:3000`. Vous devriez voir le message `Bienvenue sur votre API RESTful !`.