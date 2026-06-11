let itens = []

const botaoAdicionarItem = document.querySelector(".adicionar-item button")
botaoAdicionarItem.addEventListener("click", adicionarItem)

function adicionarItem() {
    const textoNovoItem = document.querySelector("#novo-item").value

    if (textoNovoItem === "") {
        alert("Digite um item válido, seu animal!")
    } else {
        const novoItem = {
            descricao: textoNovoItem,
            concluido: false
        }

        itens.push(novoItem)

        document.querySelector("#novo-item").value = ""

        mostrarListaAtualizada()
    } 
}

function mostrarListaAtualizada() {
    const sectionItens = document.querySelector(".itens")

    sectionItens.innerHTML = ""

    for(let i = 0; i < itens.length; i++) {
        sectionItens.innerHTML = sectionItens.innerHTML + `
            <div class="item">
                <div>
                <input type="checkbox" id="item-${i}" ${itens[i].concluido === true && "checked"}>

                    <div class="checkbox-customizada">
                        <img src="./imagens/checked.svg" alt="checked">
                    </div>

                    <label for="item-${i}" onclick="marcarItem(${i})">${itens[i].descricao}</label> 
                </div>

                <button onclick="apagarItem(${i})">
                    <img src="./imagens/trash-icon.svg" alt="item do lixo">
                </button>
            </div>

            <div class="checkbox-customizada" onclick="marcarItem(${i})">
    <img src="./imagens/checked.svg" alt="checked">
</div>
        `
    }

    itens.sort((itemA, itemB) => Number(itemA.concluido) - Number(itemB.concluido))

    

    
}

function apagarItem(indice) {
    itens.splice(indice, 1)
    mostrarListaAtualizada()
}

function marcarItem(indice) {
    itens[indice].concluido = !itens[indice].concluido
    mostrarListaAtualizada()
}