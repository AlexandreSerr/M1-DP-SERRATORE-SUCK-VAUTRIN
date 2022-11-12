import { throwError } from "../../middlewares/errorHandler.js";
import Validator from "validatorjs";



/**
 * Vérifie la validité des champs
 * @param {Object} newUser 
 */
export function registerValidation (newUser){

    const rules = {
        username: 'required',
        name: 'required',
        email: 'required|email',
        password: 'required'
      };

    const validate = new Validator(newUser, rules);
    validate.passes();
    const errors = validate.errors.all();
    if (Object.values(errors).length > 0){
        throwError(422, "Invalid input(s)", errors);
    }
}