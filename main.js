let inputs = document.querySelectorAll('input')
let condicao;
let hasError;

// calcular ao pressionar a teclad ENTER   
document.addEventListener('keydown', () => {
    hasError = findError()
    if(event.keyCode == 13 && !hasError){
        document.querySelector('#lbl').innerText = calcularImc();
    } else if(event.keyCode == 13) {
        //showErrorMessage()
    }
})

// calcular ao clicar em CALCULAR
document.querySelector('button').addEventListener('click', () => {
    hasError = findError()
    resetErrors();
    if(!hasError){
        document.querySelector('#lbl').innerText = calcularImc();
    } else {
        //showErrorMessage();
    }
})

// mostra uma mensagem de erro ALERT na tela se tiver algum erro
function showErrorMessage(){
    alert('por favor, preencha os campos')
}

// retorna TRUE se tiver algum erro ou FALSE quando não tiver erro
function findError(){
    if(inputs[0].value.length == 0){
        document.getElementById('error-weight').innerText = '⚠ ESQUECEU AQUI, AMIGO';
        document.getElementById('error-weight').setAttribute("style","font-family: 'Poppins'; color: crimson;");
    }
    if(inputs[1].value.length == 0){
        document.getElementById('error-height').innerText = '⚠ TÁ BEM, MANO?';
        document.getElementById('error-height').setAttribute("style","font-family: 'Poppins'; color: crimson;");
    }

    if(inputs[0].value.length == 0 || inputs[1].value.length == 0){
        return true
    } else {
        return false
    }
}

// calcula todos os dados para um resultado final que será mostrada na tela do usuário
function calcularImc(){
    var imc = String(inputs[0].value / calcularAltura())
    imc = imc.substring(0, 5)
    
    if(imc < 18.5){
        condicao = 'MAGREZA'
    } else if(imc < 24.9){
        condicao = 'NORMAL'
    } else if(imc < 30){
        condicao = 'SOBREPESO'
    } else if(imc > 30){
        condicao = 'OBESIDADE'
    }
    
    return `IMC: ${imc} kg/m² | ${condicao}`
}

// retorna um resultado para a FUNÇÃO calcularImc()
function calcularAltura(){
    return inputs[1].value * inputs[1].value
}

// mensagens de erros desaparecem ao executar a FUNÇÃO calcularImc()
function resetErrors(){
    if(inputs[0].value.length > 0){
        document.getElementById('error-weight').innerText = '';
    }
    if(inputs[1].value.length > 0){
        document.getElementById('error-height').innerText = '';
    }
}