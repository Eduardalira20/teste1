
const tela = document.getElementById("tela");

function adicionaNaTela(input) {
    tela.value += input;


}

function limparTela() {
    tela.value = "";

}
function calculadora() {
    try {
        tela.value = eval(tela.value);


    }


    catch (error) {
        tela.value = "error"

    }
}