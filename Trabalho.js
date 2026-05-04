const funcionario =[
    {
    nome: "Roberto",
    idade: 18,
    cargo: "faxineiro",
    pagamento: 1500,
    contrato: "2 anos",
    escala: "6/1",

},
{
    nome: "Miguel",
    idade: 18,
    cargo: "Gerente",
    pagamento: 15000,
    contrato: "2 anos",
    escala: "6/1",

},
{
    nome: "Helena",
    idade: 28,
    cargo: "Marketing",
    pagamento: 1000,
    contrato: "2 anos",
    escala: "6/1",

},
{
    nome: "Gael",
    idade: 38,
    cargo: "Desenvolvedor",
    pagamento: 5000,
    contrato: "2 anos",
    escala: "6/1",

},
{
    nome: "Davi",
    idade: 19,
    cargo: "secretário",
    pagamento: 1200,
    contrato: "2 anos",
    escala: "6/1",

},
{
    nome: "Mavi",
    idade: 48,
    cargo: "faxineiro",
    pagamento: 2000,
    contrato: "2 anos",
    escala: "6/1",

},
{
    nome: "Cecilia",
    idade: 88,
    cargo: "Desenvolvedor",
    pagamento: 1500,
    contrato: "2 anos",
    escala: "6/1",

},
{
    nome: "Fernando",
    idade: 58,
    cargo: "CEO",
    pagamento: 10000,
    contrato: "2 anos",
    escala: "6/1",

},
{
    nome: "Bruna",
    idade: 78,
    cargo: "Conzinheira",
    pagamento: 2500,
    contrato: "2 anos",
    escala: "6/1",

},
{
    nome: "Jonas",
    idade: 10,
    cargo: "Massagista",
    pagamento: 2,
    contrato: "2 anos",
    escala: "6/1",

},

]
const funcionariosJSON = JSON.stringify(funcionario)


 const fs = require("fs")
 fs.writeFileSync("funcionarios.json", funcionariosJSON)
