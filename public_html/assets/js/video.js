$(".hero-mute").click( function (){
    $("video").prop('muted', !$("video").prop('muted'));
});

$(".hero-replay").click(function(){
	$("video").css('display', 'block');
	video.load();
	
});

$('.hero-mute').on('click', function(){
        if( $("video").prop('muted') ){
          $(".hero-mute").html('<i class="fa">&#xf026;</i>');
        } else {
          $(".hero-mute").html('<i class="fa">&#xf028;</i>');
        }
      });
	  
