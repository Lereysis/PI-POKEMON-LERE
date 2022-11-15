function validate(input) {
    let expresion = /^(?![ .]+$)[a-zA-Z .]*$/gm;
    let errors = {};   
    if (!input.name) {                          
        errors.name = "Name is missing";       
    } else if (expresion.test(input.name) === false) {
        errors.name = "Name invalid";
    }else if (!input.life) {
        errors.life = "Life is missing";
    } else if (input.life <= 0) {
        errors.life = "Life cannot be negative or zero";
    } else if (!input.defense) {
        errors.defense = "Defense is missing";
    } else if (input.defense <= 0) {
        errors.defense = "Defense cannot be negative or zero";
    } else if (!input.attack) {
        errors.attack = "Attack is missing";
    } else if (input.attack <= 0 ) {
        errors.attack = "Attack cannot be negative or zero";
    } else if (!input.speed) {
        errors.speed = "Speed is missing";
    } else if (input.speed <= 0) {
        errors.speed = "Speed cannot be negative or zero";
    }  else if (!input.height) {
        errors.height = "Height is missing";
    } else if (input.height <= 0) {
        errors.height = "Height cannot be negative or zero";
    } else if (!input.weight) {
        errors.weight = "Weight is missing";
    } else if (input.weight <= 0) {
        errors.weight = "Weight cannot be negative or zero";
    } else if (input.types.length === 0) {
        errors.types = "Types is missing"
    }
    return errors;
};

export default validate