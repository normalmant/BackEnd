const funcionariosArquivo = require("./funcionarios.json")
console.log(funcionariosArquivo)
const fs = require("fs")



function mostrarFuncionarios(){
funcionariosArquivo.forEach((trabalhador)=>{
   console.log(trabalhador.nome+ " idade: "+ trabalhador.idade+ " anos   Cargo: "+ trabalhador.cargo+ "   Salário: R$"+trabalhador.pagamento)
   
})}

function AdicionarFuncionario(nome,idade, cargo,pagamento,contrato, escala){
const existe = funcionariosArquivo.some(
        trabalhador => trabalhador.nome
    )
    if(existe === true){
        console.log("O funcionario "+nome+" já existe")
    }
        else{
        funcionariosArquivo.push({
        nome:nome,
        idade: idade,
        cargo:cargo,
        pagamento:pagamento,
        contrato: contrato,
        escala:escala,
    })}
    fs.writeFileSync("funcionarios.json", JSON.stringify(funcionariosArquivo))
}

//Nome || Idade || Cargo || Pagamento || Contrato || Escala
AdicionarFuncionario("Carlos", 2, "Filho do gerente", 7500, "Vitalício", "1/6")

mostrarFuncionarios()

