const produtos=["Macarrão","Arroz","Feijão", "Maçã","Doritos", "Pasta de dente", "Leite", "Bolacha", "Biscoito", "Chocolate"]
const valores=    [  25.00,   5.00,    3.50,     1.25,  60.99,       2.99,         5.80,     0.99,         1.99,       8.99]
//const estoques=[     50,     25,     33,         87,     32,         24,             55,     27,         38,         67 ]

function mostrarEstoque(){
   console.log("\n ESTOQUE: ")
let contador=0
   while(contador<=9){
      console.log(produtos[contador]," " + "R$", valores[contador], "\n")
      contador++
   }
   } 
 

function item_novo(){
  console.log("\nADICIONAR NOVO ITEM: ")
  produtos.push("Refrigerante")
  valores.push(2.50)

  //Não entendi direito porque deu certo
  valores.forEach((valor, posicao)=>{
   console.log(produtos[posicao],"", "R$",valor, "\n")
 })
}


function tirar_item(){
   console.log("\nRETIRAMOS UM ITEM: ")
   produtos.splice(0,1)
   valores.splice(0,1)

 produtos.forEach((produto,valor)=>{
   console.log(produto,""+ " R$" ,valores[valor],"\n")
})
}
mostrarEstoque();
item_novo();
tirar_item();