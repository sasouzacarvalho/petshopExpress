const { request, response } = require("express");

//Dentro de um objeto eu terei vários parametros
const loginController = {
    index: (request, response) => {
        return response.send('Exibindo usuário');
    },

    show: (request, response) => {
        // console.log(request.params);

        //pegando parametro usuario da rota /login/:usuario
        const {usuario} = request.params

        return response.send (`Exeibindo usuário ${usuario}`);
    }
}

module.exports = loginController;