// controllers/produitController.js
const Produit = require("../models/produitModel") // Supposons que nous ayons un modèle Produit

// Fournir tous les produits
exports.getAllProducts = async (req, res) => {
   try {
      const products = await Produit.find()
      res.json(products)
   } catch (err) {
      res.status(500).json({ message: err.message })
   }
}

// Créer un produit
exports.createProduct = async (req, res) => {
   const product = new Produit({
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

// ...autres fonctions pour getProduitById, updateProduit, deleteProduit