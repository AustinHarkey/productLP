let play = document.querySelector('.playVideo__play');
let modal = document.querySelector('.videoModal');
let close = document.querySelector('.xbox');
let toTop = document.querySelector('.toTop');

// let video = document.getElementById('video');
// video.src = '';

play.addEventListener('click', function() {
    modal.style.display = 'block';
    // video.src = '//www.youtube.com/embed/CrdOP_-fsRo?enablejsapi=1';
});

close.addEventListener('click', function() {
    modal.style.display = 'none';
    // video.src = '';
});





window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    if (scroll > 650) {
        toTop.style.display = 'block';
    } else {
        toTop.style.display = 'none';
    }
});

toTop.addEventListener('click', function() {
    window.scroll({ 
        top: 0, // could be negative value
        left: 0, 
        behavior: 'smooth' 
      });
});

// youtube player controls 

// https://developers.google.com/youtube/iframe_api_reference

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  
  // bind events

  play.addEventListener("click", function() {
    player.playVideo();
  });
  

  close.addEventListener("click", function() {
    player.pauseVideo();
  });
  
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);