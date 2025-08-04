# Qu'est-ce qu'une API ?

Une API, ou Interface de Programmation d'Application, est un ensemble de définition et de protocoles qui permet à différentes applications logicielles de communiquer entre elles. Elle agit comme un contrat entre un fournisseur d'informations (le serveur) et un utilisateur d'informations (le client), spécifiant COMMENT le client doit demander des informations ou des fonctionnalités, et comment le serveur y RÉPONDRA.

Pour illustrer, imaginez que vous êtes dans un restaurant. Vous, le client, ne vous rendez PAS directement en cuisine pour préparer votre repas. Au lieu de cela, vous interagissez avec un serveur (API) qui prend votre commande (la requête) et la transmet à la cuisine (le système backend). La cuisine prépare le plat et le serveur vous le rapporte (la réponse). Vous n'avez pas besoin de savoir comment le plat est préparé en détail, seulement comment le commander et ce que vous recevrez en retour.

Dans le contexte du développement web, les API permettent aux applications front-end de communiquer avec les services back-end pour récupérer ou manipuler les données. Elles sont omniprésentes dans le monde numérique, alimentant tout, des applications mobiles aux services cloud, en passant par les intégrations entre différentes plateformes logicielles.

# Principes et contraintes de REST

REST (REpresentational State Transfer) est un style architectural pour les systèmes hypermédia distribués, conçu par Roy Fielding dans sa thèse de doctorat en 2000. Il ne s'agit pas d'un protocole ou d'une norme, mais plutôt d'un ensemble de PRINCIPES et de CONTRAINTES architecturales qui, lorsqu'ils sont respectés, favorisent la création de services web performants, fiables et faciles à maintenir.

Les contraintes clés de REST sont les suivantes :
1. **Client-Serveur :** La séparation des préoccupations entre le client et le serveur. Le client est responsable de l'interface utilisateur et de l'expérience, tandis que le erveur gère le stockage des données et la logique métier. Cette séparation améliore la portabilité de l'interface utilisateur sur différentes plateformes et la scalabilité (mise à l'échelle) du serveur.

2. **Sans État (Stateless) :** Chaque requête du client vers le serveur doit contenir TOUTES les informations nécessaires pour que le serveur puisse comprendre et traiter la requête. Le serveur ne doit stocker aucune information sur l'état de la session du client entre les requêtes. Cela rend les API RESTful plus robustes, car chaque requêtes est indépendante, et plus faciles à mettre à l'échelle, car n'importe quel serveur peut traiter n'importe quelle requête.

3. **Cacheable :** Les réponses du serveur doivent être explicitement ou implicitement définies comme cacheables (ayant la possibilité d'être mises en cache) ou non. Si une réponse est cacheable, le client ou un intermédiare peut la réutiliser pour des requêtes futures, ce qui améliore les performances et la scalabilité en réduisant la charge sur le serveur.

4. **Interface uniforme :** C'est la contrainte fondamentale qui distingue REST des autres styles architecturaux. Elle simplifie l'architecture globale du système en rendant chaque interaction plus générique et plus visible. L'interface uniforme est basée sur quatre sous-contraintes :
   * **Identification des ressources :** Les ressources individuelles sont identifiées dans les requêtes, par exemple, à l'aide d'URI (Uniform Resource Identifiers).
   * **Manipulation des ressources par des représentations :** Lorsque le client reçoit une représentation d'une ressource, il dispose de suffisamment d'informations pour modifier ou supprimer la ressource sur le serveur, si les permissions le permettent.
   * **Messages auto-descriptifs :** Chaque message contient suffisamment d'informations pour décrire comment le client doit le traiter. Cela inclut le type de média de la représentation (ex. JSON, XML) et les instructions pour le traitement.
   * **HATEOAS (Hypermedia As The Engine Of Application State) :** Le serveur doit fournir, dans ses réponses, des hyperliens qui guident le client vers les actions possibles et les ressources connexes. Cela permet au client de naviguer dans l'API sans avoir de connaissances préables sur la structure des URI.

5. **Système en couches :** Un client ne peut généralement pas savoir s'il est directement connecté au serveur final ou à un intermédiaire. Les serveurs intermédaires (proxies, passerelles, équilibreurs de charge) peuvent être utilisés pour améliorer la salabilité et la sécurité sans affecter l'interaction client-serveur.

6. **Code à la demande (optionnel) :** Le serveur peut étendre la fonctionnalité du client en transférant du code exécutable (par exemple, des scripts JavaScript). C'est la seule contraine optionnelle de REST.

# Verbes HTTP (Méthodes HTTP)
Les API RESTful utilisent les méthodes HTTP standard pour effectuer des opérations sur les ressources. Ces méthodes correspondent généralement aux opérations CRUD (Create, Read, Update, Delete).
* **GET :** Utilisé pour récupérer les données d'une ressource spécifiée. Les requêtes GET ne doivent pas avoir d'effets secondaires sur le serveur.
   * Exemple : `GET /api/produits` Récupère tous les produits
   * Exemple : `GET /api/produits/123` Récupère le produit avec l'ID 123
* **POST :** Utilisé pour créer une nouvelle ressource. Les données à créer sont envoyées dans le corps de la requête.
   * Exemple : `POST /api/produits` Crée un nouveau produit
* **PUT :** Utilisé pour mettre à jour une ressource existante. La requête PUT remplace généralement la ressource entière avec les données fournies dans le corps de la requête. Si la ressource n'existe pas, PUT peut la crééer (mais ce n'est pas toujours le cas).
   * Exemple : `PUT /api/produits/123` Mettre à jour le produit avec l'ID 123
