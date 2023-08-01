const produto = {
 item: "Celular",
 marca: "Samsung",
 preço: 1500.00,
 descrição: "Smartphone Android",
 categoria: "Eletrônicos"
};

const exibirElement = document.querySelector("#exibir");
exibirElement .addEventListener("click", function() {
 for (let chave in produto) {
  const result = document.querySelector(".resultado");
   result.innerHTML += `<p> ${produto [chave] } </p>`;
 }
})