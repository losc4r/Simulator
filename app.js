/**
 * Simulador dos Operadores Lógicos AND - OR - NOT
 * @author Carlos Antonio
 */

let receive //armazena o parâmetro(valor) recebido do HTML
// as variáveis abaixo são usada para identificar se o nterruptor está ligado ou desligado (false = desligado | true = ligado)
let sw1 = false
let sw2 = false
// a variável abaixo é usada para identificar se a lâmpada está quebrada
let quebrar = false

function sw (receive) {
    //console.log(receive) //apoio a lógica

    //lógica para os interruptores
    if(receive === 1 && sw1 === false) {
        document.getElementById('sw1').src = "img/swon.png"
        sw1 = true
    } else if(receive === 1 && sw1 === true) {
        document.getElementById('sw1').src = "img/swoff.png"
        sw1 = false
    } else if (receive === 2 && sw2 === false) {
        document.getElementById('sw2').src = "img/swon.png";
        sw2 = true
    } else if (receive === 2 && sw2 === true) {
        document.getElementById('sw2').src = "img/swoff.png";
        sw2 = false
    }
    
    //lógica para som de quebrar lâmpada
    if(receive === 3) {
        //a linha abaixo cria um objeto usando a classe Audio
        let som = new Audio()
        som.src = "sound/glassbreaking.wav"
        som.play()
        //trocar a imagem (manipulação do DOM)
        document.getElementById('lamp').src = "img/broken.jpg"
        quebrar = true
    }

    //lógica para o operador AND
    if (quebrar !== true) {
    if(sw1 === true && sw2 === true) {
        document.getElementById('lamp').src = "img/on.jpg"
    } else {
        document.getElementById('lamp').src = "img/off.jpg"
    }
    }
    
}