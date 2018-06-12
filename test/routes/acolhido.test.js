const acolhidoRoute = require("../../src/routes/acolhido/get")

describe('Quando acesso acolhido', () => {
    it('Deve mostrar pagina com prescrição e suas abas atualizaveis', (done) => {
        const Acolhido = {
            findOne: jest.fn()
        }

        const req = { params: { acolhidoId: 1 } }
        const res = { render: jest.fn() }
        const acolhido = {
            nome: 'Leo',
            id: '1',
            idade: 'Luna',
            peso: 'Luna',
            alergias: 'Luna',
            viaAlimentacao: 'Luna'
        }
        Acolhido.findOne.mockResolvedValue(acolhido);

        return acolhidoRoute(Acolhido)(req, res)
            .then(() => expect(Acolhido.findOne).toBeCalledWith({ 'where': { 'id': req.params.acolhidoId } }))
            .then(() => expect(res.render).toBeCalledWith('pages/infoAcolhido', { acolhido }))
            .then(done)
            .catch(done)
    })
})
