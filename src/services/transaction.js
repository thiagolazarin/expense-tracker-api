// SERVICE

// Regras de negocios

const transactionModel = require("../models/transaction")

const { ApplicationError } = require ('@pedromiotti/exerror');
const customExceptions = require('../exceptions/customExceptions');

const registerTransaction = async(tipo, valor, categoriaId, data, descricao) => {
    try {
        
        if(!tipo || !valor || !categoriaId || !data || !descricao){
            throw new ApplicationError(customExceptions.MISSING_INFORMATION);
        }

        await transactionModel.registerTransaction(tipo, valor, categoriaId, data, descricao)
    } catch (error) {
        throw new ApplicationError(error);
    }

} 

const getAllTransactions = async() => {
    try {
        
        return await transactionModel.getAllTransactions();
        
    } catch (error) {
        throw new ApplicationError(error);
    }

}


module.exports = { registerTransaction, getAllTransactions };







