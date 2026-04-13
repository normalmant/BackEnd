const mercado=[
    {
 nome:"Macarrão",
 preco: 2.50,
 quantidade:100,
},
{
    nome: "Arroz",
    preco:5.00,
    quantidade:50
},
{
    nome:"Feijão",
    preco: 25,
    quantidade:250,
   },
   {
    nome:"Abacate",
    preco: 11.00,
    quantidade:150,
   },]

 function lerprodutoForEACH(){
     /*contador=0
    while(contador<mercado.length){
        console.log(contador+ " ",mercado[contador].nome + " R$"+mercado[contador].preco)
        contador++
    }*/
    console.log("%%%%%%%%%%%% FOREACH %%%%%%%%%%%%%")
    mercado.forEach((produto,numero) => {
        console.log(numero+" "+" Nome: "+produto.nome+" Preço: R$"+ produto.preco+"; Quantidade: "+produto.quantidade)
    });
}
function lerprodutoWhile(){
    console.log("%%%%%%%%%%%%%%% WHILE %%%%%%%%%%%%%%%%5")
    contador=0
   while(contador<mercado.length){
       console.log(contador+ " ",mercado[contador].nome + " R$"+mercado[contador].preco)
       contador++
   }
}

lerprodutoForEACH();
lerprodutoWhile();


