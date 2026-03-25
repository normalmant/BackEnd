const produtos=["Macarrão","Arroz","Feijão", "Maçã","Doritos", "Pasta de dente", "Leite", "Bolacha", "Biscoito", "Chocolate"]
const valores=    [  25.00,   5.00,    3.50,     1.25,  60.99,       2.99,         5.80,     0.99,         1.99,       8.99]
//const estoques=[     50,     25,     33,         87,     32,         24,             55,     27,         38,         67 ]

function mostrarEstoque(){
   console.log("\n ESTOQUE: ")
let contador=0
   while(contador<produtos.lenght){
      console.log(produtos[contador]," " + "R$", valores[contador], "\n")
      contador++
   }
   } 
 

function item_novo(produto, valor){
  console.log("\nADICIONAR NOVO ITEM: ")
  produtos.push(produto)
  valores.push(valor)

  
}


function tirar_item(indice){
   console.log("\nRETIRAMOS UM ITEM: ")
   produtos.splice(indice,1)
   valores.splice(indice,1)

 }
mostrarEstoque();
item_novo("Refrigerante",2.50);
mostrarEstoque();
tirar_item(0);
mostrarEstoque();
