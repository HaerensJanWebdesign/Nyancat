var seconds = 10;

function myMove() {
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