// Procurar o botao
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener("click", cloneField)


// Executar uma ação
function cloneField() {
    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // Limpar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll("input")

    fields.forEach(function(field) {
        // Pegar o field do momento e limpa ele
        field.value = "";

    })

    // Colocar na página. Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}