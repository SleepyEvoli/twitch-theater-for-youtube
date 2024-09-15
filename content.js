init();

function init() {
    initListeners();

    if (isShortVideo()) {
        console.log('Short Video Detected');
        addShortVideoClass();
    }
}


function enableTheaterTheme() {

    if (!enableCheck()) {
        return;
    }

    console.log('Enable Theater Theme');
    document.querySelector('html').classList.add('youtube-twitch-theater-theme');
}

function disableTheaterTheme() {
    console.log('Disable Theater Theme');
    document.querySelector('html').classList.remove('youtube-twitch-theater-theme');
}

function enableCheck() {
    const chatElement = document.querySelector('ytd-live-chat-frame');

    if (!chatElement) {
        return false;
    }

    return true;
}

function initListeners() {
    const theaterBtn = document.querySelector('.ytp-size-button.ytp-button');
    const fullscreenBtn = document.querySelector('.ytp-fullscreen-button.ytp-button');

    if (theaterBtn) {
        theaterBtn.addEventListener('click', (event) => {
            const ytdWatchFlexy = document.querySelector('ytd-watch-flexy');
            setTimeout(() => {
                if (ytdWatchFlexy.hasAttribute('theater')) {
                    enableTheaterTheme();
                } else {
                    disableTheaterTheme();
                }
            }, 0);
        }
    )}
    
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', (event) => {
            disableTheaterTheme();
        });
    }
}

function isShortVideo() {

    const video = document.querySelector('video');
    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;

    if (videoWidth < videoHeight) {
        return true;
    }

    return false;
}

function addShortVideoClass() {
    document.querySelector('.html5-video-container').classList.add('youtube-twitch-short-video');
}