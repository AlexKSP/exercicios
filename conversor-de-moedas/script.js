/*const real = document.getElementById("coinType")
const dolar
const euro*/

const icon1 = document.getElementById("icon-1")
const icon2 = document.getElementById("icon-2")


function coinValue() {
    //valor digitado
    const coinCapture = document.getElementById("coinCapture").value

    //tipo de moeda
    const typeCoin = document.getElementById("coinType").value
    
    //moeda a ser convertida

    const typeCoinConvert = document.getElementById("coinConvert").value

    //mostrar resultado na tela
    const result = document.getElementById("result")
    
    //result.innerText = `Valor convertido: ${typeCoin}`
    //comparador de moeda a ser convertida

    if (typeCoin == typeCoinConvert) {
        result.innerText = `[ERRO] Não pode converte para a mesma moeda`
        icon1.src = " "
        icon2.src = " "

    } else if (coinCapture <= 0) {
        result.innerText = `0 Não é valido`
        icon1.src = " "
        icon2.src = " "

    } else if (typeCoin == "Real" && typeCoinConvert == "Dolar") {
        const realToDolar = parseFloat(coinCapture) * 4.86 
        const formatCoin = realToDolar.toLocaleString('pt-BR', {
             style: 'currency', 
             currency: 'USD'
            })
        icon1.src = "./assets/brazil-icon.png"
        icon2.src = "./assets/eua-icon.png"
        result.innerText = `Valor convertido: ${formatCoin}`

    } else if (typeCoin ==  "Real" && typeCoinConvert == "Euro") {
        const realToEuro = parseFloat(coinCapture) * 5.35
        const formatCoin = realToEuro.toLocaleString('pt-BR', {
            style: 'currency', 
            currency: 'EUR'
           })
        icon1.src = "./assets/brazil-icon.png"
        icon2.src = "./assets/europe-icon.png"
        result.innerText = `Valor convertido: ${formatCoin}`

    } else if (typeCoin == "Dolar" && typeCoinConvert == "Real") {
        const dolarTo = parseFloat(coinCapture) * 4.86
        const formatCoin = dolarTo.toLocaleString('pt-BR', {
            style: 'currency', 
            currency: 'BRL'
           })
        icon1.src = "./assets/eua-icon.png"
        icon2.src = "./assets/brazil-icon.png"
        result.innerText = `Valor convertido: ${formatCoin}`

    } else if (typeCoin == "Dolar" && typeCoinConvert == "Euro"){
        const dolarTo = parseFloat(coinCapture) * 0.91
        const formatCoin = dolarTo.toLocaleString('pt-BR', {
            style: 'currency', 
            currency: 'EUR'
           })
        icon1.src = "./assets/eua-icon.png"
        icon2.src = "./assets/europe-icon.png"
        result.innerText = `Valor convertido: ${formatCoin}`

    } else if (typeCoin == "Euro" && typeCoinConvert == "Real") {
        const euroTo = parseFloat(coinCapture) * 5.35
        const formatCoin = euroTo.toLocaleString('pt-BR', {
            style: 'currency', 
            currency: 'BRL'
           })
        icon1.src = "./assets/europe-icon.png"
        icon2.src = "./assets/brazil-icon.png"
        result.innerText = `Valor convertido: ${formatCoin}`

    } else if (typeCoin == "Euro" && typeCoinConvert == "Dolar") {
        const euroTo = parseFloat(coinCapture) * 1.10
        const formatCoin = euroTo.toLocaleString('pt-BR', {
            style: 'currency', 
            currency: 'USD'
           })
        icon1.src = "./assets/europe-icon.png"
        icon2.src = "./assets/eua-icon.png"
        result.innerText = `Valor convertido: ${formatCoin}`

    }
}