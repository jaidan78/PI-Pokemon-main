const axios = require('axios');
const { Pokemon } = require('../db')
const URL = 'https://pokeapi.co/api/v2/'

const getAllPokemons = async (req, res) =>{
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
        
        const pokemons = response.data.results.map(pokemon =>({
            id : pokemon.id,
            name : pokemon.name,
            weight: pokemon.weight,
            height: pokemon.height,
        }));
        
        await Pokemon.bulkCreate(pokemons)
        res.json(pokemons)
    }catch(error){
        console.log('Error: ', error);
        res.status(500).json({error: 'Internal Server Error'})
    }
}

module.exports= getAllPokemons;