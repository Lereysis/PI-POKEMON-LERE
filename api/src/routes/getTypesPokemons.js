const {Router} = require('express');
const router = Router()
const getTypesPokemons = require("../services/getTypesPokemons")

router.get("/", async (req,res,next)=>{
    try {
        res.status(200).json( await getTypesPokemons())
    } catch (error) {
        res.status(400).json({error: error.message})
        next(error)
    }
})

module.exports = router;
