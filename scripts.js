const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')
const dolar = 5
const euro = 5.41
const bitcoin = 0.0000074

const convertValue = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const convertedValue = document.getElementById('converted-value')
    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputReais);
    if(select.value === "US$ Dolar Americano"){
        convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputReais / dolar);
    }
    if(select.value === "€ Euro"){
        convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputReais / euro);  
    }
    if(select.value === "Bitcoin"){
        convertedValue.innerHTML = inputReais * bitcoin;  
    }
}
const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyFlag = document.getElementById('flag')
    if(select.value === 'US$ Dolar Americano'){
        currencyName.innerHTML = "Dolar Americano"
        currencyFlag.src = "./imagens/197484.png"
    }
    if(select.value === '€ Euro'){
        currencyName.innerHTML = "Euro"
        currencyFlag.src = "./imagens/png-clipart-euro-sign-currency-symbol-exchange-rate-money-euro-text-trademark.png"
    }
    if(select.value === 'Bitcoin'){
        currencyName.innerHTML = "Bitcoin"
        currencyFlag.src = "./imagens/logo-bit.png"
    }
    convertValue()
}
button.addEventListener('click',convertValue)
select.addEventListener('change',changeCurrency)

