$(document).ready(function() {
    $('html, body, *').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta);
        e.preventDefault();
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const player = new Plyr('#player', {
        title: 'Example Title',
        fullscreen:{ enabled: true}
     }); 
   
    player.on('ended', function(){
        console.log('ended');
      });
    });