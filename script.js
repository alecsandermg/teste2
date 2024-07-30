var res = window.document.getElementById('res')
let peso = window.document.getElementById('pes')
var alt = window.document.getElementById('alt')
function adicionar1()
{
    var p = Number(peso.value)
    if (p < 0)
    {
        alert('Digite um valor válido')
    }
    else
    res.innerHTML = `O seu peso é ${p} Kg`
}
function adicionar2()
{
    var altura = Number(alt.value)
    if (altura <= 0)
    alert('Digite um valor vállido')
    else if (peso.value.length == 0)
    alert ('Por favor, insira seu peso e após sua altura')
    else
    res.innerHTML+= `<p> Sua altura é ${altura}m`
}
function calcular()
{
if (peso.value.length==0 || alt.value.length==0)
alert('Por favor, preencha todos os campos e tente novamente')
else
{
    var p = Number(peso.value)
    var altura = Number(alt.value)
    var imc = p/(altura*altura)
    res.innerHTML+= `Seu IMC é ${imc}`
}
}