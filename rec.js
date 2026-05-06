/* COPIE E COLE ESTE ENUNCIADO NO VSCODE! */

/* Prova prática de recuperação do nivelamento (AV1) + prova (AV2).
Pode consultar o seu GitHub ou o do professor: https://github.com/profpatrickoli
Cópia de outros colegas ou uso de outros sites na internet (Google, IA, etc) = zero na recuperação! 
A prova pode ser realizada em duplas! Responder cada questão com as informações de cada integrante da dupla, basta criar variáveis com nomes diferentes. Exemplo: aluno1 e aluno2 
Para enviar a atividade, poste o código no GitHub de algum integrante da dupla e envie o link na atividade do Class. */

/* 1) (1,0 p) Crie variáveis para armazenar seu nome completo, altura, série e turma. Após isso, mostre no terminal uma mensagem personalizada se apresentando. OK */

/* 2) (1,0 p) Crie uma lista com 3 esportes que você gosta e mostre-os no terminal, usando o laço de repetição que preferir  OK*/

/* 3) (1,5 p) Crie uma condição que verifica se você é maior que o professor Patrick, que possui 1.73 de altura  OK*/

/* 4) (1,5 p) Crie um laço de repetição que conta de 0 até -10 */


let nome= "Renato"
let altura=1.79
let serie="2°"
let turma="DSB"


function estudante(){
    console.log("#################### PARTE 1 ####################"+"\n")
    console.log("Aluno: "+nome+"\n"+"Mede: "+altura+"\n"+"Turma: "+serie+turma+"\n")
}

function esportes(){
    console.log("###################### PARTE 2 #####################################3"+"\n")
const esportes =["Vôlei", "Futsal", "Xadrez"]

esportes.forEach(esporte => {
    console.log(esporte)
    
});

}

function comparar(){
    console.log("\n"+"###################### PARTE 3 #####################################3"+"\n")
    let professorAltura= 1.73
   
 if(altura>=professorAltura){
    console.log( nome+" tem: "+ altura+ "  ele é maior que o porfessor Patrick")

 }
  else{
    console.log( nome+" tem: "+ altura+ "  ele é menor que o porfessor Patrick")
  }
}

function repeticao(){
    console.log("\n"+"###################### PARTE 4 #####################################3"+"\n")
    let contador=0
    while (contador >= -10){
        console.log(contador)
        contador--
    }
}

estudante();
esportes();
comparar();
repeticao();