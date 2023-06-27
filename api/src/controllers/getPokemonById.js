const { Pokemon, Type } = require('../db')

const getPokemonById = async(req, res) => {
    try {
        const { id } = req.params;
        if (!pokemon){
            return res.status(400).send('No existe ese Pokemon')
        }
        const pokemon = await Pokemon.findByPk(id);
    }catch (error){
        console.log('Error in getting pokemon by ID', error);
    }
}