const database = require('./database')
const modelsInitializer = require('./src/models')
const { logger } = require('./logger')

const databaseConnection = database.connect()

const models = modelsInitializer(databaseConnection)

const createAcolhido = () => models.Acolhido.create({
  nome: 'Abelardo Dores',
  nascimento: '12/10/2006',
  peso: 12.5,
  alergias: 'Paracetamol',
  via_alimentacao: 'Oral'
})

const createPrescricao = acolhido => models.Prescricao.create({
  data: Date.now(),
  validade: '11/11/2111',
  updated_at: Date.now(),
  acolhido_id: acolhido.id
})

const createMedicamento = prescricao => models.Medicamento.create({
  nome: 'Dorflex',
  dosagem: '500mg',
  formaFarmaceutica: 'Paracetamol',
  via: 'Oral',
  validadeMed: 'até 30/03',
  posologia: '8h-1CP 16h-2CP',
  observacoes: 'nada',
  prescricao_id: prescricao.id
})
  .then(() => prescricao)

const createCuidado = prescricao => models.Cuidado.create({
  descricao: 'Dar banho',
  intervalo: '12h-12h',
  observacoes: 'Com Jhonsons Baby',
  prescricao_id: prescricao.id
})

const createDieta = prescricao => models.Dieta.create({
  tipo: 'Hipercalórica',
  intervalo: '4h-4h',
  observacoes: 'Não come pimenta',
  prescricao_id: prescricao.id
})

const createUsuarioClinica = () => models.Usuario.create({
  tipo: 'clinica',
  nome: 'Marlene',
  senha: 'marlene',
})


const createUsuarioNeurologista = () => models.Usuario.create({
  tipo: 'neurologista',
  nome: 'Karen',
  senha: 'karen',
})

const createUsuarioFarmaceutica = () => models.Usuario.create({
  tipo: 'farmaceutica',
  nome: 'Fabiana',
  senha: 'fabi',
})

const createUsuarioAdmin = () => models.Usuario.create({
  tipo: 'administrador',
  nome: 'admin',
  senha: 'admin',
})

const letItCrash = error => {
  logger.error('Erro durante o seed:', error.message)
  process.exit(1)
}

const createOtherAcolhido = () => models.Acolhido.create({
  nome: 'Abelardo Aores',
  nascimento: '11/10/2006',
  peso: 13.5,
  alergias: 'Paracetamol',
  via_alimentacao: 'Oral'
})

const finishWithSuccess = () => process.exit(0)

databaseConnection
  .sync()
  .then(createAcolhido)
  .then(createOtherAcolhido)
  .then(createPrescricao)
  .then(createMedicamento)
  .then(createCuidado)
  .then(createDieta)
  .then(createUsuarioClinica)
  .then(createUsuarioNeurologista)
  .then(createUsuarioFarmaceutica)
  .then(createUsuarioAdmin)
  .then(finishWithSuccess)
  .catch(letItCrash)
