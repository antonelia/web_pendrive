document.addEventListener('DOMContentLoaded', () => {
    const player = new Plyr('#player', {
        title: 'Example Title',
        fullscreen:{ enabled: true}
    }); 
   
    player.on('ended', function(){
        // setTimeout(function() {
        //     $("#bajar").fadeIn();
        //     $('#siguiente').fadeIn();
        // }, 1500);    
    });
});