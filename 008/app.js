function Exibir(){
let f1=  document.getElementById('f').value

    document.getElementById('resposta').innerHTML = 'Temperatura em Fahrenheit é  ' + f1 + '.'

}

function converter(){

    let c1= document.getElementById('c').value

    document.getElementById('resultado').innerHTML = 'temperatura em Celsius é '+((c-32)*5)/9
}


    