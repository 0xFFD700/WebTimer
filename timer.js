
var now = new Date().getTime();
var start = new Date("Sep 11, 2018 8:00:00").getTime();

function calcTime(end, event, progress) {

    var distance = end - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000); 
    var perc = Math.round(((now - start) / (end - start)) * 100) + '%';

    document.getElementById(event).innerHTML = days + " Tage " + hours + " Stunden "
    + minutes + " Minuten " + seconds + " Sekunden<br><span>bis zum Ende der <b>" + event + "<b></span><br>";

    document.getElementById(progress).innerHTML = '<div class="progress-bar bg-secondary" style="width:' + perc + '">' + perc + '</div>';

    if (distance < 0) {
        clearInterval(x);
        document.getElementById(event).innerHTML = "GAME OVER!";
    }
}

// Probezeit
var x = setInterval(function() {
  
    calcTime(new Date("Dec 14, 2018 13:00:00").getTime(), "pz", "pz-PB", );

}, 1000);

// Fachabitur
var y = setInterval(function() {
  
    calcTime(new Date("May 31, 2019 12:00:00").getTime(), "fa", "fa-PB");

}, 1000);
