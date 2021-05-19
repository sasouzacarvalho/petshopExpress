const servicosController = {
    index: (request, response) => {
        return response.send('Exibindo lista de servicos');
    },

    show: (request, response) => {
        // console.log(request.params);

        //pegando parametro serviço da rota /servicos/ :serviço
        const {servico} = request.params

        return response.send (`Exibindo serviço: ${servico}`);
    }
}

module.exports = servicosController;