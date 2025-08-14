function soma()
{
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    let resultado = parseFloat(numero1) + parseFloat(numero2);

    let mensagem = document.getElementById("mensagem");

    mensagem.textContent = (resultado);
    console.log(resultado)

}