function updateClock() {
    var now = new Date();
    var time = now.toLocaleTimeString();
    document.getElementById('clock').innerHTML = time;
}
setInterval(updateClock, 1000);

var bgclock = document.getElementById("bg-clock");

fecha = new Date();
    hora = fecha.getHours();
    if(hora>=1 && hora<=10){
        bgclock.classList.add("day");
    }
    if(hora>=11 && hora<=18){
        bgclock.classList.add("alba");
    }
    if(hora>=19 && hora<=24){
        bgclock.classList.add("night");
    }

    var today = new Date();

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dateString = today.toLocaleDateString('es-ES', options);

    document.getElementById("day").textContent = dateString;




