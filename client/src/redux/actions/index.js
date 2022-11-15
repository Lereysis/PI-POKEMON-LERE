import axios from "axios"
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const GET_POKEMON =  "GET_POKEMON"
export const GET_POKEMONS_TYPES = "GET_POKEMONS_TYPES"
export const CREATE_POKEMON = "CREATE_POKEMON"
export const FILTER_BY_TYPE = "FILTER_BY_TYPE"
export const FILTER_BY_ATTACK = "FILTER_BY_ATTACK"
export const FILTER_BY_APHABET = "FILTER_BY_APHABET"
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME"
export const FILTER_BY_API_OR_CREATED = "FILTER_BY_API_OR_CREATED"
export const CLEAN_STATE = "CLEAN_STATE"



export const getAllPokemons = () => async dispatch => {
    return fetch("http://localhost:3001/all")
            .then(response => response.json())
            .then(data => dispatch({type: GET_ALL_POKEMONS, payload: data}))
};
export const getPokemonByName = (name) => async dispatch => {
    return fetch(`http://localhost:3001/all?name=${name}`)
            .then(response => response.json())
            .then(data => dispatch({type: GET_POKEMON_BY_NAME, payload: data}))
};

export const getPokemon = (id) => async dispatch => {
    return fetch(`http://localhost:3001/pokemon/${id}`)
            .then(response => response.json())
            .then(data => dispatch({type: GET_POKEMON, payload: data}))
};

export const getPokemonsTypes = () => async dispatch =>{
    return fetch("http://localhost:3001/types")
           .then(responde => responde.json())
           .then(data => dispatch({type: GET_POKEMONS_TYPES, payload: data}))

};

export const createPokemon = (data)=> async dispatch =>{
    return axios.post("http://localhost:3001/createPokemon", data)
    .then(response => dispatch({type: CREATE_POKEMON, payload: response.data}))
}

export const filterByType =(type) =>{
    return {type: FILTER_BY_TYPE, payload:type }
} 

export const filterByAttack =(type) => {
    return {type:FILTER_BY_ATTACK, payload:type}
}

export const filterByAphabet = (type) => {
    return {type:FILTER_BY_APHABET, payload: type}
}
export const filterByApiOrCreated = (type) => {
    return {type:FILTER_BY_API_OR_CREATED, payload: type}
}

export const cleanState = ()=>{
    return {type: CLEAN_STATE}
}