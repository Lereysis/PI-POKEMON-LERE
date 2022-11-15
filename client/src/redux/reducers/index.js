import { 
    CREATE_POKEMON, 
    GET_ALL_POKEMONS, 
    GET_POKEMON, 
    GET_POKEMONS_TYPES, 
    FILTER_BY_TYPE, 
    FILTER_BY_ATTACK,
    FILTER_BY_APHABET, 
    GET_POKEMON_BY_NAME,
    FILTER_BY_API_OR_CREATED,
    CLEAN_STATE
} from "../actions";

const initialState = {
    pokemons: [],
    pokemondetail: {},
    pokemonsTypes: [],
    createPokemon: {},
    filterPokemons: []
};



const rootReducer = (state = initialState, action) => {
    let aux = []
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return { 
                ...state, 
                pokemons: action.payload,
                filterPokemons: action.payload
            }
        case GET_POKEMON:
            return { ...state, pokemondetail: action.payload }
        case GET_POKEMONS_TYPES:
            return { ...state, pokemonsTypes: action.payload }
        case CREATE_POKEMON:
            return { ...state, createPokemon: action.payload }
        case FILTER_BY_TYPE:
            if (action.payload) {
                function search(elemento) {
                    const names = elemento.types.map(e => e.name)
                    return names.includes(action.payload);
                }
                aux = state.pokemons.filter(search)
            } else {
                aux = [...state.pokemons]
            }
            return {
                ...state,
                filterPokemons: aux
            }
        case FILTER_BY_ATTACK:
            aux = [...state.filterPokemons]
            if (action.payload === "minAttack") {
                aux = state.filterPokemons.sort((a,b)=> a.attack - b.attack)
            } else if (action.payload === "maxAttack") {
                aux = state.filterPokemons.sort((a,b)=> b.attack - a.attack)
            } else {
                aux = [...state.pokemons]
            }
            return {
                ...state,
                filterPokemons: [...aux]
            }

        case FILTER_BY_APHABET:
            aux = [...state.filterPokemons]
            if (action.payload === "AZ") {
                aux = state.filterPokemons.sort((a,b)=> {
                    if (b.name > a.name) return -1
                })
            } else if (action.payload === "ZA") {
                aux = state.filterPokemons.sort((a,b)=> {
                    if (a.name > b.name) return -1
                })
            } else {
                aux = [...state.pokemons]
            }
            return {
                ...state,
                filterPokemons: [...aux]
            }
        case GET_POKEMON_BY_NAME:
            return {
                ...state, 
                filterPokemons: [...action.payload]
            }
        case FILTER_BY_API_OR_CREATED: 
            aux = []
            if (action.payload === "Api") {
                aux = state.pokemons.filter( e => typeof e.id === "number")
            } else if (action.payload === "Created") {
                aux = state.pokemons.filter( e => typeof e.id === "string")
            } else {
                aux = [...state.pokemons]
            }
            return {
                ...state,
                filterPokemons: [...aux]
            }
        case CLEAN_STATE:
            return{
                ...state,
                pokemondetail:{}
            }

        default:
            return { ...state };

    };
};

export default rootReducer