const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllPokemons = require('../controllers/getAllPokemons')
const getPokemonById = require('../controllers/getPokemonById')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons', getAllPokemons);
router.get('/pokemon/:idPokemon', getPokemonById);

module.exports = router;
