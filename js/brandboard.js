
    $("#qr-reel").hide();

document.addEventListener('DOMContentLoaded', () => {
    const player = new Plyr('#player', {
        title: 'Example Title',
        fullscreen:{ enabled: true}
    }); 
   
    player.on('ended', function(){
         setTimeout(function() {
             $("#qr-reel").fadeIn();
         }, 1500);    
    });
});