const turnOn = document.getElementById ('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')


function lampOn(){
    lamp.src = '/assets/ligada.jpg'
}

turnOn.addEventListener ('click', lampOn)