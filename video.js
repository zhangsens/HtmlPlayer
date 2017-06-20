var config = {
    width: "100%",
    heigth: "",
    background: "#000000",
    playbackRate: 1,
    volume: 0.8,
    controls: false,
    playing: 0,
    button_l: 0
}

function Zplayer(videoSrc, target) {
    const tar = target || document.body;
    const player = document.createElement("div");
    player.id = "player";
    player.className = "player";
    const media = document.createElement("div");
    media.id = "media";
    media.className = "media";
    const playstatus = document.createElement("div");
    playstatus.className = "playstatus";
    const controls = document.createElement("div");
    controls.id = "controls";
    controls.className = "controls fl";
    const play = document.createElement("div");
    play.id = "play";
    play.className = "play";
    const timeline = document.createElement("div");
    timeline.id = "timeline";
    timeline.className = "timeline";
    const vtime = document.createElement("div");
    vtime.id = "vtime";
    vtime.className = "vtime";
    const played = document.createElement("div");
    played.id = "played";
    played.className = "played";
    const sound = document.createElement("div");
    sound.id = "sound";
    sound.className = "sound";
    const fullscreen = document.createElement("div");
    fullscreen.id = "fullscreen";
    fullscreen.className = "fullscreen";
    const volume = document.createElement("div");
    volume.id = "volume";
    volume.className = "volume";
    const volume_1 = document.createElement("div");
    volume_1.className = "volume_1";
    const volume_2 = document.createElement("div");
    volume_2.className = "volume_2";

    tar.appendChild(player);
    player.appendChild(media);
    player.appendChild(playstatus);
    player.appendChild(controls);
    controls.appendChild(play);
    controls.appendChild(timeline);
    controls.appendChild(sound);
    controls.appendChild(fullscreen);
    timeline.appendChild(vtime);
    timeline.appendChild(played);
    sound.appendChild(volume);
    volume.appendChild(volume_1);
    volume.appendChild(volume_2);

    const video = document.createElement("video");
    video.src = videoSrc;
    video.style.width = config.width;
    video.style.background = config.background;
    video.controls = config.controls;
    video.volume = config.volume;
    video.playbackRate = config.playbackRate;

    media.appendChild(video);
    video.oncontextmenu = function(e) {
        console.log(e);
        return false;
    }
    play.onclick = video.onclick = playcontrols;

    play.onclick = function() {
        playcontrols();
    }

    timeline.onmouseup = function(event) {
        if (event.button == 0) {
            video.currentTime = video.duration * event.layerX / timeline.offsetWidth;
            video.play();
        }
    }
    sound.onmouseenter = function() {
        volume.style.display = "block";
    }

    sound.onmouseleave = function() {
        volume.style.display = "none";
    }

    volume.onclick = function(e) {
        volume_2.style.height = e.layerY + "px";
        video.volume = 1 - e.layerY / 100;
    }

    fullscreen.onclick = function() {
        video.webkitRequestFullScreen();
    }

    function playcontrols() {
        if (config.playing) {
            video.pause();
            play.className = "play";
            playstatus.className = "playstatus";
            config.playing = 0;
        } else {
            video.play();
            play.className = "stop";
            playstatus.className = "";
            config.playing = 1;
        }
    }

    function playAnimation() {
        played.style.width = video.currentTime / video.duration * 100 + "%";
        requestAnimationFrame(playAnimation);
    }
    requestAnimationFrame(playAnimation);
}