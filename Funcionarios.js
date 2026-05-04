const fs = require("fs")

const funcionariosArquivo = require("./funcionarios.json")

const funcionariosArquivoJSON = JSON.stringify(funcionariosArquivo)

function salvar(){
    //Responsável por salver as mudanças no JSON
        const funcionariosArquivoJSON = JSON.stringify(funcionariosArquivo)
    fs.writeFileSync("funcionarios.json",funcionariosArquivoJSON) 
}

function mostrarFuncionarios(){
    console.log("\n"+"@@@@@@@@@@@@@@@@@@@@@@ MOSTRA FUNCIONÁRIOS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@"+"\n") 

    funcionariosArquivo.forEach((trabalhador)=>{
    console.log( trabalhador.nome+ " idade: "+ trabalhador.idade+ " anos   Cargo: "+ trabalhador.cargo+ "   Salário: R$"+trabalhador.pagamento)
})
}


function adicionarFuncionario(nome, idade,cargo, pagamento, contrato, escala){
    console.log("\n"+"@@@@@@@@@@@@@@@@@@@@@@ ADICIONAR FUNCIONÁRIO @@@@@@@@@@@@@@@@@@@@@@@@@@@@@"+"\n")   

    const existe = funcionariosArquivo.some(
   trabalhador => trabalhador.nome ===nome
)
    if(existe===true){
    
    console.log("O USUÁRIO JÁ ESTÁ CADASTRADO: " + nome+ " idade: "+ idade+ " anos   Cargo: "+ cargo+ "   Salário: R$"+pagamento + "\n")

}

    else{
        console.log("O FUNCIONÁRIO: " + nome+ " idade: "+ idade+ " anos   Cargo: "+ cargo+ "   Salário: R$"+pagamento +" FOI CADASTRADO" +"\n")
    funcionariosArquivo.push({
    nome: nome,
    idade: idade,
    cargo: cargo,
    pagamento: pagamento,
    contrato: contrato,
    escala: escala,
}
)}
//RESPONSÁVEL POR ADICIONAR NO funcionarios.json
    salvar();
}



function removerFuncionario(nome){
console.log("\n"+"@@@@@@@@@@@@@@@@@@@@@@ REMOVER FUNCIONARIO @@@@@@@@@@@@@@@@@@@@@@@@@@@@@"+"\n")

//O .some PASSA POR TODOS OS OBJETOS
 const existe = funcionariosArquivo.some(
    trabalhador => trabalhador.nome === nome
)
//O .findIndex ANALISÁ EM QUAL POSIÇÃO ESTÁ O NOME
 const posicao= funcionariosArquivo.findIndex(
    trabalhador=> trabalhador.nome === nome
)

    if(existe===true){
       console.log("O FUNCIONÁRIO "+nome+ " FOI RETIRADO: " )

       //VAI ATÉ A POSIÇÃO DO NOME E RETIRA
     funcionariosArquivo.splice(posicao,1)

}
        else{
        console.log("NENHUM FUNCIONÁRIO FOI RETIRADO")
    }

    salvar();

}



function filtroPagamento(operador,filtro){
    console.log("\n"+"@@@@@@@@@@@@@@@@@@@@@@ FILTRO @@@@@@@@@@@@@@@@@@@@@@@@@@@@@"+"\n")
    if(operador==="<" ){
        //Filtrar
 const resultado = funcionariosArquivo.filter(
    trabalhador => trabalhador.pagamento<=filtro
)
    resultado.forEach((trabalhador)=>{
    console.log(trabalhador.nome+ 
        " idade: "+ trabalhador.idade+ 
        " anos   Cargo: "+ trabalhador.cargo+ 
      "   Salário: R$"+trabalhador.pagamento)})}

        else if(operador===">"){
        const resultado = funcionariosArquivo.filter(
        trabalhador => trabalhador.pagamento>=filtro
)
        resultado.forEach((trabalhador)=>{
        console.log(trabalhador.nome+ 
        " idade: "+ trabalhador.idade+ 
        " anos   Cargo: "+ trabalhador.cargo+ 
      "   Salário: R$"+trabalhador.pagamento)})}  
}



function Desconto(nome, valorDesconto, trabalhador){

 console.log("\n"+"@@@@@@@@@@@@@@@@@@@@@@ DESCONTO @@@@@@@@@@@@@@@@@@@@@@@@@@@@@"+"\n")   

   const desconto = funcionariosArquivo.findIndex(
    trabalhador=> trabalhador.nome === nome
   )
   const salario= funcionariosArquivo[desconto].pagamento
   let Porcentagem = funcionariosArquivo[desconto].pagamento*valorDesconto/100
   let descontado = funcionariosArquivo[desconto].pagamento-Porcentagem
   

    console.log("Foi descontado "+valorDesconto+"% do sálario da(o) "+nome+ " Sálario: "+salario+"\n"+"Sálario atual: R$ " +descontado)
    funcionariosArquivo[desconto].pagamento= descontado
    salvar();
}





mostrarFuncionarios();


                      //Nome || Idade || Cargo || Pagamento || Contrato ||Escala
adicionarFuncionario("John", 21, "Estágiario",1500,   "1 ano",   "4/3");

mostrarFuncionarios();

       //Maior > ou menor < || Número
filtroPagamento( ">"  ,5000);

removerFuncionario("Jonas");

mostrarFuncionarios();

        //Nome || Porcentagem
Desconto("Helena",20)

mostrarFuncionarios();