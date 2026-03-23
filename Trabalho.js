const produtos=["Macarrão","Arroz","Feijão", "Maçã","Doritos", "Pasta de dente", "Leite", "Bolacha", "Biscoito", "Chocolate"]
const valor=    [  25.00,   5.00,    3.50,     1.25,  60.99,       2.99,         5.80,     0.99,         1.99,       8.99]
const estoque=[     50,     25,     33,         87,     32,         24,             55,     27,         38,         67 ]

function lerlista(){
   produtos.forEach(produto=> {
    console.log(produto)
   });
}
