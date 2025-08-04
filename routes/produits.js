// routes/produits.js
const express = require("express")
const router = express.Router()
const productController = require("../controllers/produitController")

router.get("/", productController.getAllProducts)
router.post("/", productController.createProduct)

module.exports = router