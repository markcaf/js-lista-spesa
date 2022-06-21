// Dichiarazione della variabile array della lista della spesa
const shopList = [
    "latte parzialmente scremato",
    "yogurt magro",
    "yogurt greco",
    "ricotta",
    "parmigiano reggiano",
    "arrosto di tacchino o di pollo",
    "bresaola",
    "prosciutto crudo",
    "prosciutto cotto",
    "pane",
    "pasta",
    "riso",
    "olio extravergine di oliva"
];
console.table(shopList);

// Assegnazione della variabile cartElement al contenitore dei nostri list-item
const cartElement = document.getElementById("cart_element");
console.log(cartElement);

// Ciclo while per creare in DOM gli elementi list-item, con aggiunta classi per lo stile
let i = 0;
while (i <= shopList.length - 1){
    const shopElement = document.createElement("button");
    shopElement.classList.add("list-group-item", "list-group-item-action")
    shopElement.innerText = shopList[i];
    cartElement.append(shopElement);
    i++;
};