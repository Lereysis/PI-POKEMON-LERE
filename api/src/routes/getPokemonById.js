const {Router} = require("express");
const router = Router()
const getPokemonById = require("../services/getPokemonById")

router.get("/pokemon/:id", async (req,res) => {
    const { id } = req.params
    try {
        console.log(id)
        const response  = await getPokemonById(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error)
    }
    
});

module.exports = router;