* **DELETE :** Utilisé pour supprimer une ressource spécifiée
   * Exemple : `DELETE /api/produits/123` Supprimer le produit avec l'ID 123
* **PATCH :** Utilisé pour appliquer des modifications partielles à une ressource. COntrairement à PUT, PATCH ne remplace pas la ressource entière, mais applique uniquement les modifications spécifiées.
   * Exemple : `PATCH /api/produits/123` Mise à jour partielle du produit avec l'ID 123

# Codes de statut HTTP
Les codes de statut HTTP sont des codes numériques à trois chiffres renvoyés par le serveur dans la réponse pour indiquer le résultat de la requête HTTP. Il sont essentiels pour la communication client-serveur et pour le débogage des API. Voici quelques catégories courantes :
* **1xx (informationnel) :** La requête à été reçue et le processus se poursuit.
* **2xx (succès) :** La requête à été reçue, comprise et acceptée avec succès.
   * `200 OK` : La requête a réussi
   * `201 Created` : La requête à réussi et une nouvelle ressource à été créée (souvent après un POST)
   * `204 No Content` : La requête à réussi, mais il n'y a pas de contenu à renvoyer (souvent après un DELETE ou PUT)
* **3xx (redirection) :** Une action supplémentaire est nécessaire pour compléter la requête
   * `301 Moved Permanently` : La ressource a été déplacée de façon permanente
* **4xx (erreur client) :** La requête contient une erreur de syntaxe OU n'a pas pu être satisfaite
   * `400 Bad Request` : La requête est mal formée 
   * `401 Unauthorized` : L'authentification est requise et a échouée ou n'a pas été fournie
   * `403 Forbidden` : Le client n'a pas les droits d'accès au contenu
   * `404 Not Found` :  La ressource demandée n'a pas été trouvée
   * `405 Method Not Allowed` : La méthode HTTP utilisée n'est pas autorisée pour la ressource
* *5xx (erreur serveur) :** Le serveur n'a pas réussi à satisfaire une requête apparemment valide
   * `500 Internal Server Error` : Une erreur inattendue s'est produite sur le serveur
   * `503 Service Unavailable` : Le serveur n'est pas prêt à gérer la requête

# Conception d'une API RESTful (ressources, URI, représentations)
La conception d'une API RESTful efficace repose sur la modélisation des données en tant que ressources et l'utilisation cohérente des URI et des représentations.
* **Ressources :** Tout ce qui peut être nommé, adressé ou manipulé. Dans une API, une ressource est généralement une entité métier (par exemple, un utilisateur, un produit, une commande). Les ressources doivent être identifiables de manière unique.
* **URI (Uniform Resource Identifier) :** L'adresse unique d'une ressource. Les URI doivent être clairs, prévisibles et hiérarchiques pour faciliter la compréhension et l'utilisation de l'API. Ils doivent représenter des noms de ressources (au pluriel si c'est une collection) plutôt que des actions.
   * Bon exemple : `/api/produits` collection de produits
   * Bon exemple : `/api/produits/123` un produit spécifique
   * Mauvais exemple  `/api/getAllProducts` une action, pas une ressource
* **Représentations :** La manière dont une ressource est présentée au client. Les représentations peuvent être au format JSON (le plus courant), XML, HTML, etc. Elles contiennent les données de la ressource et, idéalement des liens hypermédia (HATEOAS) vers d'autres ressources ou actions possibles.
```json
{
   "id": "123",
   "nom": "Ordinateur portable",
   "prix": 1200,
   "stock": 50,
   "liens": [
      { "rel": "self", "href": "/api/produits/123", "method": "GET"},
      { "rel": "update", "href": "/api/produits/123", "method": "PUT"},
      { "rel": "delete", "href": "/api/produits/123", "method": "DELETE"},
   ]
}
```