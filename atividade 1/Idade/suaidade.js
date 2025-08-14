function mostrarMensagem()
{
    alert("Bora ver se tu é menor de idade.");
    let idade = prompt("Qual a sua idade?");
    if(idade <=17)
    {
        alert("Você é menor de idade");
    }else
    {
        alert("Você é maior de idade");
    }
}