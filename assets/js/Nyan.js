//Moving Nyan Function

function Nyan() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 10);

    function frame() {
        if (pos >= 100) {
            clearInterval(id);
        } else {
            pos += 0.1;
            elem.style.top = pos + '%';
            elem.style.left = pos + '%';
        }
    }

}

//Toggle background on/off 

var elembg = document.getElementById("background");
var elembtn = document.getElementById("button");

function noBackground() {
    elembg.style.display = "none";
    elembtn.style.display = "block";
}


function showBackground() {
    elembg.style.display = "block";
    elembtn.style.display = "none";
    setTimeout(noBackground, 10000);
}

var x = document.getElementById("soundtrack");

function playAudio (){
    x.play();
    setTimeout(pauseAudio, 10000);
}

function pauseAudio (){
    x.pause();
}