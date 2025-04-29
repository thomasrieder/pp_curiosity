let player = videojs('vid-player');

let timer = null,
    totalTime = 0;

let lastPlayerTime = player.currentTime();

player.on('play', startPlaying);
player.on('pause', pausePlaying);

let txtWatchTime = document.getElementById("watchTime");

function startPlaying() {
    console.log("START");
    timer = window.setInterval(function() {
        if(lastPlayerTime != player.currentTime()) {
            totalTime += 1;
        }
        lastPlayerTime = player.currentTime();
        console.log(totalTime + "s")
        txtWatchTime.innerHTML = totalTime + "s" + "/" + parseInt(player.duration(), 10) + "s";
    }, 1000);
}

function pausePlaying() {
    console.log("PAUSE");
    if (timer) clearInterval(timer);
}