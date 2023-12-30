document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('background-video');
    var isForward = true;

    video.onended = function() {
        if(isForward) {
            // When video ends, rewind it & play
            video.currentTime = 0;
            video.playbackRate = -1; // Set playback rate negative to play backwards
        } else {
            // When video 'starts', fast forward to end & play
            video.currentTime = video.duration;
            video.playbackRate = 1; // Set playback rate positive to play forwards
        }
        isForward = !isForward; // Toggle the direction
        video.play();
    };
});
